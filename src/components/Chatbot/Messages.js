import React from 'react'
import { useSelector } from 'react-redux';

const Messages = () => {
    const messages = useSelector(state => state.chatbot.messages)
    console.log("messages", messages);

    const displayMessage = (message, index)=>{
        console.log(message,index)
        if(message.speak == "user"){
            return <div key={index} className='messages_user'>
                    <p className='messages_text_user'>{message.text}</p>
            </div>
        }else if (message.speak = "bot"){
            return <div key={index} className='messages_df'>
                    <p className='messages_text_df'>{message.text}</p>
            </div>
        }
    }
    return(
        <div className='messages'>
           { messages.map((message, index)=>{
            return displayMessage(message, index)
           }) }    
        </div>
    )
}

export default Messages