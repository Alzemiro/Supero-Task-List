import { Task } from "../types/task"

const selectors = {
    getTask: (state: any) => state.taskReducers
}

export { selectors }