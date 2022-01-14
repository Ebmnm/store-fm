import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Speakerblock from '../components/Speakerblock'
import Speakerblocktwo from '../components/speakerblocktwo'
export default function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Speakerblock/>
            <Speakerblocktwo />
        </div>
    )
}
