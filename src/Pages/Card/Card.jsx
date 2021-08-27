import React from 'react';
import classes from './Card.module.css';
import s from './Card.module.css';
import SendReduxForm from './SendForm';
import success from '../../assets/img/Tick_Mark_Dark_icon-icons.com_69147.png';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Card = props => {
  const getTotalAmount = (products) => {
    let totalAmount = 0;
    products.forEach(p => {
      if (p.discount !== 0) {
        totalAmount = totalAmount + (p.price - p.price / 100 * p.discount)
      } else {
        totalAmount = totalAmount + p.price
      }
    });
    return totalAmount
  }

  const getDiscountSumm = (price, discount) => {
    return price / 100 * discount
  }

  const clearCard = () => {
    props.removeProductsFromCard();
    props.successSend('')
  }
 

  return (
    
    props.orderData.length ? <>
      <div>
        <h2>Ваша заявка принята</h2>
        <span style={{display:'block'}}>
        <p>ID вашего заказа:</p><strong>{props.orderData}</strong>
        </span>
        <img src={success} alt="success" />
      </div>
      <Button variant="contained" color="primary" onClick={clearCard}>
        <NavLink to='/' >Вернуться на главную</NavLink>
      </Button></> :
      <>
        <h2>Корзина</h2>
        <div className={classes.wrapper}>
          <div>
            <h2>В корзине:</h2>
            {props.DataCard.length
              ? <>{props.DataCard.map(i => (
                <div key={i.id} className={s.orderedProduct}>

                  <p>Товар: {i.name}</p>
                  <img src={i.imgUrl}></img>
                  <p>Скидка: {getDiscountSumm(i.price, i.discount)} BYN</p>
                  <p>Сумма: {i.price} BYN</p>
                </div>
              ))}
              </>
              : <h3 style={{ color: 'black' }}>Ваша корзина пока пуста </h3>
            }

            <strong>Итого:{getTotalAmount(props.DataCard)} BYN</strong>
          </div>
          <div>
            <h2 style={{ padding: "20px 0 20px 0" }}>ваши данные</h2>
            <SendReduxForm DataCard={props.DataCard} postOrder={props.postOrder}/>
          </div>
        </div>
      </>
  )
}
export default Card;