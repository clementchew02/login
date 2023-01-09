import { Navigate } from "react-router-dom";

const Login=()=>{
    return(
        <div className="main-box">
        <div className="row">
            <div className="col-md-12 text-center"><h1>Login</h1></div>
        </div>
            <div className="row"> 
                 <div className="col-md-6">Email:</div>
                 <div className="col-md-6">
                    <input type="email" name="email"/>
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
                    <input type="submit" name="submit" value ="login" className="btn btn-success"/>
                 </div>
            </div>            
        </div>
        
    )
}

export default Login;