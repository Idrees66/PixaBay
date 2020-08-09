import React from 'react';
import desk from '../img/sabzi/vegiBack5.jpg';

import './welcome.css';
// import 'bootstrap/dist/css/bootstrap.min.css'

const Welcome = () => {
    return ( 
        <div>
        <div className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12 hline">
                    <h1 className="display-4"><b>Build With Ease</b></h1>
                </div>
                 
                <div className="col-12">
                    <p >Carousels don’t automatically normalize slide dimensions.
                     As such, you may need to use additional utilities or custom styles to appropriately size content.
                     While carousels support controls and indicators</p>
                </div>
            </div>
        </div>

{/*--------------------------------------- THREE ICONS----------------------------------------- */}

         <div className="container-fluid padding">
         <div className="row welcome text-center">
             <div className="col-xs-12 col-sm-6 col-md-4">
                <i className="fa fa-code"></i>
                <h3>HTML 5</h3>
                <p>Build with Latest Version of HTML, HTML5</p>
             </div>
             <div className="col-xs-12 col-sm-6 col-md-4">
                <i className="fa fa-bold"></i>
                {/* <img src={fruit1} alt="melon" /> */}
                <h3>Bootstrap</h3>
                <p>Build with Latest Version of Bootstrap, Bootstrap4</p>
             </div>
             <div className=" col-sm-12 col-md-4">
                <i className="fa fa-podcast"></i>
                <h3>CSS3</h3>
                <p>Build with Latest Version of CSS, CSS3</p>
             </div>
         </div>
     </div>

{/*--------------------------------------- COLUMN SECTION----------------------------------------- */}

        <div className="container-fluid padding colum"  >
            <div className="row padding">
                <div className="col-md-12 col-lg-6 cont">
                    <h1 >Fresh Vegitables...</h1>
                    <p>Carousels don’t automatically normalize slide dimensions.
                     As such, you may need to use additional utilities or custom 
                     While carousels support controls and indicators</p>
                     <p>
                     Carousels don’t automatically normalize slide dimensions.
                     As such, you may need to use additional utilities or custom styles to appropriately size content.
                     </p>
                     <p>
                     As such, you may need to use additional utilities or custom styles to appropriately size content.
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
                <div className="col-lg-6">
                    <img src={desk} className="img-fluid" alt="Pic" />
                </div>
            </div>
        </div>
        
     </div>
     );
}
 
export default Welcome;