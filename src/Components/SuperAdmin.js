import {useContext, useEffect, useState} from 'react'
import AuthContext from '../Context/AuthContext'
import Header from './Header';
import Sidebar from './Sidebar';
import SuperDashboard from './SuperDashboard';

function SuperAdmin() {

  let { userType, updateToken } = useContext(AuthContext)
  // let { isLoading, setLoading } = useState(true)

  document.title = 'Super Admin';

  useEffect(()=>{
    updateToken()
    console.log('token updated')
    // setLoading(false)
    // status.then((status)=>{
    //   if(status === 'success'){
    //     setLoading(false)
    //   }else{
    //     setLoading('failure')
    //   }
    // })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])   

    // if(isLoading){
      // return <h1>Loading...</h1>;
    // }else if(isLoading === 'failure'){
    //   return 'Failure';
    // }
    // else{
      return (
        <>
          {
            userType === 'is_super_admin'? 
            <>
              <SuperDashboard/>
            </>
            : 
            <h1>You Don't Have Access of SuperAdmin</h1>
          }
        </>
      )
    // }

}

export default SuperAdmin;
