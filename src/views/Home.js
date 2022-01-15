import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Speakerblock from '../components/Speakerblock'
import Speakerblocktwo from '../components/speakerblocktwo'
import Earphoneblock from '../components/Earphoneblock'
import Aboutblock from '../components/Aboutblock'
import Footer from '../components/Footer'
export default function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Speakerblock/>
            <Speakerblocktwo />
            <Earphoneblock />
            <Aboutblock/>
            <Footer/>
        </div>
    )
}
