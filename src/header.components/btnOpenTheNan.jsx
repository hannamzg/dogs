import React from "react";

function BtnOpenTheNav(){
    return(
       <>
            <a className="navbar-brand" href="http">DOGS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
       </> 
       
    )
}

export default BtnOpenTheNav