import React from 'react';
import './navbar.js';
import './navbar.css'


function Nav(){
    //state
   const Accueil = " Accueil";
   const  Documentation = " Documentation";
    const Visit = " Visit";
    const linkVisit = "";


    return (
        <nav class="navbar navbar-expand-lg bg-secondary " >
            <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav text-center" id="menu">
                    <a class="nav-link" href="#">{Accueil}</a>
                    <a class="nav-link" href="#">{Documentation}</a>
                    <a class="nav-link" href={linkVisit}>{Visit}</a>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default Nav;