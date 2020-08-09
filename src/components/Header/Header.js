import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../image.png';

class Headd extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top" id="navi">
          <div className="container-fluid">
            <h2 id="ha">Sabziyaan</h2>
            <button  className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive" >
                <ul className="navbar nav  ml-auto active" >
                    <li className="nav-item">
                        <Link  className="nav-link" to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to="/" >Fruits</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to="/" >Vegitables</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to="/" >Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to="/" >Connect</Link>
                    </li>
                </ul>
            </div>
          </div>
      </nav>
    )
  }
}

export default Headd;

