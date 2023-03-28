import './App.css';
import Login from './Components/Login';
import SuperAdmin from './Components/SuperAdmin';
import Partner from './Components/Partner';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './Components/PrivateRoutes';
import { AuthProvider } from './Context/AuthContext';
import NotFound from './Components/NotFound';
import Layout from './Components/DashboardLayout'
import AddClient from './Components/AddClient';
import PartnerDashboard from './Components/PartnerDashboard';
// import SuperDashboard from './Components/SuperDashboard';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route element={<Layout/>}>
              <Route element={<SuperAdmin/>} path='/superadmin'/>
              <Route element={<Partner/>}  path='/partner'/>        
              <Route element={<AddClient/>}  path='/addclient'/>

            </Route>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;