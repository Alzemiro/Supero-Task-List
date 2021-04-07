import axios from 'axios'
import { action } from 'typesafe-actions'
import { ActionTypes }  from '../constants/task'
import { Task } from '../types/task'

export const fetchTaskSuccess = (data: Task[]) => action(ActionTypes.TASK_FETCH, { data })
export const includeTask = (data: Task[]) => action(ActionTypes.TASK_INCLUDE, { data })

export const fetchTask = () => {
    return async (dispatch: any, getState: any) => {
        const response = await axios.get('http://localhost:9090/card')
        dispatch(fetchTaskSuccess(response.data));
    }
}
