import React from 'react'
import ContactSection from './ContactSection'
import ContactHero from './ContactHero'

function ContactPage() {
    return (
        <main>
            <ContactHero />
            <div id="contact-form-section">
                <ContactSection />
            </div>
        </main>
    )
}

export default ContactPage