import React from 'react';
import { Fade } from 'react-slideshow-image';
import music1 from '../../images/music1.jpg';
import music2 from '../../images/music2.jpg';
import music3 from '../../images/music3.jpg';
import './banner.css';
import About from '../About'
import 'react-slideshow-image/dist/styles.css'
const fadeImages = [
music1,music2,music3,music2
];

const fadeProperties = {
  duration: 3500,
  transitionDuration: 1000,
  infinite: true,
  arrows:false,
  indicators: false,
  onChange: () => {
   
  }
}

const Banner = () => {
  return (
    <div className="slide-container w-full md:w-1/2">
      <Fade {...fadeProperties} >
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} className='w-full overflow-hidden ' style={{height:"60vh",objectFit:"cover"}} alt="banner" />
            <div className="kemikal"/>
          
          </div>
        
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} className='w-full overflow-hidden ' style={{height:"60vh",objectFit:"cover"}} alt="banner" />
            <div className="kemikal"/>
            
          </div>
         
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} className='w-full overflow-hidden ' style={{height:"60vh",objectFit:"cover"}} alt="banner" />
            <div className="kemikal"/>
            
            
          </div>
         
        </div>
      </Fade>
      <div  className='hidden md:block'>
     <About/></div>
    </div>
  )
}
export default Banner;