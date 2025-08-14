"use client"
import React from 'react'
import styles from "../page.module.css"

import Shape from "../../../public/bgshape.png"
import Image from 'next/image' 
import NavbarSectionAr from './NavbarSectionAr'

import HeroSectionAr from './HeroSectionAr'
const HeroBarAr = () => {
  return (
    <><div className={styles.heroBg}>
     <NavbarSectionAr/>
 <HeroSectionAr/>

    </div>
    <div className='text-center'>
    <Image src={Shape} width={2400} className='img-fluid' alt='...' />
    </div>
    </>
  )
}

export default HeroBarAr
