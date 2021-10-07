// import react from "react";
import profilePhoto from "../images/image-jeremy.png"


function Header(){
    return (
        <div className="header">
           <div className="top-header">
           <img className="profile-photo" src={profilePhoto} alt="jeremy-img"/>

               <div className="name-info">
                   <h6>Report for</h6>
                   <span>Jeremy Robson</span>
               </div>
           </div> 
           <div className="lower-header">
               <p>Daily</p>
               <p>Weekly</p>
               <p>Monthly</p>
           </div> 
        </div>
    )
}

export default Header