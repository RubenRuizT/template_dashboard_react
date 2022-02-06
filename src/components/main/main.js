import {React,Fragment,useState} from "react"; 
import Content from "./content/content"; 
import Sidebar from "./sidebar/sidebar"; 

import "./main.css"; 

function Main(){

    return (
        <Fragment>
            <div className="main">
                <div className="mainWrapper"> 
                <Sidebar/> 
                <Content/>
                </div>  
            </div> 
        </Fragment> 

    ); 
}

export default Main;