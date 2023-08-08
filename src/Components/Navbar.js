import React from 'react'
import {link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav>
            <link to="/">Home</link>
            <link to="/about">About</link>
            <link to="/product">Product</link>
        </nav>
    </div>
  )
}

export default Navbar