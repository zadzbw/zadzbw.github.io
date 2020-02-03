import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import Test from './components/Test'
import styles from './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((v) => v + 1)}>add</button>
      <p className={styles.p}>hello world</p>
      <img src={require('@images/shanks.jpg')} alt=""/>
      <Test/>
    </div>
  )
}

export default hot(App)
