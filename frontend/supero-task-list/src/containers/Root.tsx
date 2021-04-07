import React, { useEffect } from 'react'

import { Provider, useDispatch } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

import App from './App'
import { fetchTask } from '../actions/tasks'
import { reducers } from '../reducers'
import thunk from 'redux-thunk'

const Root = () => {
    const store = createStore(reducers, applyMiddleware(thunk))

    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default Root