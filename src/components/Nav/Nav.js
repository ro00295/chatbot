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
                            <li><a href='https://www.microsoft.com/en/microsoft-365/excel'>Home</a></li>
                            <li><a href='https://www.microsoft.com/en-us/about'>About</a></li>
                            <li><a href='https://www.microsoft.com/en/microsoft-365/support'>Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    </div>
  )
}

export default Nav