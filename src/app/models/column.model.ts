import { Task } from "./task-model";

export class Column {
    constructor(public name: string, public tasks: Task[]) {}
}
