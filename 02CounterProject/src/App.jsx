import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  let [msg, setMessage] = useState('')

  const addValue = () => {
    console.log("Clicked", counter);
    counter = counter + 1
    if (counter > 20) {
      counter = 20
      setCounter(20);
      setMessage("Value cannot be greater than 20");
    }
    else {
      setCounter(counter);
      setMessage('')
    }
  }
  const decreaseValue = () => {
    console.log("Clicked", counter);
    counter = counter - 1;
    if (counter < 0) {
      counter = 0
      setCounter(0);
      setMessage("Value cannot be less than 0");
    }
    else {
      setCounter(counter);
      setMessage('')
    }
  }
  return (
    <>
      <h1> Chai aur React </h1>
      <h3> Counter : {counter} </h3>
      <button onClick={addValue}> Add Value </button>
      <br />
      <button onClick={decreaseValue}> Decrease Value </button>
      <br />
      <p>{msg}</p>
    </>
  )
}

export default App
