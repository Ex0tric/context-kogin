import React, {useContext} from 'react'
import AuthContext from '../Context/AuthContext'

function Partner() {

  let { logoutUser, user} = useContext(AuthContext)
    return (
      <>
        {
          user?.user === 'partner' ? 
          <div className='main'>
            <h1 className='text-center'>Welcome, {user.user.slice(0,1).toUpperCase() + user.user.slice(1)} </h1>
            <button onClick={logoutUser}></button>
          </div>
          : 
          <h1>You Don't Have Access of Partner</h1>
        }
      </>
    )

}

export default Partner;
