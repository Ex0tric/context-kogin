import './PartnerDashboard.css';
import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext'
import { BsFillArrowRightCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { AiFillClockCircle, AiFillExclamationCircle } from "react-icons/ai";
import { FaTasks, FaUsers, FaUserCircle } from "react-icons/fa";
import { Doughnut } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto';

function PartnerDashboard() {

  document.title = 'Partner Dashboard'

  let {access, logoutUser, userType} = useContext(AuthContext)

  let  [loading, setLoading] = useState(true)

  let [data, setData] = useState({
    labels: [
      'Completed',
      'Pending',
      'Rejected'
    ],
    datasets: [{
      label: 'Task',
      data: [300, 100, 100],
      backgroundColor: [
        '#28a745',
        '#ffc107',
        '#dc3545'
      ],
      hoverOffset: 4
    }]
  })

  // useEffect(()=>{ 
  //   getData()
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])

//   let getData = async() =>{
//     let response = await fetch('http://192.168.0.169:8000/api/superadmin/', {
//         method:'GET',
//         headers:{
//             'Content-Type':'application/json',
//             'Authorization':'Bearer ' + String(access)
//         }
//     })
//     let raw = await response.json()

//     if(response.status === 200){
//       setLoading(true)
//       setStock(raw.data)
//       console.log('Getting Partner Data')
//     }else{
//       logoutUser()
//     }
// }

  if( loading && userType === 'is_partner'){
  return (
    <div className="partner-dash-wrapper">
      <div className="content-header">
        <div className="row" style={{display: "flex", alignItems: "flex-start"}}>
          <div className="col-lg-8 col-md-12">
              <div className="card">
                <div className="card-header bg-blue-disabled">
                  <h1 className="card-title">Employee Tasks</h1>  
                </div>
    
                <div className="card-body">
                  <div className="row justify-content-around">
                    <div className="col-md-5 col-12">
                      <div className="info-box">
                      <Doughnut data={data}/>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <div className="row">
                        <div className="col-12 mb-2">
                          <div className="info-box">
                            <div className="info-box-icon bg-warning">
                              <AiFillClockCircle className='text-white'  size={'30px'} />
                            </div>
                            <div className="info-box-content">
                              <h5>Pending Tasks</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mb-2">
                          <div className="info-box">
                            <div className="info-box-icon bg-success">
                              <BsCheckCircleFill className='text-white' size={'30px'} />
                            </div>
                            <div className="info-box-content">
                              <h5>Completed Tasks</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="info-box">
                            <div className="info-box-icon bg-danger">
                            <AiFillExclamationCircle className='text-white' size={'30px'} />
                            </div>
                            <div className="info-box-content">
                              <h5>Rejected Tasks</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-12">
              <div className="card">
                <div className="card-header bg-blue-disabled">
                  <h1 className="card-title">Insights</h1>
                  <div className="card-tools">
                  </div>
                </div>
    
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 col-lg-12 mb-2">
                      <a className="text-dark" href="#X">
                        <div className="info-box">
                          <div className="info-box-icon bg-primary">
                          <FaTasks className='text-white' size={'30px'}/>
                          </div>
                          <div className="info-box-content">
                            <h5>My Tasks</h5>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-4 col-lg-12 mb-2">
                      <a className="text-dark" href="#X">
                        <div className="info-box">
                          <div className="info-box-icon bg-primary">
                          <FaUsers className='text-white' size={'30px'}/>
                          </div>
                          <div className="info-box-content">
                            <h5>Clients</h5>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-4 col-lg-12">
                      <a href="#X" className="small-box-footer text-dark">
                        <div className="info-box">
                          <div className="info-box-icon bg-danger">
                          <FaUserCircle className='text-white' size={'30px'}/>
                          </div>
                          <div className="info-box-content">
                            <h5>Employees</h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
              <div className="card">
                <div className="card-header bg-blue-disabled">
                  <h1 className="card-title mb-0">Revenue</h1>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <div className="small-box bg-info">
                        <div className="inner">
                          {/* <h3>{stock.no_of_clients}</h3> */}
                          <h5>Billable Invocies</h5>
                        </div>
                        <Link className="small-box-footer text-center text-white">More info<BsFillArrowRightCircleFill className='ml-1 text-white' /></Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="small-box bg-success">
                        <div className="inner">
                          {/* <h3>{stock.total_no_of_files}</h3> */}
                          <h5>Invocies Generated</h5>
                        </div>
                        <Link className="small-box-footer text-center text-white">More info<BsFillArrowRightCircleFill className='ml-1 text-white' /></Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12">
                      <div className="small-box bg-danger">
                        <div className="inner">
                          {/* <h3>{ stock.total_no_of_users }</h3> */}
                          <h5>Invocies Not Generated</h5>
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
  </div>)
      }else{
        return (
          <h1 className='text-center'>Loading...</h1>
          )
      }
    }


export default PartnerDashboard;
