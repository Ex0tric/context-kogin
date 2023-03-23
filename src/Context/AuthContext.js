import { createContext, useState, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

  let [access, setAccess] = useState(()=> localStorage.getItem('access') ? JSON.parse(localStorage.getItem('access')) : null)

  let [refresh, setRefresh] = useState(()=> localStorage.getItem('refresh') ? JSON.parse(localStorage.getItem('refresh')) : null)
  
  let [user, setUser] = useState(()=> localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')): null)

  let [userType, setUserType] = useState(()=> localStorage.getItem('user_type') ? JSON.parse(localStorage.getItem('user_type')): null)

  let [ isLoading, setLoading] = useState(true)

  let navigate = useNavigate();

  let loginUser = async (e)=> {
      e.preventDefault()
      let response = await fetch('http://192.168.0.169:8000/user/login/', {
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
      })
      let data = await response.json()

      if(response.status === 200){
          setAccess(data.access)
          setRefresh(data.refresh)
          setUser(data.username)
          setUserType(data.user_type)
          localStorage.setItem('access', JSON.stringify(data.access))
          localStorage.setItem('refresh', JSON.stringify(data.refresh))
          localStorage.setItem('user', JSON.stringify(data.username))
          localStorage.setItem('user_type', JSON.stringify(data.user_type))

          switch(data.user_type){
            case 'is_super_admin': return navigate('/superadmin');
            case 'is_partner': return navigate('/partner');
            default: return 'Invalid User';
          }
      }else{
          alert('Wrong Username Password!')
      }
  }

  let logoutUser = () => {
    setAccess(null)
    setRefresh(null)
    setUser(null)
    setUserType(null)
    localStorage.clear()
    navigate('/')
  }

  let updateToken = async ()=> {
    console.log('Update Called')
    let response = await fetch('http://192.168.0.169:8000/token/refresh/', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({'refresh': refresh})
    })
    
    let data = await response.json();
    
    if (response.status === 200){
      setAccess(data.access)
      localStorage.setItem('access', JSON.stringify(data.access))
      console.log(data.access)
      // return 'success';
    }else{
      logoutUser()
      console.log("loged Out")
      // return 'failure'
    }
    if(isLoading){
      setLoading(true)
    }
  }

  let contextData = {
      isLoading,
      user,
      userType,
      access,
      refresh,
      loginUser,
      logoutUser,
      updateToken
  }

  // function dataReducer(contextData, action){
  //   switch(action.type){
  //     case 'UPDATE' : return { ...contextData} 
  //     default: return contextData
  //   }
  // }

  // const [contextData, dispatch] = useReducer(dataReducer, data);

  return(
    <AuthContext.Provider value={contextData} > 
      { children }
    </AuthContext.Provider>
  )
}