import axios from 'axios'
import { action } from 'typesafe-actions'
import { ActionTypes }  from '../constants/task'
import { Task } from '../types/task'

export const fetchTaskSuccess = (data: Task[]) => action(ActionTypes.TASK_FETCH_SUCCESS, { data })
export const fetchTaskError = (status: any) => action(ActionTypes.TASK_FETCH_ERROR, { status })
export const fetchTaskLoading = (status: boolean) => action(ActionTypes.TASK_FETCH_LOADING, { status })
export const includeTask = (data: Task) => action(ActionTypes.TASK_INCLUDE, { data })
export const deleteTask = (data: Task[]) => action(ActionTypes.TASK_DELETE, { data })

export const fetchTask = () => {
    return async (dispatch: any, getState: any) => {
        axios.get('http://localhost:9090/card')
        .then(res => dispatch(fetchTaskSuccess(res.data)))
        .catch(res => dispatch(res.error))
    }
}

export const fetchIncludeTask = (data: Task) => {
    return async (dispatch: any, getState: any) => {
        axios.post('http://localhost:9090/card', data)
        .then(res => dispatch(includeTask(res.data)))
        .catch(res => dispatch(res.error))
    }
}

export const fetchDeleteTask = (id?: number) => {
    return async (dispatch: any, getState: any) => {
        axios.post(`http://localhost:9090/card/${id}`)
        .then(res => dispatch(deleteTask(res.data)))
        .catch(res => dispatch(res.error))
    }
}
