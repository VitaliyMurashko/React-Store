import React from 'react';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';
import {required} from '../../formValidation/CardFormValidation'
import {renderTextField, renderTextArea} from './MaterialInput'

const SendFormCard = props => {
    return (
    <form onSubmit={() => props.handleSubmit()}>
      <div>
        <Field type="text"
          validate = {[required]} 
          component={renderTextField
          }
          name="Ваше имя"
        />
      </div>
      <div>
        <Field type="text"
          validate = {[required]}
          component={renderTextField}
          name="Номер телефона"
        />
      </div>
      <div>
        <Field type="textarea"
          component={renderTextArea}
          name="Примечания к заказу"
        />
      </div>
      <div style={{ textAlign: "right", margin: "20px 0 0 0" }}>
        <Button variant="contained" color="primary" type='submit' disabled={!props.valid}>
          <p>Оформить заказ</p>
        </Button>
      </div>
    </form>
    );
}

const SendReduxForm = reduxForm({
  // a unique name for the form
  form: 'Send'
})(SendFormCard)

export default SendReduxForm