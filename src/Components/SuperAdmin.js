import {useContext, useEffect, useState} from 'react'
import AuthContext from '../Context/AuthContext'
import SuperDashboard from './SuperDashboard';
import './SuperAdmin.css'
import { useNavigate } from 'react-router-dom'

function SuperAdmin() {

  let { userType, updateToken } = useContext(AuthContext)

  let navigate = useNavigate();
  // let { isLoading, setLoading } = useState(true)

  document.title = 'Super Admin Dashboard';

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

    switch(userType){
      case 'is_partner': return navigate('/partner');
      case 'is_super_admin': return <SuperDashboard/>;
      default: return 'Who are you?';
      }
    // }

}

export default SuperAdmin;
