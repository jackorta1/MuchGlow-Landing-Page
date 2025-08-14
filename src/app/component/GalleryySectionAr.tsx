"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Importing the icon
import Gal1 from '../../../public/gal1.jpg';
import Gal2 from '../../../public/gal2.jpg';
import HaddingSection from './HaddingSection';

const GalleryySectionAr = () => {
  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      className="webMarg" 
      id="gallery"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={galleryVariants}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <HaddingSection heading={'المعرض'} subheading={' '} />
        </motion.div>
        <div className="d-block justify-content-center">
          <div className="row">
            {/* Responsive Video Section */}
            <motion.div 
              className="col-lg-9 col-md-12 col-12"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="ratio ratio-16x9"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="custom-ratio">
                  <video className="custom-video" controls autoPlay>
                    <source
                      src="https://videos.pexels.com/video-files/5226462/5226462-hd_1920_1080_30fps.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </motion.div>
            </motion.div>
            {/* Image Gallery Section */}
            <motion.div 
              className="col-lg-3 col-md-12 col-12 mt-sm-4 mt-lg-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="row">
                <motion.div 
                  className="col-lg-12 col-md-6 col-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image src={Gal1} width={925} className="img-fluid galImag" height={716} alt="صورة المعرض 1" />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="col-lg-12 col-md-6 col-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image src={Gal2} width={925} height={716} className="img-fluid galImag" alt="صورة المعرض 2" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          {/* View More Link with Icon */}
          <motion.a
            href="/ar/gallery"
            className="fs-5 colored fw-normal text-decoration-none viewMore d-flex align-items-center float-start"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ x: -10 }}
          >
            عرض المزيد 
            <motion.span
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FontAwesomeIcon icon={faCircleArrowLeft} className="fs-3 me-2" />
            </motion.span>
          </motion.a>
          <div className="clearfix"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryySectionAr;
