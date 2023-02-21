import React from 'react'
import logo from './react-icon-small.png'


export default function Navbar(){
    return(
    <nav className='navbar'>
        <img src= {logo} className='image2'/>
        <h2 className='header'>ReactFacts</h2>
        <h3 className='title'>React Course - Project 1</h3>
    </nav>
    )
}