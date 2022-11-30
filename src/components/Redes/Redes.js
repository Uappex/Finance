import React from 'react'
import './redes.scss'
import { FaTiktok, FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

function App() {
  return (
    <div className="redes">  
      <a href="#" className="red hover" rel="noreferrer" target="_blank" title="Telegram"><FaTelegramPlane/></a>      
      <a href="#" className="red hover" rel="noreferrer" target="_blank" title="Instagram"><AiFillInstagram/></a>      
      <a href="#" className="red hover" rel="noreferrer" target="_blank" title="Tiktok"><FaTiktok/></a>      
    </div>
  )
}

export default App