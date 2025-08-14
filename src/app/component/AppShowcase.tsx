"use client";
import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Download, Star } from "lucide-react";
import Image from "next/image";

const AppShowcase = () => {
  return (
    <section className="app-showcase-section section-padding" style={{ 
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-accent) 100%)'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="position-relative d-inline-block">
                {/* Phone Mockup */}
                <div style={{
                  width: '300px',
                  height: '600px',
                  background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
                  borderRadius: '40px',
                  padding: '20px',
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
                  position: 'relative',
                  margin: '0 auto'
                }}>
                  {/* Phone Screen */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'white',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <Image
                      src="/salonglow.png"
                      fill
                      alt="MuchGlow App Interface"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  {/* Phone Notch */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '120px',
                    height: '25px',
                    background: '#000',
                    borderRadius: '15px'
                  }} />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="position-absolute"
                  style={{ top: '10%', right: '-20%' }}
                >
                  <div className="glass-card px-3 py-2">
                    <div className="d-flex align-items-center">
                      <Star size={16} className="text-warning me-1" fill="currentColor" />
                      <span style={{ fontWeight: '600', fontSize: '14px' }}>4.9 Rating</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  className="position-absolute"
                  style={{ bottom: '15%', left: '-15%' }}
                >
                  <div className="glass-card px-3 py-2">
                    <div className="d-flex align-items-center">
                      <Download size={16} className="text-success me-1" />
                      <span style={{ fontWeight: '600', fontSize: '14px' }}>50K+ Downloads</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <span className="badge px-3 py-2" style={{
                  background: 'rgba(231, 84, 129, 0.1)',
                  color: 'var(--primary)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  letterSpacing: 'var(--tracking-wide)'
                }}>
                  <Smartphone size={14} className="me-1" />
                  Available Now
                </span>
              </div>

              <h2 className="luxury-heading mb-4" style={{ fontSize: 'var(--text-4xl)' }}>
                Beauty at Your
                <span className="gradient-text d-block">Fingertips</span>
              </h2>

              <p className="subtitle mb-5" style={{ fontSize: 'var(--text-lg)' }}>
                Download the MuchGlow app and unlock a world of beauty possibilities. 
                Book, manage, and earn rewards - all from your phone.
              </p>

              {/* App Features */}
              <div className="row g-3 mb-5">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      marginRight: '12px'
                    }} />
                    <span>Instant Booking</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      marginRight: '12px'
                    }} />
                    <span>Push Notifications</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      marginRight: '12px'
                    }} />
                    <span>Digital Wallet</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      marginRight: '12px'
                    }} />
                    <span>Booking History</span>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="d-flex flex-wrap gap-3">
                <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" 
                  className="d-inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="d-flex align-items-center px-4 py-3" style={{
                    background: '#000',
                    borderRadius: 'var(--radius-lg)',
                    color: 'white',
                    transition: 'transform var(--transition-base)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div className="me-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 16.97 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', opacity: 0.8 }}>Download on the</div>
                      <div style={{ fontSize: '16px', fontWeight: '600' }}>App Store</div>
                    </div>
                  </div>
                </a>

                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
                  className="d-inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="d-flex align-items-center px-4 py-3" style={{
                    background: '#000',
                    borderRadius: 'var(--radius-lg)',
                    color: 'white',
                    transition: 'transform var(--transition-base)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div className="me-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', opacity: 0.8 }}>GET IT ON</div>
                      <div style={{ fontSize: '16px', fontWeight: '600' }}>Google Play</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* QR Code Option */}
              <div className="mt-4">
                <p style={{ 
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)'
                }}>
                  Or scan QR code with your phone to download instantly
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;