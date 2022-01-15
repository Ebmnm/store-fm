import React from 'react'
import "./styles/footer.scss"
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-nav'>
                <h2>Audiophile</h2>
                <div className='links'> <h3>HOME</h3> <h3>HEADPHONES</h3> <h3>SPEAKERS</h3> <h3> EARPHONES</h3> </div>
            </div>
            <div className='footer-text'>
                <p>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
                <div className='icons'>
                    icon
                </div>
                <p>Copyright 2022. All Rights Reserved</p>
            </div>
        </div>
    )
}
