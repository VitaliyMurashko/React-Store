import React from 'react'
import s from './CarouselProducts.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CatalogItem from '../../Catalog/CatalogItem/CatalogItem'


class CarouselProducts extends React.Component  {
    componentDidMount(){
      this.props.setStateProducts()
    }
  render () {
    return (
      <div className={s.Container}>
      <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={1000}
      centerMode={false}
      containerClass="container-with-dots"
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
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable
    >
      {this.props.Products.map(p => <CatalogItem p={p} addToCard ={this.props.addToCard} HandlerCard = {this.props.HandlerCard} key={p.id}/>)}
    </Carousel>
    </div>
    )
}
}

export default  CarouselProducts