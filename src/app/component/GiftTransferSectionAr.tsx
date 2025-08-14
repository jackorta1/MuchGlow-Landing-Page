"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GiftTransferSectionAr = () => {
  const [activeCard, setActiveCard] = useState(0);

  const giftCardDesigns = [
    { id: 1, theme: 'ذهبي وردي', color: '#E8B4B8', pattern: 'floral' },
    { id: 2, theme: 'شامبانيا', color: '#F7E7CE', pattern: 'geometric' },
    { id: 3, theme: 'وردي فاتح', color: '#FFE5EC', pattern: 'abstract' },
    { id: 4, theme: 'بنفسجي عميق', color: '#6B3AA0', pattern: 'elegant' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % giftCardDesigns.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: '١',
      title: 'اختر الوجهة',
      description: 'اختر من الصالونات والمنتجعات والعيادات الفاخرة',
      icon: '🏰',
    },
    {
      number: '٢',
      title: 'خصص هديتك',
      description: 'حدد المبلغ واختر تصميم البطاقة الجميل',
      icon: '🎨',
    },
    {
      number: '٣',
      title: 'أرسل بحب',
      description: 'وصل الفرحة فوراً للأصدقاء والأحباء',
      icon: '💝',
    },
  ];

  return (
    <section className="gift-transfer-section rtl-section" id="gift-transfer">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">
            أضيء يوم أحدهم — أرسل هدية جمال فورية
          </h2>
          <p className="section-subtitle">
            أرسل تجارب الصالون والسبا والعيادة لأحبائك بضغطات قليلة.
          </p>
        </motion.div>

        {/* Main Visual Section */}
        <div className="row align-items-center mb-5">
          {/* Right Side - Happy Recipient (RTL) */}
          <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0 order-lg-2">
            <motion.div 
              className="recipient-visual"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="recipient-image-container">
                <div className="glow-effect"></div>
                <div className="recipient-placeholder">
                  <div className="happy-person">
                    <div className="person-icon">😊</div>
                    <div className="notification-bubble">
                      <span>🎁 لقد تلقيت هدية جمال!</span>
                    </div>
                  </div>
                  <div className="floating-hearts">
                    <span className="heart heart-1">💖</span>
                    <span className="heart heart-2">💕</span>
                    <span className="heart heart-3">✨</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Left Side - App Mockup (RTL) */}
          <div className="col-lg-6 col-md-6 col-12 order-lg-1">
            <motion.div 
              className="gift-mockup-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="gift-interface rtl">
                    <div className="gift-header">
                      <h4>أرسل هدية</h4>
                    </div>
                    <div className="gift-cards-preview">
                      {giftCardDesigns.map((card, index) => (
                        <motion.div
                          key={card.id}
                          className={`gift-card-mini ${activeCard === index ? 'active' : ''}`}
                          style={{ 
                            backgroundColor: card.color,
                            transform: `translateX(${(activeCard - index) * 30}px) scale(${activeCard === index ? 1.1 : 0.9})`,
                            opacity: activeCard === index ? 1 : 0.7,
                            zIndex: activeCard === index ? 10 : 1,
                          }}
                          animate={{
                            transform: `translateX(${(activeCard - index) * 30}px) scale(${activeCard === index ? 1.1 : 0.9})`,
                            opacity: activeCard === index ? 1 : 0.7,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="card-label">{card.theme}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="gift-amount">
                      <div className="amount-options">
                        <button className="amount-btn">١٠٠ درهم</button>
                        <button className="amount-btn active">٢٠٠ درهم</button>
                        <button className="amount-btn">٥٠٠ درهم</button>
                      </div>
                    </div>
                    <div className="recipient-input">
                      <input type="text" placeholder="اسم المستلم" />
                      <input type="text" placeholder="رقم الهاتف أو البريد الإلكتروني" />
                    </div>
                    <button className="send-gift-btn">أرسل الهدية الآن</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3 Steps Section */}
        <motion.div 
          className="steps-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="row">
            {steps.map((step, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-12 mb-4">
                <motion.div 
                  className="step-card"
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="step-number-container">
                    <span className="step-number">{step.number}</span>
                    <span className="step-icon">{step.icon}</span>
                  </div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="btn btn-primary btn-lg gift-cta-btn"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(231, 84, 129, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            أرسل هدية الآن
          </motion.button>
        </motion.div>

        {/* Gift Card Carousel Preview */}
        <motion.div 
          className="gift-cards-showcase mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-center mb-4 showcase-title">اختر من تصاميم بطاقات الهدايا الجميلة</p>
          <div className="cards-row">
            {giftCardDesigns.map((card, index) => (
              <motion.div
                key={card.id}
                className="showcase-card"
                style={{ backgroundColor: card.color }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: -5,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                <div className="card-inner">
                  <div className="card-pattern"></div>
                  <span className="card-theme-name">{card.theme}</span>
                  <div className="gift-amount-display">٢٠٠ درهم</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftTransferSectionAr;