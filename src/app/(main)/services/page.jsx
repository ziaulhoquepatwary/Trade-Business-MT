import React from 'react'
import WebDevelopmentSection from './WebDevelopmentSection'
import MobileAppSection from './MobileAppSection'
import CloudSolutionsSection from './CloudSolutionsSection'

function ServiceHome() {
    return (
        <section>
            <WebDevelopmentSection />
            <hr className="border-gray-300 dark:border-gray-600" />
            <MobileAppSection />
            <hr className="border-gray-300 dark:border-gray-600" />
            <CloudSolutionsSection />
        </section>
    )
}

export default ServiceHome