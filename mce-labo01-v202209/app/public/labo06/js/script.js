;(function () {

    'use strict';

    function htmlToElement(html) {
        const template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }

    const refreshTodos = function() {
        fetch('api/tasks')
        .then((response) => {
            return response.json();
        })
        .then((todos) => {
            const todoElements = document.querySelectorAll('.todos-container .todo');
            todoElements.forEach(todoElement => { 
                todoElement.remove();
            });
            todos.tasks.forEach(td => {
                const sp1 = htmlToElement('<div class="todo">' +
                    '    <p class="item ' + td.priority +'">' + td.name + '</p>' +
                    '    <span>' +
                    '        <a href="#" class="edit-todo" data-id="' + td.id + '"><i class="fas fa-pen"></i></a>' +
                    '        <a href="#" class="del-todo" data-id="' + td.id + '"><i class="fas fa-times fa-lg"></i></a>' +
                    '    </span>\n' +
                    '</div>');
                const sp2 = document.querySelector(".todos-container .add-todo");

                // Get the parent element
                const parentDiv = sp2.parentNode

                // Insert the new element into before sp2
                parentDiv.insertBefore(sp1, sp2)
            });
        })
        .catch((err) => console.log(err));
    };

    const removeTodo = function(id) {
        fetch(encodeURI('api/tasks/' + id), {
            method: "DELETE",
        })
        .then((response) => {
            if (response.status === 204) {
                refreshTodos();
            }
        })
        .catch((err) => console.log(err));
    };

    const addTodo = function(todo, priority) {
        fetch('api/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                name: todo,
                priority: priority
            }),
        })
        .then((response) => {
            if (response.status === 201) {
                refreshTodos();
            }
        })
        .catch((err) => console.log(err));
    };

    // @TODO: editTodo

    const editTodo = function(todo, priority,id) {
        fetch('api/tasks/' + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                name: todo,
                priority: priority,
            }),
        })
        .then((response) => {
            if (response.status === 201) {
                refreshTodos();
            }
        })
        .catch((err) => console.log(err));
    };

    window.addEventListener('DOMContentLoaded', (event) => {
        refreshTodos();
        let editLink;

        const container = document.querySelector('.todos-container');

        container.addEventListener('click', (event) => {

            event.preventDefault();

            // we'll use event bubbling and can check out the target here
            // event bubbling is necessary because tasks added after the initial load, need too to be listened to
            console.log(event.target);
            let modelAdd = document.querySelector('#addTodoModal');

            if (event.target.classList.contains('fa-times')) {
                const deleteLink = event.target.parentNode;
                removeTodo(deleteLink.dataset.id);
            }

            if (event.target.classList.contains('fa-plus-circle') || event.target.parentNode.classList.contains('add-todo')) {
                const modal = document.querySelector('#addTodoModal');
                modal.style.display = 'block';
                modal.focus();
            }

            if (event.target.classList.contains('fa-pen')) {
                let modal = document.querySelector('#editTodoModal');
                let modelAdd = document.querySelector('#addTodoModal');
                modal.style.display = 'block';
                modal.focus();
                editLink = event.target.parentNode;
                document.querySelector('#editTodoModal .modal-input').value = event.target.parentNode.parentNode.parentNode.textContent.trim();
                document.querySelector('#editTodoModal .modal-select').value = event.target.parentNode.parentNode.parentNode.firstElementChild.classList[1].trim();
                

                document.querySelector('#editTodoModal .button-save').addEventListener('click', function (){
                    let naam = document.querySelector('#editTodoModal .modal-input').value;
                    let prio = document.querySelector('#editTodoModal .modal-select').value
                    let id = editLink.dataset.id;
                    editTodo(naam,prio,id);
                    modal.style.display = 'none';

                });

                document.querySelector('#editTodoModal .close').addEventListener('click', function (){
                    modal.style.display = 'none';
                });

                document.querySelector('#editTodoModal .button-cancel').addEventListener('click', function (){
                    modal.style.display = 'none';
                });

               
            }

            document.querySelector('#addTodoModal .close').addEventListener('click', function (){
                modelAdd.style.display = 'none';
            });

            document.querySelector('#addTodoModal .button-add' ).addEventListener('click', function (){
                let naam = document.querySelector('#addTodoModal .modal-input').value;
                let prio = document.querySelector('#addTodoModal .modal-select').value
                addTodo(naam,prio);
                modelAdd.style.display = 'none';

            });

            document.querySelector('#addTodoModal .button-cancel').addEventListener('click', function (){
                modelAdd.style.display = 'none';
            });
        


            //fa-plus-circle

        });


        // @TODO
        // add click event listeners to
        //    '#editTodoModal .close'         -> hide #editTodoModal
        //    '#editTodoModal .button-save'   -> call editTodo with the right params
        //                                       hide #editTodoModal
        //    '#editTodoModal .button-cancel' -> hide #editTodoModal
        //    '#addTodoModal .close'          -> hide #addTodoModal
        //    '#addTodoModal .button-add'     -> call addTodo with the right params
        //                                       hide #addTodoModal
        //                                       clear inputs
        //    '#addTodoModal .button-cancel'  -> hide #addTodoModal


    });
})();