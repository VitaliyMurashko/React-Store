import React from 'react'
import s from './Footer.module.css'

const Footer = props => {
    return(
  <footer className={s.footer}>
    Copyright
    <div style={{float:'right'}}>
      <a href="https://github.com/VitaliyMurashko/React-Store.git">Код проекта можно посмотреть тут</a>
    </div>
  </footer>
    )}
export default Footer