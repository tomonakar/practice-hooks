import React, { useReducer } from 'react'

// bootstrapを適用
// @see: https://getbootstrap.com/docs/4.3/getting-started/webpack/#importing-compiled-css
import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events'
import EventForm from './EventForm'
import reducer from '../reducers/'
import AppContext from '../contexts/AppContext'

const App = () => {
  const initialState = {
    events: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='container-fluid'>
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  )
}

export default App