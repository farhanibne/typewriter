import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Welcome() {
  return (
    <div style={{height:'100vh',width:'100vw'}}>

      <div className="section"  >
    <center>
    <img src={logo} className="App-logo" alt="logo"  style={{height:"45vh",width:'60vw'}}/> <br/><br/>

    <h1 style={{fontSize:'25px'}}><b>Typing Test</b></h1> <br/>

   

    <h2>DO A 1 Minute Test </h2><br/>

    <Link to="/Main">
    <button style={{backgroundColor:'#212121',color:'azure',padding:'13px',borderRadius:'10px',fontSize:'15px'}}>
        Click to Start
    </button>
    </Link>
  
    </center>
      

      </div>


    </div>
  )
}

export default Welcome