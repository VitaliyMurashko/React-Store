import React from 'react';
import loading from '../../assets/img/5.gif'
import s from './PreLoader.module.css'

const PreLoader = () => {
    return (
    <div className={s.preLoader}><img src={loading} alt="preloader"/></div>
    )
}

export default PreLoader