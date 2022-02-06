import {react, Fragment, useState} from "react"; 
import "./boxSearch.css"; 

function BoxSearch(){
    return(
        <Fragment> 
            <div className="BoxSearch"> 
                <div className="BoxSearchWrapper">
                    <p className="SearchText">Search Crypto...</p>
                </div>  
            </div>
        </Fragment>
    ); 
}

export default BoxSearch; 