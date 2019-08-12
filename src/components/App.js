import React, { useEffect, useReducer } from 'react'

// bootstrapを適用
// @see: https://getbootstrap.com/docs/4.3/getting-started/webpack/#importing-compiled-css
import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events'
import EventForm from './EventForm'
import OperationLogs from './OperationLogs'
import reducer from '../reducers/'
import AppContext from '../contexts/AppContext'

const APP_KEY = 'APP_KEY'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
      events: [],
      operationLogs: [],
    }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='container-fluid'>
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App