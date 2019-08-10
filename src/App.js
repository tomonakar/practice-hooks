import React, { useEffect, useState } from 'react'

const App = props => {
  // useStateはオブジェクトを受け取って初期化することができる
  const [state, setState] = useState(props)
  const {name, price} = state

  // DOMのレンダリングの後でuseEffectが実行される
  // componentDidMount/componentDidUpdateに挙動が似ている
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate')
  })

  // useEffectは何個でも指定できる
  // 第二引数に空の配列を渡すことでcomponentDidMountの挙動にできる
  useEffect(() => {
    console.log('This is like componentDidMount')
  }, [])

  // 第二引数の配列にキーを指定すると、そのキーのステートが更新された時だけ実行される
  // componentDidUpdateの挙動
  useEffect(() => {
    console.log('This callback is for name only.')
  }, [name, price])

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