import React from 'react';
import s from './Catalog.module.css';
import SortNav from './SortNav';
import CatalogItem from './CatalogItem/CatalogItem'



const Catalog = (props) => {
     return (
          <>
               <h2>Каталог</h2>
               <SortNav
                    sortLowPrice={props.sortLowPrice}
                    sortHighPrice={props.sortHighPrice}
                    sortDiscount={props.sortDiscount}
               />
               <div className={s.flexContainer}>
                    {props.catalog.products.map(p => <CatalogItem p={p} addToCard={props.addToCard} HandlerCard={props.HandlerCard} key={p.id} />)}
               </div>
          </>
     )
}
export default Catalog;