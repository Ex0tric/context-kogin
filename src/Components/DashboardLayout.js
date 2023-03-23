import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Layout(){
  return(
    <><div style={{marginLeft: '100px'}}>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </div>
    </>
  )
}
export default Layout;