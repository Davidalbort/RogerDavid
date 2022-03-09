import '../src/assets/styles/layouts/portafolio.scss';
import Button from './components/button/button';
import Header from './components/header/header';
import { useState, useEffect } from "react";
import Navbar from './components/navbar/nabvar';
import List from './components/list/list';
import Image from './components/image/image';
import Heading from './components/heading/heading';
import '../src/assets/styles/icons/font-awesome.css';
import Content from './components/content/content';
import Icon from './components/icon/icon';

  //const [firstColor, secondColor] = useState('black')
  //var backgroundColor = 'black'

  /*function changeBackgrounColor (){
    secondColor('blue')
  }*/
 
  function App (){
    const [color1, color2] = useState('white');
    let listComputer = ['accer','asus','apple'];
    let imageUrlExtern = "https://media.istockphoto.com/photos/black-and-white-image-of-the-soccer-player-shoot-ball-on-artificial-picture-id1153130310?k=20&m=1153130310&s=612x612&w=0&h=hbNYyhBhpj0Q0xYybXOFMIsCSkYjuTz3lIWMYMhM6_0="
    function changeButtonTitle() {
      let color = color1 === 'white' ? 'yellow': 'white'
      color2(color)
    } 
  return (
    <div className="App" id='apps'>
      <div className="sidebar">
         
         
         <Header/>
      </div>

      <div className="content">
        <Image imageUrl={imageUrlExtern}/>
        <Content/>
        

      </div>
        
                
                

    </div>
  );
}

export default App;
