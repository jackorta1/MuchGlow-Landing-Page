"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PartnerHeroSectionAr = () => {
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
        toast.success('🎉 أهلاً بك! سنتواصل معك خلال 24 ساعة');
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
        toast.error(data.message || 'حدث خطأ ما.');
      }
    } catch {
      toast.error('حدث خطأ ما. يرجى المحاولة مرة أخرى.');
    }
  };

  const benefits = [
    { 
      icon: '💰', 
      title: 'زيادة الإيرادات',
      description: 'ارفع أرباحك حتى 40%',
      color: '#FFD700'
    },
    { 
      icon: '👥', 
      title: 'أكثر من 50 ألف عميل',
      description: 'الوصول لقاعدة عملائنا المتنامية',
      color: '#FF69B4'
    },
    { 
      icon: '📱', 
      title: 'أدوات رقمية',
      description: 'نظام إدارة مجاني',
      color: '#87CEEB'
    },
    { 
      icon: '⭐', 
      title: 'دعم متميز',
      description: 'مساعدة تسويقية على مدار الساعة',
      color: '#DDA0DD'
    },
  ];

  return (
    <section className="partner-hero-full rtl">
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
            {/* Right Side - Content (RTL) */}
            <div className="col-lg-6 col-12 order-lg-2">
              <motion.div 
                className="hero-content"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className="hero-badge"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="badge-icon">🔥</span>
                  <span>عرض لفترة محدودة</span>
                </motion.div>

                <h1 className="hero-title">
                  <span className="gradient-text">حوّل أعمالك</span>
                  <br />
                  انضم لماتش غلو اليوم!
                </h1>

                <p className="hero-description">
                  كن شريكاً مع أسرع منصة جمال نمواً في الإمارات.
                  احصل على وصول فوري لآلاف العملاء وأدوات رقمية ثورية.
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
                      whileHover={{ scale: 1.05, rotate: -2 }}
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
                    <span>ابدأ الشراكة الآن</span>
                    <span className="btn-arrow">←</span>
                  </motion.button>
                  <a href="mailto:sales@muchglow.com" className="btn-secondary-hero">
                    <span>تواصل مع المبيعات</span>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="trust-indicators">
                  <div className="indicator">
                    <span className="indicator-number">500+</span>
                    <span className="indicator-label">منشأة شريكة</span>
                  </div>
                  <div className="indicator-divider"></div>
                  <div className="indicator">
                    <span className="indicator-number">4.8⭐</span>
                    <span className="indicator-label">تقييم التطبيق</span>
                  </div>
                  <div className="indicator-divider"></div>
                  <div className="indicator">
                    <span className="indicator-number">98%</span>
                    <span className="indicator-label">رضا الشركاء</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Left Side - Form or Visual (RTL) */}
            <div className="col-lg-6 col-12 order-lg-1">
              <motion.div 
                className="hero-form-container"
                initial={{ opacity: 0, x: -50 }}
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
                      <h3>تسجيل سريع</h3>
                      <p>انضم في دقيقتين، ابدأ الكسب اليوم!</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="quick-form">
                      <div className="form-row">
                        <div className="form-field">
                          <label>
                            <span className="field-icon">🏪</span>
                            اسم المنشأة*
                          </label>
                          <input
                            type="text"
                            name="salonName"
                            placeholder="صالون، عيادة، أو مركز تجميل"
                            value={formData.salonName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-field">
                          <label>
                            <span className="field-icon">👤</span>
                            اسم المسؤول*
                          </label>
                          <input
                            type="text"
                            name="contactName"
                            placeholder="اسمك"
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
                            الهاتف*
                          </label>
                          <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="+971 XX XXX XXXX"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            dir="ltr"
                          />
                        </div>
                        <div className="form-field">
                          <label>
                            <span className="field-icon">✉️</span>
                            البريد الإلكتروني
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="email@salon.com"
                            value={formData.email}
                            onChange={handleChange}
                            dir="ltr"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-field">
                          <label>
                            <span className="field-icon">🌍</span>
                            الدولة*
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                          >
                            <option value="">اختر</option>
                            <option value="UAE">الإمارات</option>
                            <option value="Saudi Arabia">السعودية</option>
                            <option value="Kuwait">الكويت</option>
                            <option value="Qatar">قطر</option>
                            <option value="Bahrain">البحرين</option>
                            <option value="Oman">عمان</option>
                          </select>
                        </div>
                        <div className="form-field">
                          <label>
                            <span className="field-icon">🏙️</span>
                            المدينة*
                          </label>
                          <input
                            type="text"
                            name="city"
                            placeholder="دبي"
                            value={formData.city}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-field full-width">
                        <label>
                          <span className="field-icon">📸</span>
                          انستغرام
                        </label>
                        <input
                          type="text"
                          name="instaAccount"
                          placeholder="@yoursalon"
                          value={formData.instaAccount}
                          onChange={handleChange}
                          dir="ltr"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        className="submit-btn-hero"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>أكمل التسجيل</span>
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
                            <span className="stat-value">بدون</span>
                            <span className="stat-label">عمولة الشهر الأول</span>
                          </motion.div>
                        </div>
                        
                        <div className="feature-list">
                          <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>تسويق رقمي مجاني</span>
                          </div>
                          <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>وصول فوري للعملاء</span>
                          </div>
                          <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>تحليلات متقدمة</span>
                          </div>
                          <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>دعم أولوية 24/7</span>
                          </div>
                        </div>

                        <div className="promo-text">
                          <p className="promo-title">🎁 عرض خاص</p>
                          <p className="promo-desc">انضم الآن واحصل على ميزات مميزة مجاناً لمدة 3 أشهر!</p>
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
        rtl={true}
      />
    </section>
  );
};

export default PartnerHeroSectionAr;