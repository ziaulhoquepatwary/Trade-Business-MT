import Hero from '@/components/Hero'
import Footer from '@/share/Footer'
import Navbar from '@/share/Navbar'
import React from 'react'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home