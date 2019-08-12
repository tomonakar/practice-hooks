import React, { useContext, useState } from 'react'

import AppContext from '../contexts/AppContext'
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    const action = {
      type: CREATE_EVENT,
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
      return dispatch({type: DELETE_ALL_EVENTS})
    }
    return
  }

  const unCreatable = title === '' || body === ''

  return (
    <React.Fragment>
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
        <button className='btn btn-danger' disabled={state.events.length === 0} onClick={deleteAllEvents}>全イベント削除</button>
      </form>
    </React.Fragment>
  )
}
export default EventForm