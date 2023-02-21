import React from "react";
import profile from './profile2.jpeg'
import email from './email.png'
import linkedin from './linkedin.png'
import { UilLinkedin } from '@iconscout/react-unicons'

export default function Greeting(){
    return (
        <div className="greeting">
            <img src = {profile}/>
            <h2 className="name">Sarthak Jain</h2>
            <h4 className="position">Fullstack Developer</h4>
            <h6 className="number">732-520-9871</h6>
            <button type="button" className="button" id="button-1"><img src = {email} id ='email-logo'/>Email</button> 
            <button type="button" className="button" id="button-2"><img src= {linkedin} id = 'linkedin-logo'/>LinkedIn</button>
        <div className="greeting--body">
        <h5 className="greeting--header" id="greeting-about">About</h5>
        <p className="greeting--p1">I am a frontend developer with a particular interest in making 
            things simple and automating daily tasks. I try to keep up with 
            security and best practices, and am always looking 
            for new things to learn.</p>
        <h5 className="greeting--header" id='greeting-interests'>Interests</h5>
        <p className="greeting--p1" id="interests-p">Food expert. Music scholar. Reader. 
        Internet fanatic. Bacon buff. Entrepreneur.
         Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        </div>
    )
}