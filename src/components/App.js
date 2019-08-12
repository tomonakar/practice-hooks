import React, { useReducer } from 'react'

// bootstrapを適用
// @see: https://getbootstrap.com/docs/4.3/getting-started/webpack/#importing-compiled-css
import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events'
import EventForm from './EventForm'
import reducer from '../reducers'
import AppContext from '../contexts/AppContext'

console.log({AppContext})
const App = () => {
  // useReducerの使い方 第3引数は初期化時にやりたい処理を渡す
  // const [state, dispatch] = useReducer(reducer, initialState, init)
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'Hello, I am a provider'}>
      <div className='container-fluid'>
        <EventForm  state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App