import React from 'react'
import ContactForm from './contactForm'
import ContactInfo from './contactInfo'

const Contact = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        <div className='grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:[80%] mx-auto items-center gap-10 mt-10'>
         {/* Contact Form    */}
         <div  data-aos="fade-left" 
                data-aos-anchor-placement="top-center" 
                >
            <ContactForm/>
         </div>
         {/* Contact Info */}
         <div  data-aos="fade-right" 
                data-aos-anchor-placement="top-center" 
                data-aos-dalay="100"
                className='xl:mx-auto'
                >
            <ContactInfo/>
         </div>
        </div>
      
    </div>
  )
}

export default Contact
