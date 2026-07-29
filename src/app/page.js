import Hero from '@/components/Hero'
import SpecializedServices from '@/components/SpecializedServices'
import Footer from '@/share/Footer'
import Navbar from '@/share/Navbar'
import React from 'react'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <SpecializedServices />
            <Footer />
        </div>
    )
}

export default Home