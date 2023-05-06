import React from 'react'
import "./Nav.css"
const Nav = () => {
  return (
    <div className='navbar'>
            <div className='navbody'>
                <a href= '/'>Chatbot</a>
                <div>
                    <nav>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    </div>
  )
}

export default Nav