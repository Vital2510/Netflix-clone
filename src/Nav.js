import React from 'react'
import "./Nav.css";
import {useState, useEffect} from 'react'

function Nav() {

    const[show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return;
    },[]);
    

    return (
        <div className={`nav ${show && "nav-black"}`} >
        <img 
            className="nav-logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Netflix Logo"
        />

        <img 
            className="nav-avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix avatar"
        />
       </div>
    )
}

export default Nav;
