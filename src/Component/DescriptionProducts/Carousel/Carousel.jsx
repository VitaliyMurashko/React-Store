// import s from './Carousel.module.css'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";

const Gallery = props => {
  return (
    <Carousel showArrows={false} showIndicators={false} showStatus={false}>
      {props.currentProductImg.map(i=>{
        return (
        <div key = {i}>
          <img src={i}/>
        </div>
        )
      })}
    </Carousel>
  )
}

export default Gallery