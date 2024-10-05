import React from "react";

export default function Loading(){
    return(
        <div className="container d-flex justify-content-center align-items-center w-100 m-auto my-5 " id="loadingPage">
            <h1 className="fs-1 text-center my-5 py-3 text-light">
                <i className="fas fa-spinner fa-spin " id="loadingIcon"></i>
            </h1>
        </div>
    )
}