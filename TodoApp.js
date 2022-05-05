System.register(["./TodoServices", "./TodoListComponent"], function (exports_1, context_1) {
    "use strict";
    var TodoServices_1, TodoListComponent_1, TodoApp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TodoServices_1_1) {
                TodoServices_1 = TodoServices_1_1;
            },
            function (TodoListComponent_1_1) {
                TodoListComponent_1 = TodoListComponent_1_1;
            }
        ],
        execute: function () {
            TodoApp = class TodoApp {
                constructor(el, todos) {
                    this.todoService = new TodoServices_1.default(todos);
                    this.initialize(el);
                }
                addTodo(todoName) {
                    this.todoService.add(todoName);
                    this.renderTodos();
                }
                clearCompleted() {
                    this.todoService.clearCompelete();
                    this.renderTodos();
                }
                toggleTodoState(todoId) {
                    this.todoService.toggle(todoId);
                    this.renderTodos();
                }
                renderTodos() {
                    var todos = this.todoService.getAll();
                    this.todoList.render(todos);
                }
                initialize(el) {
                    var _this = this;
                    var addTodoFormEl = el.getElementsByClassName("add-todo")[0], addTodoNameEl = addTodoFormEl.getElementsByTagName("input")[0], todoListEl = el.getElementsByClassName("todo-list")[0], clearCompletedEl = el.getElementsByClassName("clear-completed")[0];
                    addTodoFormEl.addEventListener("submit", function (evnt) {
                        _this.addTodo(addTodoNameEl.value);
                        addTodoNameEl.value = "";
                        evnt.preventDefault();
                    });
                    todoListEl.addEventListener("todo-toggle", function (evnt) {
                        var todoId = evnt.detail.todoId;
                        _this.todoService.toggle(todoId);
                        _this.renderTodos();
                    });
                    clearCompletedEl.addEventListener("click", function () {
                        _this.clearCompleted();
                    });
                    this.todoList = new TodoListComponent_1.default(todoListEl);
                    this.renderTodos();
                }
            };
            exports_1("TodoApp", TodoApp);
        }
    };
});
