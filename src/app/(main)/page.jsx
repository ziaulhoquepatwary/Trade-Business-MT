import Hero from '@/components/Hero'
import SpecializedServices from '@/components/SpecializedServices'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

function Home() {
    return (
        <main>
            <Hero />
            <SpecializedServices />
            <WhyChooseUs />
        </main>
    )
}

export default Home