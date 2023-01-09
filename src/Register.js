import { Navigate } from "react-router-dom";

const Register=()=>{
    return(
        <div className="main-box">
        <div className="row">
            <div className="col-md-12 text-center"><h1>Register</h1></div>
        </div>
            <div className="row"> 
                 <div className="col-md-6">FirstName:</div>
                 <div className="col-md-6">
                    <input type="text" name="fname"/>
                 </div>
            </div>
            <div className="row"> 
                 <div className="col-md-6">LastName:</div>
                 <div className="col-md-6">
                    <input type="text" name="lname"/>
                 </div>
            </div>
            <div className="row"> 
                 <div className="col-md-6">Email:</div>
                 <div className="col-md-6">
                    <input type="email" name="email"/>
                 </div>
            </div>
            <div className="row"> 
                 <div className="col-md-6">Phone Number:</div>
                 <div className="col-md-6">
                    <input type="tel" name="phone"/>
                 </div>
            </div>
            <div className="row"> 
                 <div className="col-md-6">Password:</div>
                 <div className="col-md-6">
                    <input type="password" name="password"/>
                 </div>
            </div>
            <div className="row"> 
                 <div className="col-md-12 text-center">
                    <input type="submit" name="submit" value ="Register" className="btn btn-success"/>
                 </div>
            </div>            
        </div>
        
    )
}

export default Register;