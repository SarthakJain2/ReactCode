import React from "react";
import logo from './react-icon-large.png'
export default function FunFacts(){
    return (
        <div className='content'>
            {/* <img src ={logo} className='background-logo'/>  
            don't need this - look at css*/}
            <h1 className="description">Fun Facts about React</h1>
            <ul className="bullet">
                <li className="bullet_point">Was first released in 2013</li>
                <li className="bullet_point">Was originally created by Jordan Walke</li>
                <li className="bullet_point">Has well over 100k stars on GitHub</li>
                <li className="bullet_point">Is maintained by Facebook</li>
                <li className="bullet_point">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

        </div>
    )
}