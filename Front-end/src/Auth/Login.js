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
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useUser } from './userProvider';
function FrontPage() {
  useEffect(()=>{
    AOS.init();
  },[])
    const Navigate=useNavigate();
    const {user,details,loginUser,setdetails,logoutUser}=useUser();
    const [formdata,setFormdata] = useState({
        'email':'',
        'passwd':''

    })
    // logoutUser();
    function clear(){
        setFormdata({
        'email':'',
        'passwd':''
        })
    }
    const check=async(e)=>{
        e.preventDefault();
        axios.post('http://localhost:7000/check-login',formdata)
        .then((result)=>{
            if(result.data.loggedin){
              // console.log(result.data);
              axios.get('http://localhost:7000/dashboard',{
                      headers:{
                        'Authorization':`${result.data.token}`
                      }
                  }).then((res)=>{
                    // console.log(res.data);
                    loginUser(result.data.token)
                     if(res.data.info)
                     {
                      setdetails(res.data.info);
                      localStorage.setItem('role',res.data.role);
                      Navigate(`/${res.data.msg}/${res.data.info._id}`,{replace:true});
                    }
                  }).catch((err)=>console.log(err))
            }
            else alert(result.data.msg)
        })
        clear();
    }
  return (
    <MDBContainer fluid className="p-3 my-5" data-aos="fade-down" data-aos-delay="400">
    
      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="http://localhost:7000/images/login.png" className="img-fluid" alt="Phone image" data-aos="zoom-out" data-aos-delay="200"/>
        </MDBCol>
        <MDBCol col='4' md='4'> 
          <div className='d-flex justify-content-around text-center mb-2' >
            <div>
            <h2 >Login </h2>
            </div>
          </div>
          
          <form onSubmit={check}>
          <MDBInput wrapperClass='mb-4' label='Email address' id='email' name='email'type='email' value={formdata.email} size="md" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='password' name='password'type='password' value={formdata.passwd} size="md" onChange={(e)=>setFormdata({...formdata,passwd:e.target.value})}/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <Link to='/forgotpasswd' >Forgot password?</Link>
          </div>

          <input className="btn btn-success mb-4 w-100 " size="lg" type='submit'/>

          <div className="d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 ms-auto me-auto">OR</p>
          </div>

          <button className="btn btn-primary mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}} onClick={()=>{Navigate('/Signup')}} >
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Create account
          </button>
          </form>
        
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default FrontPage;