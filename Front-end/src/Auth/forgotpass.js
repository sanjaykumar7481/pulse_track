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
  import { useState } from 'react';
  import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Forgot=()=>{
  const [formdata,setFormdata] = useState({
    'email':'',
    'code':'',
    'passwd':'',
})
const [msg,setmsg]=useState('');
const [mailconfirm,setconfirm]=useState(null);
const [code,setcode]=useState('');
const Nav=useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
      axios.put('http://localhost:7000/resetpass',formdata)
      .then((res)=>{
        alert(res.data.msg);
        if(res.data.value){
          Nav('/login');
        }
        else{
          window.location.reload();
          setconfirm(false);
          setcode('');
          setmsg('');
          setFormdata({
            'email':'',
            'code':'',
            'passwd':''
          })
        }
      })

  }
  const verify=()=>{
    // console.log("hi")
    if(formdata.email===''){
      setmsg('Enter the email');
      setconfirm(false);
    }
    else{
      console.log(formdata)
    axios.put('http://localhost:7000/changepass',formdata)
    .then((res)=>{
          // console.log(res.data.msg);
          setmsg(res.data.msg);
          setconfirm(res.data.value);
          if(res.data.value)setcode(res.data.code);
    })
  }
      
  }
    return(
        <>
        <MDBContainer fluid  className="p-3 my-5">
      <MDBRow>
      <MDBCol col='10' md='6'>
          <img src="http://localhost:7000/images/login.png" className="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='4'>  
          <div className='d-flex justify-content-around text-center mb-2'>
            <div>
            <h2>Reset Password</h2>
            </div>
          </div>
        <form onSubmit={handlesubmit}>
        <label>Enter email</label>
        <div className='row mb-4'>
        <input  className='col-8 w-75' id='email' name='email'type='email' value={formdata.email} size="md" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
        <button className='col-2 btn btn-primary' onClick={verify}>send</button>
        </div>
        <div className='mb-3'>{mailconfirm===true?<span style={{color:"green"}}>{msg}</span>:<span style={{color:"red"}}>{msg}</span>}</div>
            <label>Enter the Verification code</label>
            <MDBInput wrapperClass='mb-4' id='name' name='code' value={formdata.code}type='text' required={true} size="md" onChange={(e)=>setFormdata({...formdata,code:e.target.value})}/>
            <div className='mb-3'>{formdata.code.length>1?formdata.code===code?<span style={{color:"green"}}>verified</span>:<span style={{color:"red"}}>mismatch</span>:<></>}</div>
            <label>Change Password</label>
          <MDBInput wrapperClass='mb-4'  id='lname' type='password' value={formdata.passwd} name='lname' required={true} size="md" onChange={(e)=>setFormdata({...formdata,passwd:e.target.value})}/>
          <input className="btn btn-success mb-4 w-100 " size="lg" type='submit'/>
          </form>
          </MDBCol>
          </MDBRow>
          </MDBContainer>
          </>
    )
}
export default Forgot;