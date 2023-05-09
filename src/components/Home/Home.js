import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div>
    <h1 className='titletext'>Welcome to Excel Help Bot</h1>
    <h2 className='subtitle'>How to ask a question?</h2>
    <p className='simpletext'>
      To use the Chatbot please type where it says "Ask a question!" and then press send to ask the Chatbot.<br></br> The bot should respond with the corresponding solution to your question
    </p>
    <h2 className='subtitle'>Solutions we have so far:</h2>
    <ul className='list'>
      <li>Averages</li>
      <li>Charts</li>
      <li>Merging</li>
      <li>Filtering data</li>
      <li>Sorting data</li>
      <li>Find and Replace</li>
      <li>Sum</li>
      <li>Duplicates</li>
      <li>Pivot Tables</li>
      <li>More cominng soon...</li>
    </ul>
    </div>

  )
}

export default Home