import React from 'react'
import WebDevelopmentSection from './WebDevelopmentSection'
import MobileAppSection from './MobileAppSection'

function ServiceHome() {
    return (
        <section>
            <WebDevelopmentSection />
            <hr className="border-gray-300 dark:border-gray-600" />
            <MobileAppSection />
        </section>
    )
}

export default ServiceHome