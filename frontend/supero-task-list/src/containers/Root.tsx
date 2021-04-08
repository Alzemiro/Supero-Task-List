import React from 'react'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import App from './App'

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