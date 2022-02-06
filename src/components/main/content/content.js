import {React, Fragment,useState} from "react"; 
import "./content.css"; 
import BoxGrafica from "./boxGrafica/boxGrafica";

function Content(){
    return (
        <Fragment> 
            <div className="content">
                <div className="contentWrapper"> 
                    <div className="boxIzquierda"> 
                        <div className="boxBuscador"> 

                        </div>
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