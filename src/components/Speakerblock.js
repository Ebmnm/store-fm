import React from 'react'
import "./styles/speakerblock.scss"
import ZX9 from "../assets//home/desktop/image-speaker-zx9.png"
export default function Speakerblock() {
    return (
        <div className='speaker-block'>
            <div className='img-container'><img alt="speaker" src={ZX9}/></div>

            <div className='speaker-block-text'>
                <h1>ZX9 Speaker</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button>See Product</button>
            </div>
        </div>
    )
}

