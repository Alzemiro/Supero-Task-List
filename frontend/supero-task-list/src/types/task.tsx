export type Task = {
    id?: number,
    title: string,
    content: string,
    finished: boolean,
    dateInc: number,
    dateAlt: number,
}

export interface TaskState {
    readonly tasks: Task[]
}