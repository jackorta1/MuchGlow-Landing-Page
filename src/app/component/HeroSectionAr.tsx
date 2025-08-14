"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Star from "../../../public/star.svg";
import Image from "next/image";
import Bnr from "../../../public/bnrvec.png";
import Button from "react-bootstrap/Button";
import LoadingSpinner from "./LoadingSpinner";
const HeroSectionAr = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = async () => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
  
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isWindows = /Windows/i.test(userAgent);
    const isMac = /Macintosh|Mac OS X/i.test(userAgent);
    const isLinux = /Linux/i.test(userAgent);
  
      if (isAndroid) {
        window.location.href = "https://play.google.com/store";
      } else if (isIOS) {
        window.location.href = "https://apps.apple.com/";
      } else if (isWindows || isLinux) {
        window.location.href = "https://play.google.com/store";
      } else if (isMac) {
        window.location.href = "https://apps.apple.com/";
      } else {
        alert("يرجى فتح هذا الرابط على هاتفك لتحميل التطبيق.");
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("حدث خطأ. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };
  return (
    <div className="container">
      <div className="webMarg">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-12">
            <motion.div 
              className="custAlign"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h1 
                className="hadd fw-bold my-3 display-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ display: 'inline-block' }}
                >
                  مساعدك
                </motion.span>{" "}
                <br />
                <motion.span
                  className="gradient-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ display: 'inline-block' }}
                >
                  الشخصي للصالونات
                </motion.span>
              </motion.h1>
              <motion.p 
                className="hadd fw-normal fs-5 lh-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                يجعل <span className="colored fw-bold">ماتش غلو</span> حجز الصالونات سهلاً للغاية لخدمات داخل
                الصالون، السريعة أو على الرصيف، مع تعزيز ولاء العملاء من خلال
                مكافآت مخصصة.
              </motion.p>
              
              {/* Add animated feature badges */}
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="d-flex flex-wrap gap-3 mt-4"
              >
                {['حجز فوري', 'مكافآت حصرية', 'دفع آمن'].map((feature, index) => (
                  <motion.span
                    key={index}
                    className="badge px-3 py-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    style={{
                      background: 'rgba(231, 84, 129, 0.1)',
                      color: 'var(--primary)',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.9rem'
                    }}
                  >
                    ✓ {feature}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <motion.div 
              className="magVect"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="position-relative text-start me-lg-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="animate-float"
                >
                  <Image
                    src={Bnr}
                    width={550}
                    className="img-fluid custWidth"
                    height={582}
                    alt="MuchGlow App"
                    priority
                  />
                </motion.div>
                <motion.div 
                  className="position-absolute top-100 start-100 translate-middle custStartAr"
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <div className="custoHeroPointsAr luxury-card animate-pulseSlow">
                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="d-flex align-items-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Image src={Star} width={25} alt="نجمة" />
                      </motion.div>
                      <span className="gradient-text fw-bold">+500 نقاط</span>
                    </motion.h4>
                    <motion.p 
                      className="fontSm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    >
                      اجمع النقاط وحولها إلى أموال
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        className="btn-luxury rounded-pill fs-6 px-4 py-2 fw-medium"
                        onClick={handleDownload}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <LoadingSpinner size="sm" color="#fff" />
                            <span className="ms-2">جاري التحميل...</span>
                          </>
                        ) : (
                          <>
                            حمل التطبيق الآن
                            <motion.span
                              className="ms-2"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              ←
                            </motion.span>
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAr;
