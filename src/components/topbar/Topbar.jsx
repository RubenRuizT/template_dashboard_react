import {React,Fragment} from "react"; 
import "./Topbar.css"; 
import {NotificationsNone, Language,Settings} from "@material-ui/icons/"; 

function Topbar(){

    return (
        <Fragment>
            <div className="topbar">
                <div className="topbarWrapper"> 
                
                

                    <div className="topLeft">
                        <span className="logo">CRYPTO PORTFOLIO</span>
                    </div> 

                    <div className="topRight"> 
                        <div className="topbarIconContainer">
                            <NotificationsNone/> 
                            <span className="topIconBadge">2</span> 
                        </div> 

                        <div className="topbarIconContainer">
                            <Language/> 
                            <span className="topIconBadge">2</span> 
                        </div>
                        
                        <div className="topbarIconContainer">
                            <Settings/> 
                            <span className="topIconBadge">2</span> 
                        </div>
                        <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="topAvatar"/> 
                    </div> 
                    </div>
                </div>
        </Fragment> 
    ); 
}

export default Topbar;  