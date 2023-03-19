import {useContext} from 'react'
import AuthContext from '../Context/AuthContext'

function SuperAdmin() {

  let { logoutUser, user} = useContext(AuthContext)

    return (
      <>
        {
          user === 'root' ? 
          <div className='main'>
            <h1 className='text-center'>Welcome, {user.slice(0,1).toUpperCase() + user.slice(1)} </h1>
            <button onClick={logoutUser}>Logout</button>
          </div>
          : 
          <h1>You Don't Have Access of SuperAdmin</h1>
        }
      </>
    )

}

export default SuperAdmin;
