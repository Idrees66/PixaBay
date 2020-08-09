import React from 'react';
import './Emoji.css';
import fruit1 from '../img/sabzi/gifs/fruit1.gif';
import fruit2 from '../img/sabzi/gifs/fruit2.gif';
import fruit3 from '../img/sabzi/gifs/fruit3.gif';
import fruit4 from '../img/sabzi/gifs/fruit4.gif';

const Emoji = () => {
    return ( 
        <div>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-sm-6 col-md-3 ">
                        <img src={fruit1} className="gif" alt="Panda" />
                    </div>
                    <div className="col-sm-6 col-md-3 ">
                        <img src={fruit2} className="gif" alt="Panda" />
                    </div>
                    <div className="col-sm-6 col-md-3 ">
                        <img src={fruit3} className="gif" alt="Panda" />
                    </div>
                    <div className="col-sm-6 col-md-3 ">
                        <img src={fruit4} className="gif" alt="Panda" />
                    </div>
                </div>
            </div>

{/*-------------------------------------------- BACKGROUND------------------------------------------- */}

            
                <div className="fw" id="wrap">
                    <div className="fixe">

                    </div>
                </div>
          

        </div>
     );
}
 
export default Emoji;