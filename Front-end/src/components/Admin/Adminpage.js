import { Link, useParams } from "react-router-dom"
import './Trainerpage.css';
import { useUser } from "../../Auth/userProvider";
const Admin=()=>{
    const {id}=useParams();
    const {details}=useUser();
    return(
        <div className="mt-5 container d-flex justify-content gap row">
        <div className="col-md-3">
        <Link to={`Displayall`} className="card-link">
            <div className="Studentcard ">
            <div className="pic">
                    <img src="http://localhost:7000/images/studprofile.png" alt="Student Avatar" />
                </div>
                <div className="student-details">
                    <h2>Student List</h2>
                </div>
            </div></Link></div>
            <div className="col-md-3">
            <Link to={`AddTrainer`} className="card-link" >
            <div className="Studentcard ">
            <div className="pic">
                    <img src="http://localhost:7000/images/studprofile.png" alt="Student Avatar" />
                </div>
                <div className="student-details">
                    <h2>Add trainer</h2>
                </div>
            </div></Link></div>
            <div className="col-md-3">
            <Link to={`Trainerlist`} className="card-link" >
            <div className="Studentcard ">
            <div className="pic">
                    <img src="http://localhost:7000/images/studprofile.png" alt="Student Avatar" />
                </div>
                <div className="student-details">
                    <h2>Trainer List</h2>
                </div>
            </div></Link></div>
        </div>
    )
}
export default Admin;