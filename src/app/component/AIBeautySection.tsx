"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, Camera, TrendingUp, ChevronRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";

const AIBeautySection = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleAppDownload = async () => {
    setIsDownloading(true);
    
    try {
      const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    
      const isAndroid = /android/i.test(userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
      const isWindows = /Windows/i.test(userAgent);
      const isMac = /Macintosh|Mac OS X/i.test(userAgent);
      const isLinux = /Linux/i.test(userAgent);
    
      await new Promise(resolve => setTimeout(resolve, 1000));
    
      if (isAndroid) {
        window.location.href = "https://play.google.com/store";
      } else if (isIOS) {
        window.location.href = "https://apps.apple.com/";
      } else if (isWindows || isLinux) {
        window.location.href = "https://play.google.com/store";
      } else if (isMac) {
        window.location.href = "https://apps.apple.com/";
      } else {
        alert("Please open this link on your phone to download the MuchGlow app and try the AI Beauty Test.");
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="ai-intro-section" style={{
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated gradient background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(245, 87, 108, 0.15) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      
      <div className="container position-relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Badge */}
          <div className="text-center mb-5">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="d-inline-block"
            >
              <span className="badge px-4 py-2" style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(245, 87, 108, 0.2))',
                border: '1px solid rgba(102, 126, 234, 0.3)',
                color: '#fff',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '1px'
              }}>
                <Brain size={16} className="me-2" />
                NEW: AI-POWERED TECHNOLOGY
              </span>
            </motion.div>
          </div>

          {/* Main Title */}
          <h2 className="text-center mb-4" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            background: 'linear-gradient(90deg, #667eea, #764ba2, #f5576c)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.2'
          }}>
            Discover Your Perfect Look
            <span className="d-block">with AI Beauty Analysis</span>
          </h2>

          <p className="text-center mb-5" style={{
            fontSize: '1.2rem',
            color: '#b8b8d8',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}>
            Revolutionary AI technology that analyzes your unique features to recommend 
            personalized beauty treatments, styles, and skincare routines
          </p>
        </motion.div>

        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Feature Cards */}
              <div className="mb-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="d-flex align-items-start mb-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '20px',
                    padding: '25px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '15px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    flexShrink: 0
                  }}>
                    <Camera size={24} color="white" />
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>
                      Instant Selfie Analysis
                    </h4>
                    <p style={{ color: '#a8a8c8', margin: 0, fontSize: '0.95rem' }}>
                      Upload your photo and get professional beauty insights in seconds
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="d-flex align-items-start mb-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '20px',
                    padding: '25px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '15px',
                    background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    flexShrink: 0
                  }}>
                    <Sparkles size={24} color="white" />
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>
                      Personalized Recommendations
                    </h4>
                    <p style={{ color: '#a8a8c8', margin: 0, fontSize: '0.95rem' }}>
                      Get tailored suggestions for treatments, styles, and products
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="d-flex align-items-start"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '20px',
                    padding: '25px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '15px',
                    background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    flexShrink: 0
                  }}>
                    <TrendingUp size={24} color="white" />
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>
                      Trending Styles Match
                    </h4>
                    <p style={{ color: '#a8a8c8', margin: 0, fontSize: '0.95rem' }}>
                      Discover the latest beauty trends perfect for your features
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button 
                  onClick={handleAppDownload}
                  disabled={isDownloading}
                  style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '18px 45px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: isDownloading ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                    opacity: isDownloading ? 0.8 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isDownloading) {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
                  }}>
                  {isDownloading ? (
                    <>
                      <LoadingSpinner size="sm" color="#fff" />
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      Download App for AI Beauty Test
                    </>
                  )}
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="position-relative"
            >
              {/* AI Visual Mockup */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(245, 87, 108, 0.05))',
                borderRadius: '30px',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                position: 'relative'
              }}>
                {/* Animated circles */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  opacity: 0.3,
                  animation: 'pulse 3s ease-in-out infinite'
                }} />
                
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                  opacity: 0.2,
                  animation: 'pulse 3s ease-in-out infinite 1s'
                }} />

                {/* Content */}
                <div className="text-center">
                  <div style={{
                    width: '120px',
                    height: '120px',
                    margin: '0 auto 30px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
                  }}>
                    <Brain size={60} color="white" />
                  </div>
                  
                  <h3 style={{ 
                    color: '#fff', 
                    fontSize: '2rem',
                    marginBottom: '20px',
                    fontWeight: '700'
                  }}>
                    AI Beauty Test
                  </h3>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
                    <div>
                      <div style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        98%
                      </div>
                      <div style={{ color: '#a8a8c8', fontSize: '0.9rem' }}>Accuracy</div>
                    </div>
                    <div>
                      <div style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        50K+
                      </div>
                      <div style={{ color: '#a8a8c8', fontSize: '0.9rem' }}>Users</div>
                    </div>
                    <div>
                      <div style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        5★
                      </div>
                      <div style={{ color: '#a8a8c8', fontSize: '0.9rem' }}>Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

export default AIBeautySection;