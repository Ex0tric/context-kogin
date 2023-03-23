import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import './Login.css';

const Login = () => {
  
  let {loginUser} = useContext(AuthContext)

  document.title = 'Login | Audit System'
  
  return (
  <>
    <div className='sign-in-wrapper'>
      <div className="form-container">  
        <div className="form-heading">
          <h1 className='sign-heading text-center'>Sign in</h1>
        </div>
        <form onSubmit={loginUser}>
          <div className="form-group">
          <input type="text" name="username" placeholder="Enter Username" className='username'/>
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder="Enter Password"  className='password '/>
        </div>
        <div className="text-center">
          <input type="submit" value='Sign In' className='sign-in-btn montserrat' />
        </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default Login;