import React from 'react'
import Twitter from './twitter-sign-2.png'
import Facebook from './facebook.png'
import Instagam from './instagram.png'
import GitHub from './github-2.png'




export default function Footer(){
    return (
        <div className='footer'>
        <img src = {Twitter} className='img' id ='twitter'/>
        <img src = {Facebook} className='img'/>
        <img src = {Instagam} className='img'/>
        <img src = {GitHub} className='img' id='github'/>
        </div>
        
    )

}