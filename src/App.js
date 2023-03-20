import './App.css';
import Login from './Components/Login';
import SuperAdmin from './Components/SuperAdmin';
import Partner from './Components/Partner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './Components/PrivateRoutes';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route element={<PrivateRoutes/>}>
              <Route element={<SuperAdmin/>} path='/superadmin'/>
              <Route element={<Partner/>}  path='/partner'/>
            </Route>
          </Routes>
      </Router> 
    </AuthProvider>
  );
}

export default App;