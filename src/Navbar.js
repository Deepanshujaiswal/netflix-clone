import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar() {
    const [show, handleShow]=useState(false)

    useEffect(() =>
    {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    },[])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="logo"  src="https://assets.brand.microsites.netflix.io/assets/df87ee0c-c4ea-11e7-8d40-066b49664af6_cm_800w.png?v=16"/>
            <img className="icon" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"/>
        </div>
    )
}

export default Navbar
