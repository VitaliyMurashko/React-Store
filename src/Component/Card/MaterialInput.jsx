import TextField from '@material-ui/core/TextField';
import React from 'react'

export const renderTextField = props => {
  return (
    <>
      <TextField
        id="standard-dense"
        label={props.input.name}
        margin="dense"
        value={props.value}
        onChange={(value) => props.input.onChange(value)}
      /><p style={{ color: 'red', fontSize: '10px' }}>{props.meta.error}</p></>)
}

export const renderTextArea = props => {
  return (<TextField
    id="standard-textarea"
    label={props.input.name}
    placeholder=""
    multiline
    rows="6"
    fullWidth
    margin="normal"
    value={props.value}
    onChange={(value) => props.input.onChange(value)}
  />)
}
