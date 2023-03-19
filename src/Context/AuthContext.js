import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    // console.log(JSON.parse(localStorage.getItem('authTokens')))
    
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')).username: null)
    // console.log(JSON.parse(localStorage.getItem('authTokens')).username)

    let [loading, setLoading] = useState(true)

    let navigate = useNavigate();

    let loginUser = async (e)=> {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/user/login/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()

        if(response.status === 200){
            console.log(data)
            setAuthTokens(data)
            setUser(data.username)
            localStorage.setItem('authTokens', JSON.stringify(data))
            switch(data.username){
              case 'root': return navigate('/superadmin');
              case 'partner': return navigate('/partner');
              default: return 'Invalid User'
            }
        }else{
            alert('Something went wrong!')
        }

    }


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.clear()
        navigate('/')
    }

    let updateToken = async ()=> {
        console.log('Update Called')
        let response = await fetch('http://127.0.0.1:8000/token/refresh/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setAuthTokens(data)
            setUser(data.username)
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser()
            console.log("loged Out")
        }

        if(loading){
          setLoading(false)
        }
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }


    useEffect(()=> {

      if(loading){
        updateToken()
      }

      console.log('Effect Called')

      let interval = setInterval(()=>{
        if(authTokens){
          console.log('Interval Called')
          updateToken();
        }
      }, 5000)
      return ()=>{clearInterval(interval)}

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[authTokens, loading])

    return(
      <AuthContext.Provider value={contextData} >
        { loading ? null : children}
      </AuthContext.Provider>
    )
}