import React, { useState } from 'react'
import "./Chatbot.css"
import Messages from './Messages'
import {useDispatch} from 'react-redux'
import * as chatbotActions from "../../store/actions/chatbotActions"
//console.log("hello")
const Chatbot = () => {

  const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  const handleUserQuery = async() =>{
    if(query === ""){
      alert("Please enter something!")
      return
    }
    const data = {
      text: query
    }
    
    dispatch(chatbotActions.tetxtQueryAction(data))
    //console.log("data123",dispatch(chatbotActions.tetxtQueryAction(data)))
    setQuery("")
  }  

  return (
    <div className='chatbot'>
        <div className='chatbothead'>
            <h1 className='chatbotheadtext'>Chatbot</h1>
        </div>
        <div className='chatbotmid'>
          <Messages></Messages>
        </div>
        <div className='chatbotfoot'>
            <input className ='chatbotfootinput' type='text' value={query} placeholder='Ask a question!' onChange={(e)=> setQuery(e.target.value)} />
            <button className ='chatbotfootsend' onClick={()=> handleUserQuery()}>Send</button>
        </div>
    </div>
  )
}

export default Chatbot