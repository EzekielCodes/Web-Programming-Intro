const express = require('express');
const path    = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

// used to read the request body req.*
app.use(bodyParser.json());
app.use(cors());

let db = new sqlite3.Database('discotheque.db');

// get all songs from the database
app.get('/songs', function (req, res) {
    

    db.all('SELECT * FROM songs ORDER BY artist', [], (err,rows) => {
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        else{
            res.status(200).json(rows);
        }
    });
    // @TODO
});

// get one single song by id from the database
app.get('/songs/:id', function (req, res) {
    var sql = "select * from songs where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

// add a song to the database
app.post('/songs', function (req, res) {
    // @TODO
    var errors=[]
    if (!req.body.title){
        errors.push("No title specified");
    }
    if (!req.body.artist){
        errors.push("No artist specified");
    }
    if (!req.body.bpm){
        errors.push("No bpm specified");
    }
    if (!req.body.genre){
        errors.push("No genre specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }

    var data = {
        title : req.body.title,
        artist : req.body.artist,
        bpm : req.body.bpm,
        genre : req.body.genre
    }
    console.log("here");
    var stmt = "INSERT INTO songs (title, artist, bpm,genre) VALUES (?,?, ?,?)";
    var params = [data.title, data.artist, data.bpm, data.genre];
    db.run(stmt,params, function(err,result){
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
});

// update a song in the database
app.put('/songs/:id', function (req, res) {
    var data = {
        title : req.body.title,
        artist : req.body.artist,
        bpm : req.body.bpm,
        genre : req.body.genre
    }

    db.run(
        `UPDATE songs set 
           title = COALESCE(?,title), 
           artist = COALESCE(?,artist), 
           bpm = COALESCE(?,bpm) ,
           genre = COALESCE(?,genre)
           WHERE id = ?`,
        [data.title, data.artist, data.bpm,data.genre, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
    // @TODO
});



// make sure to run the app with `node app.js` command
    
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});