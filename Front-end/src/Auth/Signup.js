import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import axios from 'axios';

import { useUser } from './userProvider';
function Signup() {
    const Navigate=useNavigate();
    const {user}=useUser();
    const [cnfpasswd,setcnfpass]=useState('');
    const [formdata,setFormdata] = useState({
        'name':'',
        'lname':'',
        'email':'',
        'phno':'',
        'rollno':'',
        'course':'',
        'passwd':''

    })
    function clear(){
        setFormdata({
        'name':'',
        'lname':'',
        'email':'',
        'phno':'',
        'rollno':'',
        'course':'',
        'passwd':''
        })
        setcnfpass('');
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:7000/adduser',formdata)
        .then((result)=>
        {
            alert(result.data.msg);
            Navigate('/login')
        })
        clear();
    }
  return (
    <MDBContainer fluid className="p-3 my-5">
      {user?(<div align="center"><h1>you have Already logged in.... </h1></div>):(

      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="http://localhost:7000/images/login.png" className="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='4'> 
        <div className='d-flex justify-content-around text-center mb-2'>
            <div>
            <h2 >Signup </h2>
            </div>
          </div>
        
        <form onSubmit={handlesubmit}>
            <label>FirstName</label>
            <MDBInput wrapperClass='mb-4' id='name' name='name' type='text' size="md" value={formdata.name} autoComplete="true" onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
            <label>LastName</label>
          <MDBInput wrapperClass='mb-4'  id='lname' type='text' name='lname' size="md" value={formdata.lname} autoComplete="true" onChange={(e)=>setFormdata({...formdata,lname:e.target.value})}/>
          <label>Email address</label>
          <MDBInput wrapperClass='mb-4'  id='email' name='email' type='email' size="md" value={formdata.email} autoComplete="true" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
          <label>Phone no</label>
          <MDBInput wrapperClass='mb-4'  id='phno' type='text' name='phno' size="md" value={formdata.phno} autoComplete="true" onChange={(e)=>setFormdata({...formdata,phno:e.target.value})}/>
          <label>Roll no</label>
          <MDBInput wrapperClass='mb-4'  id='rollno' type='text' name='rollno' size="md" value={formdata.rollno}  autoComplete="true" onChange={(e)=>setFormdata({...formdata,rollno:e.target.value})}/>
          <label>Course</label><br />
          <select  className='w-100 h-3' name='course' onChange={(e)=>setFormdata({...formdata,course:e.target.value})} value={formdata.course} required={true}>
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
      )}
    </MDBContainer>
  );
}

export default Signup;