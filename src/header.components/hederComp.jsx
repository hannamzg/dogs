/* import React, { useState } from "react"; */
import HeederOpen from "./hederopen";
import BtnColseHeader from "./btnCloseHeder";
import BtnOpenTheNav from "./btnOpenTheNan";


function Heder() {
   
    return(
        <>
        <nav className="navbar navbar-dark bg-dark " style={{position:"sticky",top: 0,zIndex:100} }>
           <div className="container-fluid">
              <BtnOpenTheNav/>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <BtnColseHeader/>
                    <HeederOpen/>
                </div>
            </div>

        </nav>
        </>
    )   
}

export default Heder;
