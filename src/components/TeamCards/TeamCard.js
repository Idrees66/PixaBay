import React from 'react';
import team from '../img/team1.png';
import team2 from "../img/team2.png";
import team3 from "../img/team3.png";
import boots from "../img/sabzi/gifs/fruit2.gif";
import img1 from '../img/sabzi/basket.png'
import './Card.css';

const Team = () => {
    return ( 
        <div>

            <div id="basket">
            <img src={img1} alt="ghdkj" />
            </div>

            <div className="container-fluid padding titl">
                <div  className="row welcome text-center ">
                    <div className="col-12 hline">
                        <h1 className="display-4">Fresh Vegitables & Fruits</h1>
                    </div>
                </div>
            </div>

{/*-------------------------------------------- CARDS------------------------------------------------------ */}

        <div className="container-fluid padding">
            <div className="row padding">

                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={team} alt="Team" />
                        <div className="card-body">
                            <h4 className="card-title">Turgut Alp</h4>
                            <p className="card-text"> Turgust is the COAS of Chawadar Qabila & He
                             is famous for his axe</p>
                             <button className="btn btn-outline-secondary">See Profile</button>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={team2} alt="Team" />
                        <div className="card-body">
                            <h4 className="card-title">Bamsi Alp</h4>
                            <p className="card-text"> Turgust is the COAS of Chawadar Qabila & He
                             is famous for his axe</p>
                             <button className="btn btn-outline-secondary">See Profile</button>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={team2} alt="Team" />
                        <div className="card-body">
                            <h4 className="card-title">Bamsi Alp</h4>
                            <p className="card-text"> Turgust is the COAS of Chawadar Qabila & He
                             is famous for his axe</p>
                             <button className="btn btn-outline-secondary">See Profile</button>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={team3} alt="Team" />
                        <div className="card-body">
                            <h4 className="card-title">Dumrul Alp</h4>
                            <p className="card-text"> Turgust is the COAS of Chawadar Qabila & He
                             is famous for his axe</p>
                             <button className="btn btn-outline-secondary">See Profile</button>
                        </div>
                    </div>   
                    </div>
            </div>

{/*--------------------------------------- COLUMN SECTION----------------------------------------- */}

<div className="container-fluid padding columnSection">
            <div className="row padding">
                <div className="col-lg-6">
                    <h2>Our Philosphy</h2>
                    <p>Carousels don’t automatically normalize slide dimensions.
                     As such, you may need to use additional utilities or custom 
                     While carousels support controls and indicators</p>
                     <p>
                     Carousels don’t automatically normalize slide dimensions.
                     As such, you may need to use additional utilities or custom styles to appropriately size content.
                     As such, you may need to use additional utilities or custom styles to appropriately size content.
                     </p><br />

                </div>
                <div className="col-lg-6 text-center">
                    <img src={boots} className="img-fluid" alt="Pic" />
                </div>
            </div>
        </div>

        </div>

        </div>
     );
}
 
export default Team;