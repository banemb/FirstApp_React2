
import './App.css';
import { useState } from 'react';
import Nav from './menu-component/navbar';
import FooterREACT from './footer-component/footer'
import Contenu from './contenu-component/contenu'
import Slider from './slider-component/slider';

/* autre function react component*/
function Bonjour() {
  return (
    <h1>hello world</h1>
  )
  
}

function App() {

  // states
    let [compteur , setCompteur] =useState(1)
  //Comportement
    const hunbleclick = () => {
      setCompteur (compteur + 1);
      console.log('compteur :' ,compteur);
    }

    const hunbleclickDelete = () => {
      setCompteur (compteur - 1);
      console.log('compteur :' ,compteur);
    }
  //affichage

  return (
    <div>
      <Nav />
      <Slider />
      <Contenu />
      <FooterREACT />
      {/* <h1>{compteur}</h1>
        <button className = "btn btn-danger m-lg-2" onClick={hunbleclick}>incremente</button>
        <button  className = "btn btn-danger m-lg-2"onClick={hunbleclickDelete}>decrementation</button> */}
    </div>
  );
}

export default App;
