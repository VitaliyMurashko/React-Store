import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../formValidation/CardFormValidation'
import {renderTextField, renderTextArea} from './MaterialInput'


const SendFormCard = props => {
  const [formFields, setFormFields] = useState({})
  const onSubmitHandler = (e, formData, cardData) => {
     e.preventDefault()
     const orderData = JSON.stringify({ ...formData, ...cardData})
     console.log(orderData)
     props.postOrder(orderData)
  }
    return (
    <form onSubmit={(e) => onSubmitHandler(e, formFields, props.DataCard)}>
      <div>
        <Field type="text"
          validate = {[required]} 
          component={renderTextField
          }
          onChange={(e) => setFormFields({
            ...formFields,
            userName:e.target.value
          }) 
        }
          value={formFields.name}
          name="Ваше имя"
        />
      </div>
      <div>
        <Field type="text"
          validate = {[required]}
          component={renderTextField}
          name="Номер телефона"
          onChange={(e) => setFormFields({
            ...formFields,
            userNumber:e.target.value
          }) 
        }
          value={formFields.number}
        />
      </div>
      <div>
        
        <Field type="textarea"
          component={renderTextArea}
          name="Примечания к заказу"
        />
      </div>
      <div style={{ textAlign: "right", margin: "20px 0 0 0" }}>
        <Button variant="contained" color="primary" type='submit' disabled={!props.valid || !props.DataCard.length}>
          <p>Оформить заказ</p>
        </Button>
      </div>
    </form>
    );
}

const SendReduxForm = reduxForm({
  form: 'Send'
})(SendFormCard)

export default SendReduxForm