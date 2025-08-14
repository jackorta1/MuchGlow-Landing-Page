"use client";
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import Abt1 from "../../../public/abt1.png"
import Abt2 from "../../../public/abt2.png"
import Abt3 from "../../../public/abt3.png"

const AboutAppSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };
  return (
    <motion.div 
      className='container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='row d-flex justify-content-center'>
        <motion.div 
          className='col-md-4 col-12'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className='text-center'>
            <div className="d-flex justify-content-around align-items-center gap-3">
              <div className="d-flex flex-column justify-content-center mt-4 text-center">
                <motion.div 
                  className="abtCircle1 d-flex justify-content-center align-items-center rounded-circle w-20 h-20 mb-3 p-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    alt=""
                    className=" "
                    width={70}
                    height={70}
                    src={Abt1} 
                  />
                </motion.div> 
              </div>
            </div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              الحجز
            </motion.h4>  
            <motion.p 
              className="texPara"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              احجز موعدك الآن<br/>وتجنب الانتظار.
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className='col-md-4 col-12'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='text-center'>
            <div className="d-flex justify-content-around align-items-center gap-3">
              <div className="d-flex flex-column justify-content-center mt-4 text-center">
                <motion.div 
                  className="abtCircle2 d-flex justify-content-center align-items-center rounded-circle w-20 h-20 mb-3 p-4"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    alt=""
                    className=" "
                    width={70}
                    height={70}
                    src={Abt2} 
                  />
                </motion.div> 
              </div>
            </div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              الملصقات
            </motion.h4>  
            <motion.p 
              className="texPara"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              يمكنك جمع بطاقات الطوابع<br/>للحصول على خدمات مجانية.
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className='col-md-4 col-12'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className='text-center'>
            <div className="d-flex justify-content-around align-items-center gap-3">
              <div className="d-flex flex-column justify-content-center mt-4 text-center">
                <motion.div 
                  className="abtCircle3 d-flex justify-content-center align-items-center rounded-circle w-20 h-20 mb-3 p-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    alt=""
                    className=" "
                    width={70}
                    height={70}
                    src={Abt3} 
                  />
                </motion.div> 
              </div>
            </div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              الهدايا
            </motion.h4>  
            <motion.p 
              className="texPara"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              أرسل وتلقى الهدايا<br/>مع أصدقائك.
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      <div className='webMarg'>
        <div className="row d-flex justify-content-center">
          {/* Video Section */}
          <motion.div 
            className="col-lg-8 col-md-12 col-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.video 
              className="w-100" 
              controls 
              autoPlay
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <source
                src="https://videos.pexels.com/video-files/5226462/5226462-hd_1920_1080_30fps.mp4"
                type="video/mp4" 
              /> 
            </motion.video>
          </motion.div>
          {/* Text Section */}
          <motion.div 
            className="col-lg-4 col-md-12 col-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            transition={{ duration: 0.8, delay: 0.4 }}
          > 
            <div className='details'>
              <motion.div 
                className='d-flex'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className='brdr ms-2'></span>
                <h6 className='colored'>صالون جلو</h6>
              </motion.div>
              
              <motion.h2 
                className='display-6 fw-bold mt-3'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                أسرع طريقة للحصول على<br/>مظهرك المثالي.
              </motion.h2>
              <motion.p 
                className='lh-lg display-6 fs-5 fw-normal my-lg-5'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              > 
                {['تبسيط إدارة الحجز', 'ولاء العملاء', 'التحسين باستخدام البيانات', 'دعم على مدار الساعة'].map((item, index) => (
                  <motion.span
                    key={index}
                    className="d-block"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    - {item}
                  </motion.span>
                ))}
              </motion.p>
            </div> 
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutAppSection;
