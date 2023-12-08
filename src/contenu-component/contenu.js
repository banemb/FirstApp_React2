import React from 'react';
import './contenu.css';
import  imageSecondaire from "../Assets/imagePrincipale/image-hommeDev.jpeg"
import  imagePrincipale from '../Assets/imagePrincipale/image-femme.jpg'



function Contenu(){
  //state
    const Paragraphe='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, '+
      'labore ipsa, ratione facilis consequuntur odio dolorem obcaecati earum accusamus'+
       'sed error doloremque nulla nam fugiat aperiam architecto nesciunt, at voluptatum.'+
       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, '+
      'labore ipsa, ratione facilis consequuntur odio dolorem obcaecati earum accusamus'+
       'sed error doloremque nulla nam fugiat aperiam architecto nesciunt, at voluptatum.'
      


  return (
    <div className="container-fluid mt-5  ">
      <div className="row">
          <div className="col-8">
              <div className="paragraphe ">
                  <p className=" border  param-items">{Paragraphe}</p> 
                  <p className=" border param-items ">{Paragraphe}</p>
              </div>
              <div className="row mt-5 border ">
                  <div className="card w-100">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={imagePrincipale} className=" h-100 w-75" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text">{Paragraphe}</p>
                        </div>
                      </div>
                    </div>
                  </div>  
              </div>
          </div>
          <div className="col-4">
              <img src={imageSecondaire} alt="image-hommeDEV " className=" imageSecondaire h-100 w-100 " />
          </div>
      </div>
</div>
  );
}

export default Contenu;