import React, { useState } from 'react'

const App = () => {
  const [count, setCount]= useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  // ステート更新用の関数は更新前の状態を引数で受け取ることができる
  // @see: https://reactjs.org/docs/hooks-reference.html#functional-updates
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)
  const double = () => setCount(count * 2)
  const divid3 = () => setCount(prevCount => {
    if (prevCount % 3 === 0) {
      return prevCount / 3
    }
    return prevCount
  })

  return (
    <React.Fragment>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divid3}>3の倍数の時に3で割る</button>
      </div>
    </React.Fragment>
  )
}

export default App
