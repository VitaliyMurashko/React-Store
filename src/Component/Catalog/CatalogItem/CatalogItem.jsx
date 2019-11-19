import React from 'react';
import s from './CatalogItem.module.css'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const CatalogItem = props => {
     return (
          <div className={s.card} key={props.p.id}>
               <div className={s.imgWrapper}>
                    <NavLink to={'/catalog/' + props.p.id}>
                         <img src={props.p.imgUrl}></img>
                    </NavLink>
               </div>
               <p style={{ fontWeight: 'bold', color: '#3a3737e3' }}>{props.p.name}</p>
               <p>{props.p.description}</p>
               {props.p.discount
                    ? (<div>
                         <s>{props.p.price} BYN</s>
                         <p>{props.p.price - props.p.price / 100 * props.p.discount}BYN</p>
                    </div>
                    )
                    : <p>{props.p.price}BYN</p>
               }
               {props.p.card
                    ? <Button variant="contained" color="primary" ><NavLink to='/Card'>в корзину</NavLink></Button>
                    : <Button onClick={() => {
                         props.addToCard(props.p.id);
                         props.HandlerCard(props.p.id)
                    }}>Добавить в корзину</Button>
               }
          </div>
     )
}

export default CatalogItem