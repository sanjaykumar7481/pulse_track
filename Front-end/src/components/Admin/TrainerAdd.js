import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
// import './login.css';
import axios from 'axios';
function AddTrainer() {
    const[cnfpasswd,setcnfpass]=useState('')
    const [formdata,setFormdata] = useState({
        'name':'',
        'lname':'',
        'email':'',
        'phno':'',
        'passwd':'',
        'Technology':'',
        'AttendanceTaken':false

    })
    const handlesubmit = (e)=>{
        e.preventDefault();
        setFormdata({...formdata,AttendanceTaken:true});
        console.log(formdata)
        axios.post('http://localhost:7000/addtrainer',formdata)
        .then((result)=>
        {
            console.log(result.data);
            alert(result.data.msg);
            // window.location.reload();
        });
        setFormdata({
          'name': '',
          'lname': '',
          'email': '',
          'phno': '',
          'passwd': '',
          'Technology':'',
          'AttendanceTaken':false
      });
      setcnfpass("");
    }
  return (
    <MDBContainer fluid  className="p-3 my-5">
      <MDBRow>
      <MDBCol col='10' md='6'>
          <img src="http://localhost:7000/images/login.png" className="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='4'>  
          <div className='d-flex justify-content-around text-center mb-2'>
            <div>
            <h2>Insert Trainer Data</h2>
            {/* <p className="underline"></p> */}
            </div>
          </div>
        <form onSubmit={handlesubmit}>
            <label>FirstName</label>
            <MDBInput wrapperClass='mb-4' id='name' name='name' value={formdata.name}type='text' required={true} size="md" onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
            <label>LastName</label>
          <MDBInput wrapperClass='mb-4'  id='lname' type='text' value={formdata.lname} name='lname' required={true} size="md" onChange={(e)=>setFormdata({...formdata,lname:e.target.value})}/>
          <label>Email address</label>
          <MDBInput wrapperClass='mb-4'  id='email' name='email' value={formdata.email} type='email' required={true} size="md" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
          <label>Phone no</label>
          <MDBInput wrapperClass='mb-4'  id='phno' type='text' value={formdata.phno} name='phno' required={true} size="md" onChange={(e)=>setFormdata({...formdata,phno:e.target.value})}/>
          <br />
          <label>Technology</label><br />
          <select  className='w-100 h-3' name='Technology' onChange={(e)=>setFormdata({...formdata,Technology:e.target.value})} value={formdata.course} required={true}>
          <option  value=''>----------------------Select course-------------</option>
          <option value='FSD'>FSD</option>
          <option value='AWS'>AWS</option>
          <option value='Flutter'>Flutter</option>
          <option value='Google'>Goolge </option>
          <option value='Azure'>Azure </option>
          </select><br /><br />
          <label>Password</label>
          <MDBInput wrapperClass='mb-4'  id='passwd' type='password' name='passwd' value={formdata.passwd} size="md" onChange={(e)=>setFormdata({...formdata,passwd:e.target.value})}/>
          <label>Confirm Password</label>
          <MDBInput wrapperClass='mb-4'  id='conpasswd' type='password' name='conpasswd' size="md" value={cnfpasswd} onChange={(e)=>setcnfpass(e.target.value)}/>
          {
              
              formdata.passwd===cnfpasswd && cnfpasswd!==''?<div style={{color:'green'}}>Password matched</div>:cnfpasswd===''?<></>:<div style={{color:'red'}}>Password not matched</div>
          }
          <br />
          <input className="btn btn-success mb-4 w-100 " size="lg" type='submit'/>

        </form>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
  );
}

export default AddTrainer;