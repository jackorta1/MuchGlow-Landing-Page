"use client";
import React from 'react'
import { motion } from "framer-motion"
import HaddingSection from './HaddingSection'
import ClientSlide from './ClientSlide'
import OvalImageAr from './OvalImageAr'

const SalonClients = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <motion.div 
      className='salonBg' 
      id='saloons'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <HaddingSection heading="صالونات" subheading="لنبني النجاح والنمو معاً" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ClientSlide/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <OvalImageAr/>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SalonClients
