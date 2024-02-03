import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind CSS </h1>
      <div className='flex flex-row space-x-5'>
        <Card username="Shreyash" btnText="Click me" />
        <Card username="MSD" />
      </div>
    </>
  )
}

export default App
