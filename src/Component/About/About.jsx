import React from 'react';
import Classes from './About.module.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const About = props =>{

return(
  <>
  <h2>Контакты</h2>
  <div className={Classes.wrapper}>
      <div>
<h4>Наш магазин находится:</h4>
<p>г. Минск, пр-т. Независимости, 1</p>
<p>Время работы: с 9-00 до 21-00</p>
<p>Без выходных</p>
<a href="tel:+375291111111">+375 29 111-11-11</a>
  </div>
    <YMaps>
      <div>
      <Map defaultState={{ center: [53.893710, 27.544368], zoom: 9,}} height={500} width={600} className={Classes.map}><Placemark geometry={[53.893710, 27.544368]} /></Map>
      </div>
    </YMaps>
  </div>
  </>
)
}
export default About;