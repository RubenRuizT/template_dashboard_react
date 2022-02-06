import {React, Fragment, useState} from "react"; 
import "./Topbar.css";
import {NotificationsNone, Language,Settings} from "@material-ui/icons/"; 

function Topbar(){

    return (
        <Fragment> 

         <div className="Topbar"> 
            <div className="TopbarWrapper"> 
                <div className="LeftBar">
                    <p> Crypto Portfolio </p>      

                </div>  
                <div className="RightBar">
                    <div className="SmallBox"> 
                        <NotificationsNone/>  
                        <span className="RedCircle">3</span> 
                    </div>       

                    <div className="SmallBox">
                        <p className ="TextoTopBar">Logout</p>  
                    </div>

                </div>  

            </div> 
            </div>  
        
        </Fragment>
    ); 
}

export default Topbar; 