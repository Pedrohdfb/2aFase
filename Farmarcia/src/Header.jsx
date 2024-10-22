import React from 'react'
import Logo from './Logo';

function Header() {
  return (
    <div className='container-header'>
      <Logo/>
            <h1 className='inpt-header'>Farmárcia</h1>
            <img src="./farmarcia.webp"/>
    </div>
  )
}

export default Header
