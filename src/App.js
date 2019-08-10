import React, { useState } from 'react'

const App = props => {
  // useStateは、現在のstateとstateを更新する関数を返す
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    // useStateが返した関数を使ってstateを更新できる
    setPrice(props.price)
    setName(props.name)
  }


  return (
    <>
      <p>{name}の値段は{price}円</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>reset</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </>
  )
}

// propsでnameとpriceを受け取る場合のinitial state
App.defaultProps = {
  name: '',
  price: 1000
}

export default App