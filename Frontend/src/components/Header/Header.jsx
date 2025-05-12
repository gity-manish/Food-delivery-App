import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Discover delicious meals from top local restaurants, freshly prepared and delivered hot to your door. Whether you're craving Nepali classics or international flavors, we've got you covered—anytime, anywhere.</p>
           <a href='#explore-menu'><button>View Menu</button></a>
      </div>
      
    </div>
  )
}

export default Header;
