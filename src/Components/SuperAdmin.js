import {useContext, useEffect, useState} from 'react'
import AuthContext from '../Context/AuthContext'

function SuperAdmin() {

  let { logoutUser, user, userType, updateToken} = useContext(AuthContext)
  let {isLoading, setLoading} = useState(true)

  document.title = 'Super Adminz'

  useEffect(()=>{

    let status = updateToken()
    if(status === 'success'){
      setLoading(false)
    }else{
      setLoading('failure')
    }
  
  },[])   

    if(isLoading){
      return <h1>Loading...</h1>;
    }else if(isLoading === 'failure'){
      return 'Failure';
    }
    else{
      return (
        <>
          {
            userType === 'is_super_admin'? 
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

}

export default SuperAdmin;
