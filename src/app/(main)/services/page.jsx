import React from 'react'
import WebDevelopmentSection from './WebDevelopmentSection'
import MobileAppSection from './MobileAppSection'
import CloudSolutionsSection from './CloudSolutionsSection'
import ITConsultingSection from './ITConsultingSection'

function ServiceHome() {
    return (
        <section>
            <WebDevelopmentSection />
            <hr className="border-gray-300 dark:border-gray-600" />
            <MobileAppSection />
            <hr className="border-gray-300 dark:border-gray-600" />
            <CloudSolutionsSection />
            <hr className="border-gray-300 dark:border-gray-600" />
            <ITConsultingSection />
        </section>
    )
}

export default ServiceHome