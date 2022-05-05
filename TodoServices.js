System.register(["./Model"], function (exports_1, context_1) {
    "use strict";
    var Model_1, _lastId, TodoService;
    var __moduleName = context_1 && context_1.id;
    function generateId() {
        return _lastId += 1;
    }
    function clone(src) {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    }
    return {
        setters: [
            function (Model_1_1) {
                Model_1 = Model_1_1;
            }
        ],
        execute: function () {
            _lastId = 0;
            TodoService = class TodoService {
                constructor(todos) {
                    this.todos = [];
                    if (todos) {
                        todos.forEach(todo => this.add(todo));
                    }
                }
                add(input) {
                    var todo = {
                        id: generateId(),
                        name: null,
                        state: Model_1.TodoState.active
                    };
                    if (typeof input === "string") {
                        todo.name = input;
                    }
                    else if (typeof input.name === "string") {
                        todo.name = input.name;
                    }
                    else {
                        throw "invalid todo";
                    }
                    this.todos.push(todo);
                    return todo;
                }
                clearCompelete() {
                    this.todos = this.todos.filter(todo => todo.state != Model_1.TodoState.compelete);
                }
                getAll() {
                    return clone(this.todos);
                }
                getById(todoId) {
                    const todo = this._find(todoId);
                    return clone(todo);
                }
                toggle(todoId) {
                    const todo = this._find(todoId);
                    if (!todo)
                        return;
                    switch (todo.state) {
                        case Model_1.TodoState.active:
                            todo.state = Model_1.TodoState.compelete;
                            break;
                        case Model_1.TodoState.compelete:
                            todo.state = Model_1.TodoState.active;
                            break;
                        default:
                            break;
                    }
                }
                _find(todoId) {
                    var filterTodos = this.todos.filter(todo => todo.id === todoId);
                    if (filterTodos) {
                        return filterTodos[0];
                    }
                    return null;
                }
            };
            exports_1("default", TodoService);
        }
    };
});
