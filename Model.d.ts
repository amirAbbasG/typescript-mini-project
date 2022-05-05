export interface Todo {
    id: number;
    name: string;
    state: TodoState;
}
export declare enum TodoState {
    active = 1,
    compelete = 2
}
export interface ITodoService {
    add(todo: Todo): Todo;
    add(name: string): Todo;
    clearCompelete(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}
