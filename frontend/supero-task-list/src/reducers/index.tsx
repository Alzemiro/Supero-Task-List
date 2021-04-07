import { combineReducers } from 'redux'

import { reducers as taskReducers } from './tasks'

const reducers = combineReducers({
    taskReducers
})

export { reducers }