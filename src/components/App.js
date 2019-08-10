import React, { useReducer, useState } from 'react'

// bootstrapを適用
// @see: https://getbootstrap.com/docs/4.3/getting-started/webpack/#importing-compiled-css
import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event'
import reducer from '../reducers'

const App = props => {
  // useReducerの使い方 第3引数は初期化時にやりたい処理を渡す
  // const [state, dispatch] = useReducer(reducer, initialState, init)
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    const action = {
      type: 'CREATE_EVENT',
      title,
      body
    }
    dispatch(action)
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) {
      return dispatch({type: 'DELETE_ALL_EVENTS'})
    }
    return
  }

  const unCreatable = title === '' || body === ''

  return (
    <div className='container-fluid'>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディ</label>
          <textarea className='form-control' id='formEventBody' value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className='btn btn-primary' disabled={unCreatable} onClick={addEvent}>イベント作成</button>
        <button className='btn btn-danger' disabled={state.length === 0} onClick={deleteAllEvents}>全イベント削除</button>

        <h4>イベント一覧</h4>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              state.map((event, index) => {
                return <Event key={index} event={event} dispatch={dispatch} />
              })
            }
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default App