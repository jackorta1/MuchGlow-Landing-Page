"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PartnerHeroSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    salonName: '',
    phoneNumber: '',
    contactName: '',
    country: '',
    email: '',
    city: '',
    instaAccount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const cleanPhoneNumber = formData.phoneNumber.replace(/[^\d+]/g, '');
    
    const payload = {
      salonName: formData.salonName,
      phoneNumber: cleanPhoneNumber,
      contactName: formData.contactName,
      country: formData.country,
      email: formData.email || undefined,
      city: formData.city,
      instaAccount: formData.instaAccount || null,
    };

    try {
      const response = await fetch(
        'https://api.muchglow.com/api/v1/salon/RegisterSalon',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success('🎉 Welcome aboard! We\'ll contact you within 24 hours');
        setFormData({
          salonName: '',
          phoneNumber: '',
          contactName: '',
          country: '',
          email: '',
          city: '',
          instaAccount: '',
        });
        setIsFormVisible(false);
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const benefits = [
    { 
      icon: '💰', 
      title: 'Boost Revenue',
      description: 'Increase earnings by up to 40%',
      color: '#FFD700'
    },
    { 
      icon: '👥', 
      title: '50,000+ Clients',
      description: 'Access our growing user base',
      color: '#FF69B4'
    },
    { 
      icon: '📱', 
      title: 'Digital Tools',
      description: 'Free management system',
      color: '#87CEEB'
    },
    { 
      icon: '⭐', 
      title: 'Premium Support',
      description: '24/7 marketing assistance',
      color: '#DDA0DD'
    },
  ];

  return (
    <section className="partner-hero-full">
      <div className="partner-hero-container">
        {/* Background Elements */}
        <div className="hero-bg-gradient"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Content */}
            <div className="col-lg-6 col-12">
              <motion.div 
                className="hero-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className="hero-badge"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="badge-icon">🔥</span>
                  <span>LIMITED TIME OFFER</span>
                </motion.div>

                <h1 className="hero-title">
                  <span className="gradient-text">Transform Your Business</span>
                  <br />
                  Join MuchGlow Today!
                </h1>

                <p className="hero-description">
                  Partner with the UAE's fastest-growing beauty platform. 
                  Get instant access to thousands of clients and revolutionary digital tools.
                </p>

                {/* Benefits Grid */}
                <div className="benefits-grid-hero">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="benefit-card-hero"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                      <div 
                        className="benefit-icon-hero"
                        style={{ background: `${benefit.color}20` }}
                      >
                        {benefit.icon}
                      </div>
                      <div className="benefit-content">
                        <h4>{benefit.title}</h4>
                        <p>{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="hero-cta-group">
                  <motion.button
                    className="btn-primary-hero"
                    onClick={() => setIsFormVisible(!isFormVisible)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Start Partnership Now</span>
                    <span className="btn-arrow">→</span>
                    <span style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      background: '#FFD700',
                      color: '#E75481',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      animation: 'bounce 2s infinite',
                      boxShadow: '0 2px 8px rgba(255, 215, 0, 0.5)'
                    }}>✨</span>
                  </motion.button>
                  <a href="mailto:sales@muchglow.com" className="btn-secondary-hero">
                    <span>Contact Sales</span>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="trust-indicators">
                  <div className="indicator">
                    <span className="indicator-number">500+</span>
                    <span className="indicator-label">Partner Businesses</span>
                  </div>
                  <div className="indicator-divider"></div>
                  <div className="indicator">
                    <span className="indicator-number">4.8⭐</span>
                    <span className="indicator-label">App Rating</span>
                  </div>
                  <div className="indicator-divider"></div>
                  <div className="indicator">
                    <span className="indicator-number">98%</span>
                    <span className="indicator-label">Partner Satisfaction</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Form or Visual */}
            <div className="col-lg-6 col-12">
              <motion.div 
                className="hero-form-container"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {isFormVisible ? (
                  <motion.div 
                    className="partner-form-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="form-header">
                      <h3>Quick Registration</h3>
                      <p>Join in 2 minutes, start earning today!</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="quick-form">
                      <div className="form-row">
                        <div className="form-field">
                          <label>
                            <span className="field-icon">🏪</span>
                            Business Name*
                          </label>
                          <input
                            type="text"
                            name="salonName"
                            placeholder="Salon, clinic, or beauty center name"
                            value={formData.salonName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-field">
                          <label>
                            <span className="field-icon">👤</span>
                            Contact Name*
                          </label>
                          <input
                            type="text"
                            name="contactName"
                            placeholder="Your name"
                            value={formData.contactName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-field">
                          <label>
                            <span className="field-icon">📱</span>
                            Phone*
                          </label>
                          <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="+971 XX XXX XXXX"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-field">
                          <label>
                            <span className="field-icon">✉️</span>
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="email@salon.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-field">
                          <label>
                            <span className="field-icon">🌍</span>
                            Country*
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select</option>
                            <option value="UAE">UAE</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Oman">Oman</option>
                          </select>
                        </div>
                        <div className="form-field">
                          <label>
                            <span className="field-icon">🏙️</span>
                            City*
                          </label>
                          <input
                            type="text"
                            name="city"
                            placeholder="Dubai"
                            value={formData.city}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-field full-width">
                        <label>
                          <span className="field-icon">📸</span>
                          Instagram
                        </label>
                        <input
                          type="text"
                          name="instaAccount"
                          placeholder="@yoursalon"
                          value={formData.instaAccount}
                          onChange={handleChange}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        className="submit-btn-hero"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Complete Registration</span>
                        <span className="btn-icon">🚀</span>
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="hero-visual"
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="visual-card">
                      <div className="card-glow"></div>
                      <div className="card-content">
                        <div className="stat-showcase">
                          <motion.div 
                            className="stat-item-hero"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <span className="stat-icon">💎</span>
                            <span className="stat-value">Zero</span>
                            <span className="stat-label">Commission First Month</span>
                          </motion.div>
                        </div>
                        
                        <div className="feature-list">
                          <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>Free Digital Marketing</span>
                          </div>
                          <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>Instant Client Access</span>
                          </div>
                          <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>Advanced Analytics</span>
                          </div>
                          <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>Priority Support 24/7</span>
                          </div>
                        </div>

                        <div className="promo-text">
                          <p className="promo-title">🎁 Special Offer</p>
                          <p className="promo-desc">Join now and get premium features free for 3 months!</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default PartnerHeroSection;