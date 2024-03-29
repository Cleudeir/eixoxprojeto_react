import React from 'react';
import '../Style/Header.css';
import {useState} from 'react';
import {
  Link,
} from 'react-router-dom';

const Header = () => {
  const cor = 'rgba(152,150,154,.5)';
  const [colorHeader, setColorHeader] = useState(cor);
  const scrollListener = ()=>{
    if (window.scrollY>10) {
      setColorHeader('rgba(152,150,154,.9)');
    } else {
      setColorHeader(cor);
    }
  };
  window.addEventListener('scroll', scrollListener);

  return (
    <div className='Header'
      style={{backgroundColor: colorHeader, transition: '0.5s'}}>
      <a href='./' className='Header--logo'>
        <h4 style={{whiteSpace: 'nowrap'}} >EIXO X PROJETOS</h4>
      </a>
      <div className='Header--contact--container'>
        <div className='Header--contact'>
        <a href='https://api.whatsapp.com/send?phone=553193281399'>
          <img src='icons/whatsApp.png' alt={'whatsApp'}/>
        </a>
        <a href='https://www.facebook.com/eixoxprojetos'>
          <img src='icons/facebook.png' alt={'facebook'}/>
        </a>
        <a href='https://www.instagram.com/eixo_x_projetos'>
          <img src='icons/instagram.png' alt={'instagram'}/>
        </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
