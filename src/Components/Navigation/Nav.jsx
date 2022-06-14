import React from "react";
import './styles.css';
import logo from '../../assets/images/DSlogo.png';

function Nav() {

    // window.addEventListener("scroll", function() {
    //     let elementTarget = this.document.getElementById("header");
    
    //     if (this.window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
    //         document.getElementById("navbar").style.top = "0";
    //     } else {
    //       document.getElementById("navbar").style.top = "-50px";
    //     }
    // })    
    
    
return(
    <div className="nav">
        <div className="left">
            <img className="logo" src={logo} />
        </div>
        <div className="middle">
            <a className="item" href={'#map-page'}>World Map</a>
            <a className="item" href={'#about-page'}>About</a>
        </div>
        <div className="right">
        </div>
    </div>
    );
}

export default Nav;