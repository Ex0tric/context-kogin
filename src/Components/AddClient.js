import { useEffect, useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext'
import './SuperDashboard.css';

function AddClient() {

  document.title = 'Add Client'

  let { access } = useContext(AuthContext)
  
  let addClient = async (e)=> {
    e.preventDefault()
    let response = await fetch('http://192.168.0.169:8000/api/superadmin/add_main_client/', {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer ' + String(access)
        },
        body:JSON.stringify()
    })
    let data = await response.json({
      "client_first_name": e.target.client_first_name.value,
      "client_last_name": e.target.client_last_name.value,
      "client_user_name": e.target.client_user_name.value,
      "client_email_id": e.target.client_email_id.value,
      "client_mobile": +e.target.client_mobile.value,
      "client_password": +e.target.client_password.value,
      "client_user_creation":+e.target.client_user_creation.value,
      "client_billing_start_date": e.target.client_billing_start_date.value,
      "client_billing_end_date":e.target.client_billing_end_date.value,
      "client_files_upload":+e.target.client_files_upload.value
    })

    if(response.status === 200){
      console.log(data);
      console.log("Client Added")
      }else{
      alert('Something went wrong !!!')
    }
}

    return (
      <>
        <section className="content">
          <div className="wrapper container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">

                  <div className="card-header">
                    <p className="card-title">Add Main Client</p>
                  </div>

                  <div className="card-body">
                    <form onSubmit={addClient}>
                      <div className="row">

                        <div className="col-md-6 mb-4">
                          <label htmlFor="client_first_name" className="text-dark">Client First Name</label>
                          <input type="text" required name="client_first_name" id="client_first_name" className="form-control" />
                        </div>

                        <div className="col-md-6 mb-4">
                            <label htmlFor="client_last_name" className="text-dark">Client Last Name</label>
                            <input type="text" required name="client_last_name" id="client_last_name" className="form-control" />
                        </div>

                        <div className="col-md-6 mb-4">
                            <label htmlFor="client_user_name" className="text-dark">Client UserName</label>
                            <input type="text" required name="client_user_name" id="client_user_name" className="form-control" />
                        </div>

                        <div className="col-md-6 mb-4">
                            <label htmlFor="client_email_id" className="text-dark">Client Email ID</label>
                            <input type="email" required name="client_email_id" id="client_email_id" className="form-control" />
                        </div>

                        <div className="col-md-6 mb-4">
                          <label htmlFor="client_mobile" className="text-dark">Client Mobile</label>
                          <input type="number" required name="client_mobile" id="client_mobile" className="form-control" />
                        </div>

                        <div className="col-md-6 mb-4">
                          <div className="form-group">
                            <label htmlFor="client_password" className="text-dark">Client Password</label>
                            <input type="password" required name="client_password" id="client_password" className="form-control" />
                          </div>
                        </div>
                        
                        <div className="col-md-6 mb-4">
                          <label htmlFor="client_user_creation" className="text-dark">Allowed User Creation </label>
                            <input type="number" required name="client_user_creation" id="client_user_creation" className="form-control" />
                        </div>

                        <div className="col-md-6 mb-4">
                          <label htmlFor="client_files_upload" className="text-dark">Allowed Files Upload </label>
                          <input type="number" required name="client_files_upload" id="client_files_upload" className="form-control" />
                        </div>
                        
                        <div className="col-md-6 mb-4">
                          <label htmlFor="client_billing_start_date" className="text-dark">Billing Start Date</label>
                            <input type="date" required name="client_billing_start_date" id="client_billing_start_date" className="form-control" />
                        </div>

                        <div className="col-md-6 mb-4">
                          <label htmlFor="client_billing_end_date" className="text-dark">Billing End Date</label>
                          <input type="date" required name="client_billing_end_date" id="client_billing_end_date" className="form-control" />
                        </div>

                        <div className="col-md-12">
                          <button type="submit" className="btn btn-success float-right">Submit</button>
                        </div>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )

}

export default AddClient;
