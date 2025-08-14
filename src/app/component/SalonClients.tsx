import React from 'react'
import HaddingSection from './HaddingSection'
import ClientSlide from './ClientSlide'
import OvalImage from './OvalImage'

const SalonClients = () => {
  return (
    <div className='salonBg' id='saloons'>
    <div className='container'>
    <HaddingSection heading="Salons" subheading="Let’s Grow And Succeed" />
<ClientSlide/>
<OvalImage/>
    </div>
    </div>
  )
}

export default SalonClients
