import { ActionTypes } from '../constants/task'

const INITIAL_STATE = [{
        id: 0,
        content: "",
        dateAlt: 0,
        dateInc: 0,
        finished: false,
        title: ""
    }]

const reducers = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case ActionTypes.TASK_GET:
            return { ...state, tasks: action.payload.data }
        case ActionTypes.TASK_FETCH_SUCCESS:
            return  action.payload.data
        case ActionTypes.TASK_DELETE:
            return { ...state, tasks: action.payload.data }
        case ActionTypes.TASK_INCLUDE:
            return { ...state, tasks: action.payload.data }
        default:
            return state
    }
}

export { reducers }
