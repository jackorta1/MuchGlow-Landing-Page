"use client"
import React from 'react'
import styles from "../page.module.css"

import Shape from "../../../public/bgshape.png"
import Image from 'next/image' 
import NavbarSection from './NavbarSection'

import HeroSection from './HeroSection'
const HeroBar = () => {
  return (
    <><div className={styles.heroBg}>
     <NavbarSection/>
 <HeroSection/>

    </div>
    <div className='text-center'>
    <Image src={Shape} width={2400} className='img-fluid' alt='...' />
    </div>
    </>
  )
}

export default HeroBar
