import React from 'react';
import ebaeno from './img/ebaeno.png';
import hubmart from './img/Hubmart.png';
import shoprite from './img/shoprite.png';
import spar from './img/spar.jpg';

export default function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12   
                    text-hero text-center mt-4 text-blue">
                    Buy direct from your favorite Stores in Lagos  
                    and have items delivered to you same day.
                    </div>
                    <div className="container ">
                    <div className="row m-5" >
                        <div className="col-lg-2 card border m-4 rounded">
                        <img src={shoprite} alt="shoprite" width="150" height="150"/>
                        </div>
                        <div className="col-lg-2 card border m-4 rounded">
                        <img src={ebaeno} alt="ebaeno " width="150" height="150"/>
                        </div>
                        <div className="col-lg-2 card border m-4 rounded">
                            <img src={hubmart} alt="Hubmart" width="150" height="150"/>
                        </div>
                        <div className="col-lg-2 card border m-4 rounded">
                            <img src={spar} alt="Spar" width="150" height="150"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
