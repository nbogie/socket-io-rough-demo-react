import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SocketIODemo } from './SocketIODemo'

function App() {
  const [isShowChat, setShowChat] = useState(true)

  return (
    <div className="App">
      {isShowChat ?
        <SocketIODemo />
        : "CHAT UNMOUNTED"}
      <button onClick={() => setShowChat(p => !p)}>toggle chat</button>
    </div>
  )
}

export default App

