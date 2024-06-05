import React from 'react'
import './SignIn.css'
function SignIn({handleClick}) {
  
  return (
    <div>
        <div className='container'>
        <div className="box">
        <img src='https://thumbs.dreamstime.com/b/print-204012264.jpg'/> 
            <form>
                <input type="text"placeholder='Phone number,username or email' /> <br />
                <input type="password"placeholder='Password' /> <br />
                <button>SignIn</button>
            </form>
            <div className="footer">
                <p>Don't have a account? <span onClick={handleClick}>Sign Up</span></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignIn
