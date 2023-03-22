import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext'
import './SuperDashboard.css'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function SuperDashboard() {
  
  let {access, logoutUser} = useContext(AuthContext)

  let [stock, setStock] = useState('')

  useEffect(()=>{ 
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  let getData = async() =>{
    let response = await fetch('http://192.168.0.169:8000/api/superadmin/', {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + String(access)
        }
    })
    let raw = await response.json()

    if(response.status === 200){
      setStock(raw.data)
      console.log('Getting Data')
    }else{
      logoutUser()
    }
}

    return (
      <>
        <div className="super-dashboard">
          <div className="content-header">
              <div className="card">
                <div className="card-header bg-blue-disabled">
                  <h1 className="card-title">Revenue</h1>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <div className="small-box bg-info">
                        <div className="inner">
                          <h3>{stock.no_of_clients}</h3>
                          <h5>Number of Clients</h5>
                        </div>
                        <Link className="small-box-footer text-center text-white">More info<BsFillArrowRightCircleFill className='ml-1 text-white' /></Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="small-box bg-success">
                        <div className="inner">
                          <h3>{stock.total_no_of_files}</h3>
                          <h5>No of Files Generated</h5>
                        </div>
                        <Link className="small-box-footer text-center text-white">More info<BsFillArrowRightCircleFill className='ml-1 text-white' /></Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="small-box bg-danger">
                        <div className="inner">
                          <h3>{ stock.total_no_of_users }</h3>
                          <h5>No of Users</h5>
                        </div>
                        <Link  className="small-box-footer text-center text-white">More info<BsFillArrowRightCircleFill className='ml-1 text-white' /></Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="small-box bg-primary">
                        <div className="inner">
                          <h5>Invoicing Total</h5>
                        </div>
                        <div className="icon">
                          <i className="fas fa-file-invoice"></i>
                        </div>
                        <Link className="small-box-footer text-center text-white">More info<BsFillArrowRightCircleFill className='ml-1 text-white' /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </>
    )

}

export default SuperDashboard;
