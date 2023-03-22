import './Sidebar.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import userimg from '../Assets/user-img.jpg'
import AuthContext from '../Context/AuthContext'
import { useContext, useState } from 'react';
import { MdSpaceDashboard, MdOutlineLogout } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
// import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaChevronCircleRight } from "react-icons/fa";


function Sidebar() {



  let [toggle, setToggle] = useState('d-none')

  let { logoutUser, user } = useContext(AuthContext)

  function toggler(){
    toggle === 'd-none' ? 
    setToggle('d-block') : setToggle('d-none')
  }

  return (
    <>
      <div className="siderbar position-fixed px-3 py-4">
        <div className="sidebar-header">
          <Link to={'/'} className="brand-link px-2 py-3 d-inline-block">
            <img src={logo} alt="Admin" className="brand-image img-circle elevation-3 mx-2" />
            <span className="font-weight-light text-white sidebar-titles">Audit System</span>
          </Link>
        </div>

        <div className="user-info hover">
          <Link className="user p-2 d-block">
            <img src={userimg} alt="Admin" className="brand-image img-circle elevation-3 mx-2 rounded-circle" />
            <span className="font-weight-light text-white sidebar-titles">{user.slice(0,1).toUpperCase() + user.slice(1)}</span>
          </Link>
        </div>

        <div className="dashboard hover">
          <Link className="list-items px-3 py-2 d-block">
            <MdSpaceDashboard className='mr-2' color='#fff' size={'20px'}/>
            <span className="font-weight-light text-white sidebar-titles" size={'50px'}>Dashboard</span>
          </Link>
        </div>

        <div className="add-client hover">
          <Link className="list-items px-3 py-2 d-block">
            <AiOutlineUserAdd className='mr-2' color='#fff' size={'20px'}/>
            <span className="font-weight-light text-white sidebar-titles" size={'50px'}>Add Client</span>
          </Link>
        </div>

        <div className="masters hover position-relative">
          <Link className="list-items px-3 py-2 d-block" onClick={toggler} >
            <FaClipboardList className='mr-2' color='#fff' size={'20px'}/>
            <span className="font-weight-light text-white sidebar-titles">Masters</span>
            <RiArrowDropDownLine className='mr-2 drop-arrow position-absolute sidebar-titles' size={'30px'} color='#fff'/>
          </Link>
          <ul className={`masters-list-items list-unstyled text-white px-3 pb-3 mb-0 ${toggle} sidebar-titles` }>
          {
            ['Audit Master', 'Areas Master', 'Sub Areas Master', 'Activity Label', 'Activity Master','Task Master', 'Industry Master','Audit Type Master','Entity Master'].map((item, key)=>{
            return (
              <li key={key} className="mb-3 sidebar-titles"><FaChevronCircleRight className='mr-2' color='#fff'/>{item}</li>
            )
          })
          }
          </ul>
        </div>

        <div className="logout hover">
          <Link className="list-items px-3 py-2 d-block" onClick={logoutUser}>
            <MdOutlineLogout className='mr-2' color='#fff' size={'20px'}/>
            <span className="font-weight-light text-white sidebar-titles" size={'50px'}>Log Out</span>
          </Link>
        </div>
      </div>
    </>
  )

}

export default Sidebar;
