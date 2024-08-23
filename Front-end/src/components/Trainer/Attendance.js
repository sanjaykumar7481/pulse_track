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
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useUser } from '../../Auth/userProvider';
function Attendance() {
    const {tech}=useParams()
    const {details}=useUser();
    const [attendanceValue,setval]=useState(null);
    const [msg,setmsg]=useState('');
    const [formdata,setFormdata] = useState({
        'rollno':'',
        'technology':tech,
        'attendence':false
    })
    const startsession=async()=>{
      const response=await axios.get('http://localhost:7000/start-attendence/'+details._id);
    }
    const check=(e)=>{
      e.preventDefault();
       setFormdata({...formdata,attendence:true});
       console.log(formdata)
        axios.put('http://localhost:7000/check-attendence',formdata)
        .then((result)=>{
            setval(result.data.value);
            setmsg(result.data.msg);
            console.log(result.data)
        })
    }
  return (
    <div  className="container-fluid p-3 my-5">
      <div className='row'>
        <div  className="col-10 col-md-6">
          <img src="http://localhost:7000/images/login.png" className="img-fluid" alt="Phone image" />
        </div>
        <div className='col-4 col-md-4'> 
          <div className='d-flex justify-content-around text-center mb-2'>
            <div>
            <h2 >Take attendence</h2>
            <p className="underline"></p>
            </div>

          </div>
          <button className='btn btn-danger mb-3' onClick={startsession} disabled={details.AttendanceTaken}>start session</button>
          
          <form onSubmit={check}>
            <label>Rollno</label><br />
          <MDBInput wrapperClass='mb-2' id='email' name='rollno'type='string' required={true} size="md" onChange={(e)=>setFormdata({...formdata,rollno:e.target.value})}/>
          <div className='mb-3'>{attendanceValue===true?<span style={{color:"green"}}>{msg}</span>:<span style={{color:"red"}}>{msg}</span>}</div>
          <input className="btn btn-success mb-4 w-100 " size="lg" type='submit'/>
          </form>
        </div>

      </div>

    </div>
  );
}

export default Attendance;