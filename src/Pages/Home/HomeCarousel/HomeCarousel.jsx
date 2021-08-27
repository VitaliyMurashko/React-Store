import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const HomeCarousel = props =>{
    return (
<Carousel
  arrows={false}
  additionalTransfrom={0}
  autoPlay
  autoPlaySpeed={3000}
  centerMode={false}
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  }}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
  <img
    src="https://uploads.dev.by/resources/f8973fe7-f8d5-4c1a-890a-4eab5f5b3446/cover/190bc45f8c.png"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://content.onliner.by/news/1100x5616/a16847e4a66f2b49f403574d60aab624.jpeg"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://cdn-st3.rtr-vesti.ru/vh/pictures/hd/146/564/2.jpg"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
</Carousel>
    )
}

export default HomeCarousel