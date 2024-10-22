import React from 'react'
import Logo from './Logo';
import './Header.css'

function Header() {
  return (
    <div className='container-header'>
      <Logo/>
            <h1 className='inpt-header'>Farmárcia</h1>
            <section className='section-img'>
            <img src="./farmarcia.webp"/>
            <img className='placa' src="./farmarcia-placa.webp"/>

            </section>
    </div>
  )
}

export default Header
