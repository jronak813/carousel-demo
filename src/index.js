import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/Slider'
import images from './images'

ReactDOM.render(<Slider slides={images} />, document.querySelector('.main'))
