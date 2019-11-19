import React from 'react'
import CarouselProducts from './CarouselProducts/CarouselProducts'
import HomeCarousel from '../Home/HomeCarousel/HomeCarousel'
import s from './Home.module.css'

const Home = props => {
return (
    <>
    <HomeCarousel />
    <div className={s.wrapperProducts}>
    <h3>Популярные товары</h3>
    <CarouselProducts 
    setStateProducts = {props.addPopularProducts} 
    Products = {props.catalog.popularProducts}
    addToCard ={props.addToCard} HandlerCard = {props.HandlerCard}
    />
    </div>
    <div className={s.wrapperProducts}>
    <h3>Товары на скидке</h3>
    <CarouselProducts
    setStateProducts = {props.addDiscountProducts} 
    Products = {props.catalog.discountProducts}
    addToCard ={props.addToCard} HandlerCard = {props.HandlerCard}
    />
    </div>
    <div className={s.wrapperProducts}>
    <h3>Новые поступления</h3>
    <CarouselProducts
    setStateProducts = {props.addDiscountProducts} 
    Products = {props.catalog.discountProducts}
    addToCard ={props.addToCard} HandlerCard = {props.HandlerCard}
    />
    </div>
    </>
)
}

export default Home