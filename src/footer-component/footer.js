import React from 'react';
import './footer.css';
import  logoFacebook from "../Assets/imageLogo/logo_facebook.jpg"
import logoWhatsapp from "../Assets/imageLogo/logo_WhatsApp.png"


function FooterREACT() {
    //State
   
   const Accueil = " Accueil";
   const  Documentation = " Documentation";
    const Visit = " Visit";
    const linkVisit = "";
    const contact1 = 'Tel :'
    const contact2 = ' email :'
    const contact3 = ' Ville :'
    const attributcontact1 = '+237 657 743 782'
    const attributcontact2 = ' Stephprad@gmail.com'
    const attributcontact3 = 'douala  BP:1234 dogmbong'
    const nameLogoFacebook = 'Facebook'
    const nameLogoWhatsapp = 'WhatsApp'
    const contact = 'Contact'
    const copyright =' copyright@ STEPHPRAD'

    return (
        <> <br /> <div className=" bg-secondary ">
                <div className="container-fluid ">
                    <div className="row align-items-center ">
                        <div className="col-2">
                            <div className="container-fluid ">
                                <div className="">
                                    <div className="h-25 d-flex  align-items-center ">
                                        <a href="linkFacebook"> <img src={logoFacebook} alt="" /></a>
                                        <a href="linkFacebook" className="" ><h5 className="m-lg-4  fs-6">{nameLogoFacebook}</h5></a>
                                    </div>
                                    <div className=" d-flex  align-items-center">
                                        <a href="linkWhatsAPP"> <img src={logoWhatsapp} alt="" /></a>
                                        <a href="linkWhatsAPP" className=""><h5 className="m-lg-4  fs-6" >{nameLogoWhatsapp}</h5></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className=" style" >
                                <a className="nav-link" href="#">{Accueil}</a>
                                <a className="nav-link" href="#">{Documentation}</a>
                                <a className="nav-link" href={linkVisit}> {Visit} </a>
                            </div>
                        </div>
                        <div className="col-4 m-lg-5 ">
                            <ul className="list-group-item" class="list">
                                <h4> {contact}</h4>
                                <li> <span className="fs">{contact1}</span>{attributcontact1}</li>
                                <li> <span className="fs">{contact2}</span>{attributcontact2}</li>
                                <li> <span className="fs">{contact3}</span>{attributcontact3}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <hr class="text-danger"/>
                        <p className="text-center">{copyright}</p>
                    </div>
                </div>
         </div>
    </>
    );
}

export default FooterREACT;