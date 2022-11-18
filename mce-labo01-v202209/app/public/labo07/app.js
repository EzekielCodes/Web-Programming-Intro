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


// get all songs from the database
app.get('/songs', function (req, res) {
    let db = new sqlite3.Database('discotheque.db');

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
    // const id = reg.params.id;
    // let db = new sqlite3.Database('discotheque.db');
    // const stmt = db.prepare("SELECT * FROM songs Where id = ?");
    // stmt.get(id,(err,row) => {
    //     if(err || !row){
    //         res.status(404);
    //     }
    //     else{
    //         res.json
    //     }
    // });
    // // @TODO
    // console.log("here");
    // res.sendStatus(404);
});

// add a song to the database
app.post('/songs', function (req, res) {

    // @TODO
});

// update a song in the database
app.put('/songs/:id', function (req, res) {

    // @TODO
});



// make sure to run the app with `node app.js` command
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});