
import { Todo, TodoState, ITodoService } from './Model';

let _lastId: number = 0;

function generateId(): number {
        return _lastId += 1
}
    
function clone<T>(src: T): T{
    var clone = JSON.stringify(src);
    return JSON.parse(clone)
}

export default class TodoService implements ITodoService{

    
    private todos: Todo[] = []

    constructor(todos: string[]) {
        if (todos) {
            todos.forEach(todo => this.add(todo))
        }
    }


    add(todo: Todo): Todo
    add(name: string): Todo
    add(input): Todo {
        
        var todo: Todo = {
            id: generateId(),
            name: null,
            state: TodoState.active
        }

        if (typeof input === "string") {
            todo.name = input
        }else if (typeof input.name === "string") {
            todo.name = input.name
        }else{
            throw "invalid todo"
        }

        this.todos.push(todo)

        return todo
    }


    clearCompelete(): void {
        this.todos = this.todos.filter(todo => todo.state != TodoState.compelete)
    }

    getAll(): Todo[] {
        return clone(this.todos)
    }


    getById(todoId: number): Todo {
        const todo = this._find(todoId)
        return clone(todo)
    }

    toggle(todoId: number): void {
        const todo = this._find(todoId)
        
        if (!todo) return;

        switch (todo.state) {
            case TodoState.active:
                todo.state = TodoState.compelete
                break;
            case TodoState.compelete:
                todo.state = TodoState.active
                break;
        
            default:
                break;
        }
    }

    private _find(todoId: number): Todo{
        var filterTodos = this.todos.filter(todo => todo.id === todoId);
        if (filterTodos) {
            return filterTodos[0]
        }
        return null;
    }

}