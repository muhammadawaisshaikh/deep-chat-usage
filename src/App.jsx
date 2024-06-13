import { useState } from 'react'
import './App.css'
import { DeepChat } from 'deep-chat-react'

function App() {
  return (
    <div className='container pt-5'>
      <div className='text-center'>
        <h1>Ai Powered ChatBot</h1>
        <p>using deep-chat</p>

        <div className="row justify-content-center mt-5">
          <div className="col-6">
            <DeepChat />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
