import React from 'react'
import "./Chatbot.css"
const Chatbot = () => {
  return (
    <div className='chatbot'>
        <div className='chatbothead'>
            <h1 className='chatbotheadtext'>Chatbot</h1>
        </div>
        <div className='chatbotmid'></div>
        <div className='chatbotfoot'>
            <input className ='chatbotfootinput' type='text' placeholder='Ask a question!' />
            <button className ='chatbotfootsend'>Send</button>
        </div>
    </div>
  )
}

export default Chatbot