/* eslint-disable no-unused-vars */
import React from 'react'
import Img from './../../assets/Img.svg'
import { Link } from 'react-router-dom'
import '../../main'
const Welcome = () => {
  return (
    <div className='Fondo container'>
    <img src={Img} alt='' className='logo' />
    
    <div className='LoginCard'>
      <h2>Welcome</h2>
    <Link className='btn btn-outline-light'to='/Login'>Entrar</Link>
    <h6>Version2.0</h6>
    </div>
    </div>
  )
}
export default Welcome;