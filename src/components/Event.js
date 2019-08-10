import React from 'react'

const Event = ({ dispatch, event }) => {
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`ID:${id}のイベントを本当に削除しても良いですか？`)
    if (result) {
      return dispatch({ type: 'DELETE_EVENT', id })
    }
    return
  }

    return (
      <tr>
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button type='button' className='button btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
      </tr>
    )
}

export default Event