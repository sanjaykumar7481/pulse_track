import { useEffect, useState } from "react";
import axios from "axios";
// import './App.css'
import { useParams } from "react-router-dom";
// import Link from "react-router-dom";
// const userid=useParams()
function DisplayALL()
{
    const [details,setdata]=useState([]);
    const [editmode,handledit]=useState(null);
    const {tech}=useParams();
    // const [status,setstatus]=useState(null);
    useEffect(()=>{
        axios.get('http://localhost:7000/getdata')
        .then((result)=>{
            setdata(result.data.data);
        });
    },[details.length]);
    function deletee(id){
        axios.delete('http://localhost:7000/delete-user/'+id).then(result=>{
            alert(result.data.message)
            // window.location.reload();
        })
    }
    function edit(id)
    {
        console.log("collected-data");
        handledit(id);
        axios.get('http://localhost:7000/getByid/'+id)
        .then(result=>{console.log(result.data.result.userdetails)})
    }
    function savedata(id)
    {
        handledit(null);
        let tempdata;
        details.map((ele)=>{
            if(id===ele._id)
                tempdata=ele;
        });
        console.log("update function")
        axios.put('http://localhost:7000/update-user/'+id,tempdata).then(result=>{alert(result.data.msg)})
        .then(()=>{
        axios.get('http://localhost:7000/getByid/'+id)
        .then(result=>{console.log(result.data.result.userdetails)})
        })
    }
    function change(id,temp){
        let updatedDetails = details.map((ele) =>
            ele._id === id ? {
                 ...ele,attendence:!temp
                } : ele
        );
        setdata(updatedDetails);
    }
    function setchanges(e,id)
    {
        const { name, value } = e.target;
        let updatedDetails = details.map((ele) =>
            ele._id === id ? {
                 ...ele, [name]: value 
                } : ele
        );
        setdata(updatedDetails);
    }
    return (
        <div className="mt-5">
            <h1>Student details fetching from backend</h1>
            <table className='table table-stripped table-bordered'border={2} align="center">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>phone no</th>
                        <th>passwd</th>
                        <th>Rollno</th>
                        <th>course</th>
                        <th>attendence</th>
                        <th>sesions</th>
                        <th>percentage</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map((ele,ind)=>(
                            <tr key={ele._id}>
                            <td>{ind+1}</td>
                            {
                                editmode===ele._id?(
                                    <>
                                    <td><input type="text" value={ele.name} name="name" onChange={(e)=>{setchanges(e,ele._id)}}/></td>
                                    <td><input type="text" value={ele.lname} name="lname" onChange={(e)=>{setchanges(e,ele._id)}}/></td>
                                    <td><input type="text" value={ele.email} name="email" onChange={(e)=>{setchanges(e,ele._id)}}/></td>
                                    <td><input type="text" value={ele.phno} name="phno" onChange={(e)=>{setchanges(e,ele._id)}}/></td>
                                    <td><input type="text" value={ele.passwd} name="passwd" onChange={(e)=>{setchanges(e,ele._id)}}/></td>
                                    <td><input type="text" value={ele.rollno} name="rollno" onChange={(e)=>{setchanges(e,ele._id)}}/></td>
                                    <td><select name="course" value={ele.course} onChange={(e)=>{setchanges(e,ele._id)}}>
                                    <option value='FSD'>FSD</option>
                                    <option value='AWS'>AWS</option>
                                    <option value='Flutter'>Flutter</option>
                                    <option value='Google'>Goolge </option>
                                    <option value='Azure'>Azure </option>
                                    </select></td>
                                    <td>
                                    <div className="toggle-switch">
                                            <label className="switch">
                                                <input type="checkbox" checked={ele.attendence} onChange={()=>{change(ele._id,ele.attendence)} }/>
                                                <span className="slider round"></span>
                                            </label>
                                            <span>{ele.attendence ? 'Present' : 'Absent'}</span>
                                            </div>
                                    </td>
                                    <td>{ele.presentDays}/{ele.TotalDays}</td>
                                    <td>{ele.percentage}</td>
                                    </>
                                    ):(
                                        <>
                                        <td>{ele.name}</td>
                                        <td>{ele.lname}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.phno}</td>
                                        <td>{ele.passwd}</td>
                                        <td>{ele.rollno}</td>
                                        <td>{ele.course}</td>
                                        <td>{ele.attendence===true?<div>Present</div>:<div>Absent</div>}</td>
                                        <td>{ele.presentDays}/{ele.TotalDays}</td>
                                        <td>{ele.percentage}</td>
                                        </>
                                    )
                            }
                                <td>
                                    {
                                        editmode===ele._id?(
                                            <button className="btn btn-success" onClick={()=>{savedata(ele._id)}}>Save</button>
                                        ):(
                                        <button className="btn btn-primary" onClick={()=>{edit(ele._id)}}>Edit</button>
                                        )
                                    }
                            | <button className="btn btn-danger" onClick={()=>{deletee(ele._id)}}> Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default DisplayALL;