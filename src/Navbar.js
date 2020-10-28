import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
             <div className='headerWords'>
                <h3 className='topLeft'>Start Bootstrap</h3>
                <ul className='navList'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SAMPLE POST</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className='middle'>
                <h1 className='title'>Clean Blog</h1>
                <h2 className='description'>A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}
export default Navbar