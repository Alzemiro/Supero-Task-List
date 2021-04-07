import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTask } from '../actions/tasks';

import HomeComponent from '../components/Home';

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTask())
    }, [])
    return(
        <HomeComponent />
    )
}

export default App;
