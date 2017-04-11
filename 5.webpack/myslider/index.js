import React from 'react';
import ReactDOM  from 'react-dom';
import Slider from './Slider';
let images = [
  {src:require('./images/1.jpg')},
  {src:require('./images/2.jpg')},
  {src:require('./images/3.jpg')},
  {src:require('./images/4.jpg')}
]
ReactDOM.render(<Slider images={images}/>,document.querySelector('#app'));
