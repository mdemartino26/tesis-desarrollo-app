import React from 'react'
import Logo from '../../components/Logo/Logo';
import './styles.css';
import Huella from '../../components/Huella/Huella';

function Home() {
  return (
    <div className="inicio">
     <Logo/>
     <Huella/>
    </div>
  )
}

export default Home;