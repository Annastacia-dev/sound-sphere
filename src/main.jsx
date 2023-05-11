import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PlayerProvider from './contexts/PlayerProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlayerProvider>
      <App />
    </PlayerProvider>
  </React.StrictMode>,
)
