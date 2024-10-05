
import React from "react";

function Logo(){
    return(
        <div className="container pt-2" style={{width:'160px'}} id="logo"> 
            <h5 className="text-warning fs-5">
                <i className="fa fa-play mx-1" aria-hidden="true"></i>
                STREAM
                <span className="text-light">it!</span>
            </h5>
        </div>
    );
}

export default Logo;
