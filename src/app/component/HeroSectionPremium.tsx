"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import Button from "react-bootstrap/Button";
import LoadingSpinner from "./LoadingSpinner";

const HeroSectionPremium = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = async () => {
    setIsLoading(true);
    
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
        alert("Please open this link on your phone to download the app.");
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("Something went wrong. Please try again.");
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

  const slideInRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="hero-section position-relative overflow-hidden" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-accent) 100%)',
      paddingTop: '80px'
    }}>
      {/* Subtle animated background */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
        <div className="position-absolute" style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(231, 84, 129, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '10%',
          right: '10%',
          animation: 'float 20s ease-in-out infinite'
        }} />
        <div className="position-absolute" style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(232, 180, 184, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          bottom: '20%',
          left: '5%',
          animation: 'float 15s ease-in-out infinite reverse'
        }} />
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center min-vh-100" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
          {/* Left Content */}
          <div className="col-lg-6 col-md-12">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Trust Badge */}
              <div className="d-inline-block mb-4">
                <span className="badge px-3 py-2" style={{
                  background: 'rgba(231, 84, 129, 0.1)',
                  color: 'var(--primary)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  letterSpacing: 'var(--tracking-wide)'
                }}>
                  <Sparkles size={14} className="me-1" />
                  Trusted by 10,000+ Beauty Professionals
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="luxury-heading mb-4" style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '1.2'
              }}>
                Elevate Your
                <span className="gradient-text d-block">Beauty Experience</span>
              </h1>

              {/* Subtitle */}
              <p className="subtitle mb-4" style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '500px'
              }}>
                Discover premium salons, book instantly, and earn exclusive rewards with every visit. Your journey to effortless beauty starts here.
              </p>

              {/* Feature List */}
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-5"
              >
                <div className="d-flex align-items-center mb-3">
                  <CheckCircle size={20} className="text-success me-3" />
                  <span style={{ color: 'var(--text-secondary)' }}>Real-time availability at top-rated salons</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <CheckCircle size={20} className="text-success me-3" />
                  <span style={{ color: 'var(--text-secondary)' }}>Flexible payment with Tabby & Tamara</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <CheckCircle size={20} className="text-success me-3" />
                  <span style={{ color: 'var(--text-secondary)' }}>Earn points worth real cash rewards</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="d-flex flex-wrap gap-3"
              >
                <button
                  className="btn-luxury d-flex align-items-center"
                  onClick={handleDownload}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner size="sm" color="#fff" />
                      <span className="ms-2">Loading...</span>
                    </>
                  ) : (
                    <>
                      Download App
                      <ArrowRight size={18} className="ms-2" />
                    </>
                  )}
                </button>
                <button className="btn-luxury-outline">
                  View All Services
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="col-lg-6 col-md-12">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={slideInRight}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="position-relative"
            >
              {/* Main App Image */}
              <div className="text-center position-relative">
                <Image
                  src="/bnrvec.png"
                  width={500}
                  height={532}
                  className="img-fluid"
                  alt="MuchGlow mobile app interface"
                  priority
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))'
                  }}
                />

                {/* Floating Card - Loyalty Points */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="position-absolute"
                  style={{
                    bottom: '20%',
                    left: '-10%',
                    zIndex: 2
                  }}
                >
                  <div className="luxury-card" style={{
                    padding: 'var(--space-lg)',
                    minWidth: '220px',
                    background: 'rgba(255, 255, 255, 0.98)'
                  }}>
                    <div className="d-flex align-items-center mb-2">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'var(--gradient-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '12px'
                      }}>
                        <Star size={20} color="white" fill="white" />
                      </div>
                      <div>
                        <div style={{ 
                          fontSize: 'var(--text-xs)',
                          color: 'var(--text-tertiary)',
                          letterSpacing: 'var(--tracking-wide)'
                        }}>
                          Welcome Bonus
                        </div>
                        <div style={{ 
                          fontSize: 'var(--text-xl)',
                          fontWeight: '700',
                          color: 'var(--primary)'
                        }}>
                          +500 Points
                        </div>
                      </div>
                    </div>
                    <p style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      Start earning from your first booking
                    </p>
                  </div>
                </motion.div>

                {/* Floating Badge - Rating */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="position-absolute"
                  style={{
                    top: '15%',
                    right: '-5%',
                    zIndex: 2
                  }}
                >
                  <div className="glass-card" style={{
                    padding: 'var(--space-md)',
                    borderRadius: 'var(--radius-lg)'
                  }}>
                    <div className="d-flex align-items-center">
                      <Star size={18} className="text-warning me-1" fill="currentColor" />
                      <span style={{ fontWeight: '600' }}>4.9</span>
                      <span style={{ 
                        color: 'var(--text-tertiary)',
                        fontSize: 'var(--text-sm)',
                        marginLeft: '4px'
                      }}>
                        (2.5k reviews)
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSectionPremium;