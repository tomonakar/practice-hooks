import React, { useState } from 'react'

const App = props => {
  // useStateはオブジェクトを受け取って初期化することができる
  const [state, setState] = useState(props)

  // ステートの更新もオブジェクトを使って一度に定義できる
  const reset = () => {
    setState(props)
  }

// エレメントの中で使う関数も以下のように書き換える
  return (
    <>
      <p>{state.name}の値段は{state.price}円</p>
      <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
      <button onClick={reset}>reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  )
}

// propsでnameとpriceを受け取る場合のinitial state
App.defaultProps = {
  name: '',
  price: 1000
}

export default App