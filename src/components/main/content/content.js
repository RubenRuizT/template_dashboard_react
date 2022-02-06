import {React, Fragment,useState} from "react"; 
import "./content.css"; 
import BoxGrafica from "./boxGrafica/boxGrafica";
import BoxSearch from "./boxSearch/boxSearch";

function Content(){
    return (
        <Fragment> 
            <div className="content">
                <div className="contentWrapper"> 
                    <div className="boxIzquierda"> 
                        <BoxSearch/>

                    </div> 
                    <div className="boxDerecha"> 
                    <BoxGrafica/>

                    
                    </div>  

                </div> 
            </div> 
        </Fragment> 
    )
}

export default Content;