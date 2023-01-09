import { Navigate } from "react-router-dom";

const Profile=()=>{
    return(
        <div class="wrapper">
    <div class="left">
        <h4>Your Name</h4>
    </div>
    <div class="right">
        <div class="info">
            <h3>Information</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Email</h4>
                    <p>email@gmail.com</p>
                 </div>
                 <div class="data">
                   <h4>Phone</h4>
                    <p>012-1234567</p>
              </div>
            </div>
        </div>
    </div>
</div>
        
    )
}

export default Profile;