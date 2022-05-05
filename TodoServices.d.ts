import { Todo, ITodoService } from './Model';
export default class TodoService implements ITodoService {
    private todos;
    constructor(todos: string[]);
    add(todo: Todo): Todo;
    add(name: string): Todo;
    clearCompelete(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
    private _find;
}
