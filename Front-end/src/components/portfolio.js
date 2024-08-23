import { useState,useEffect } from "react";
import {  useParams } from "react-router-dom";
import './studentcard.css'; 
import {Chart} from 'react-google-charts';
import axios from "axios";
import { useUser } from "../Auth/userProvider";
const Stuportfolio=()=>{
    const {id}=useParams();
    const {details}=useUser();
    
         const data = [
            ["Attendance", "Till Now"],
            ["present", details.percentage],
            ["Absent",100-details.percentage]
          ];
          
         const options = {
            title: "Attendance percentage",
          };
        return (
            <>
            <div className="container mt-5">
    <div className="row">
        <div className="student-card col-md-4 p-5">
            <div className="img">
                <img src="http://localhost:7000/images/studprofile.png" alt="Student Avatar" />
                <h2>{details.name + " " + details.lname}</h2>
            </div>
            <div className="student-details">
                <p><strong>Roll Number:</strong> {details.rollno}</p>
                <p><strong>Phone Number:</strong> {details.phno}</p>
                <p><strong>Email:</strong> {details.email}</p>
                <p><strong>Course:</strong> {details.course}</p>
            </div>
        </div>

        <div className="student-card col-md-8 w-50">
            <center><h1 className="col-md-12">Attendance report</h1></center>
            <div className="row">
            <div className="student-avatar2 col-md-6">
                <Chart className="img"
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <div className="student-details col-md-6">
                <h2 className="mb-5">Student Data</h2>
                <p><strong>No of Days Present:</strong> {details.presentDays}</p>
                <p><strong>Total Working Days:</strong> {details.TotalDays}</p>
                <p><strong>status:</strong> {details.attendence ? <>Present</> : <>Absent</>}</p>
                <p><strong>percentage:</strong> {details.percentage}</p>
            </div>
            </div>
        </div>
    </div>
</div>

        </>
        )
}
export default Stuportfolio;

