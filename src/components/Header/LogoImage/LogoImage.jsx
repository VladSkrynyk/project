import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CSSclass from "./LogoImage.module.css"
import img from "./../../../images/dsBuffer.bmp.png"

const LogoImage = () => {
    return (

        <div className={CSSclass.logo_image}>
            {/* <span className='glyphicon glyphicon-fire'></span>
            <a>Logo Image2222</a> */}
            <img src={img}/>
        </div>
    );
};

export default LogoImage