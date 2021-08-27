import React from 'react'
import Carousel from './Carousel/Carousel';
import s from './DescriptionProducts.module.css';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import CatalogItem from '../../Pages/Catalog/CatalogItem/CatalogItem';


const DescriptionProducts = (props) => { 
        return (
            <>
                <h2>{props.currentProduct.name}</h2>
                <div>
                    <div className={s.wrapper} style={{display:'flex',flexWrap:'wrap'}}>
                        <div className={s.item}>
                            <Carousel currentProductImg={props.currentProduct.bigImgUrl} key={props.currentProduct.id} />
                        </div>
                        <div className={s.item}>
                            <div>
                                <p>{props.currentProduct.description}</p>
                                <strong>Стоимость:{props.currentProduct.price} BYN</strong>
                                <p>Скидка:{props.currentProduct.discount}%</p>
                            </div>
                            {props.currentProduct.card
                                ? <Button variant="contained" color="primary" ><NavLink to='/Card'>в корзину</NavLink></Button>
                                : <Button onClick={() => {
                                    props.addToCard(props.currentProduct.id);
                                    props.DescriptionHandlerBtn();
                                    props.HandlerCard(props.currentProduct.id)
                                }}>Добавить в корзину</Button>
                            }
                        </div>
                    </div>
                </div>

                {props.viewedProducts.length > 0
                    ? <><h3>Просмотренные товары</h3>
                        <div className={s.viewedProductsWrapper}>
                            {props.viewedProducts.map(p => <CatalogItem p={p} addToCard={props.addToCard} HandlerCard={props.HandlerCard} key={p.id} />)}
                        </div>
                    </>
                    : null
                }

            </>
        )
    }


export default DescriptionProducts;

