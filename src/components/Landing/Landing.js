import React from 'react';
import img1 from "../img/sabzi/vegiBack1.jpg";
import img2 from "../img/sabzi/vegiBack4.jpg";
import img3 from "../img/sabzi/vegiBack3.jpg";
import './Landing.css';

const Landing = () => {
    return ( 
        // <div>

<div id="demo" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} alt="Los Angeles" width="1100" height="500" />
      <div className="carousel-caption">
        <h3>Los Angeles</h3>
        <p>We had such a great time in LA!</p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={img2} alt="Chicago" width="1100" height="500" />
      <div className="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={img3} alt="New York" width="1100" height="500" />
      <div className="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
  </div>

            {/* <div id="slides" className="carousel slide" data-ride="carousel" >
                <ul className="carousel-indicators">
                    <li data-target="#slides"  data-slide-to="0" className="active" ></li>
                    <li data-target="#slides"  data-slide-to="1" ></li>
                    <li data-target="#slides"  data-slide-to="2" ></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} alt="haha" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} alt="mhi" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} alt="sfn" />
                    </div>
                </div>
            </div>      */}
        </div>

     );
}
 
export default Landing;