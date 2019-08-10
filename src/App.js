import React, { useState } from 'react'

const App = props => {
  // useStateはオブジェクトを受け取って初期化することができる
  const [state, setState] = useState(props)
  const {name, price} = state

// エレメントの中で使う関数も以下のように書き換える
  return (
    <>
      <p>{name}の値段は{price}円</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  )
}

// propsでnameとpriceを受け取る場合のinitial state
App.defaultProps = {
  name: '',
  price: 1000
}

export default App