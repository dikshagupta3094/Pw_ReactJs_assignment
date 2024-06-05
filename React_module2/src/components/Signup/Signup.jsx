import React from 'react'
import './Signup.css'

function Signup({handleClick}) {

  return (
    <div className='container'>
        <div className="box">
        <img src='https://thumbs.dreamstime.com/b/print-204012264.jpg'/> 
            <form>
                <input type="text" placeholder='Mobile number or Email'/> <br />
                <input type="text"placeholder='Full Name' /> <br /> 
                <input type="text"placeholder='Phone number,username or email' /> <br />
                <input type="password"placeholder='Password' /> <br />
                <button>SignUp</button>
            </form>

            <div className="footer">
                <p>have a account? <span onClick={handleClick}>Log In</span></p>
            </div>
        </div>
    </div>
  )
}

export default Signup
