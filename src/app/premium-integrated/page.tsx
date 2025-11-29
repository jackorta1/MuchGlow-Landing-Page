'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Gift, Shield, CreditCard, Sparkles, Download, ChevronRight, Check, Heart, Calendar, Award, TrendingUp, Brain } from 'lucide-react';
import Link from 'next/link';

// Import existing components
import NavbarSection from '../component/NavbarSection';
import UnifiedNavigation from '../component/UnifiedNavigation';
import PartnerHeroSection from '../component/PartnerHeroSection';
import TrustBadges from '../component/TrustBadges';
import AboutAppSection from '../component/AboutAppSection';
import FeatureSection from '../component/FeatureSection';
import PaymentFeature from '../component/PaymentFeature';
import ClinicServices from '../component/ClinicServices';
import SalonClients from '../component/SalonClients';
import TestimonialsSection from '../component/TestimonialsSection';
import AIBeautySection from '../component/AIBeautySection';
import GiftTransferSection from '../component/GiftTransferSection';
import GymFitnessSection from '../component/GymFitnessSection';
import AppShowcase from '../component/AppShowcase';
import GalleryySection from '../component/GalleryySection';
import PremiumPartnerSection from '../component/PremiumPartnerSection';
import AccordionData from '../component/AccordionData';
import FooterSection from '../component/FooterSection';

// Import styles
import '../muchglow-premium.css';
import '../premium-animations.css';
import '../gym-fitness.css';

const PremiumIntegratedLanding = () => {

  // Top Services Data
  const topServices = [
    { id: 1, name: 'Luxury Facials', icon: '✨', description: 'Rejuvenating treatments', price: 'From $120', popular: true },
    { id: 2, name: 'Botox & Fillers', icon: '💉', description: 'Anti-aging solutions', price: 'From $350' },
    { id: 3, name: 'Laser Therapy', icon: '🔬', description: 'Advanced skin treatment', price: 'From $200' },
    { id: 4, name: 'Microblading', icon: '👁️', description: 'Perfect eyebrows', price: 'From $450' },
    { id: 5, name: 'Body Sculpting', icon: '💪', description: 'Non-invasive contouring', price: 'From $300' },
    { id: 6, name: 'Luxury Massage', icon: '🌸', description: 'Full body relaxation', price: 'From $150' },
    { id: 7, name: 'Hair Coloring', icon: '🎨', description: 'Premium color services', price: 'From $180' },
    { id: 8, name: 'Gel Manicures', icon: '💅', description: 'Long-lasting beauty', price: 'From $65' }
  ];

  // Features Data
  const features = [
    { icon: <Calendar className="w-6 h-6" />, title: 'Book Anytime', description: '24/7 online booking at your fingertips' },
    { icon: <CreditCard className="w-6 h-6" />, title: 'Flexible Payments', description: 'Pay in installments with Tabby & Tamara' },
    { icon: <Brain className="w-6 h-6" />, title: 'AI Recommendations', description: 'Personalized treatment suggestions' },
    { icon: <Shield className="w-6 h-6" />, title: 'Verified Clinics', description: 'Only trusted and certified providers' },
    { icon: <Gift className="w-6 h-6" />, title: 'Gift Options', description: 'Send beauty treatments as gifts' },
    { icon: <Star className="w-6 h-6" />, title: 'Exclusive Offers', description: 'Members-only deals and discounts' }
  ];

  return (
    <div className="premium-landing">
      {/* Unified Navigation with Beauty/Fitness Toggle */}
      <UnifiedNavigation />
      
      {/* Add padding to account for fixed navigation */}
      <div style={{ paddingTop: '80px' }}>
        {/* Partner Hero Section from Original */}
        <PartnerHeroSection />


      {/* Original Trust Badges */}
      <TrustBadges />

      {/* Original About App Section */}
      <AboutAppSection />

      {/* Premium AI Beauty Analyzer Section */}
      <section className="section-premium" style={{ background: 'var(--color-soft-beige)' }}>
        <div className="premium-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="section-subtitle">AI-Powered Beauty</div>
              <h2 className="section-title">Test Your Face with AI</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
                Our advanced AI analyzes your skin health, identifies concerns, and recommends personalized treatments from our partner clinics. Get professional-grade skin analysis in seconds.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                {['Instant skin health analysis', 'Personalized treatment plans', 'Track your progress over time', 'Connect with specialized clinics'].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <Check size={20} style={{ color: 'var(--color-champagne-gold)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/ai-beauty">
                <button className="btn-premium btn-primary">Try AI Analysis</button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--gradient-premium)',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <Brain size={80} style={{ color: 'var(--color-champagne-gold)', marginBottom: '2rem' }} />
                <h3>AI Beauty Score</h3>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-champagne-gold)', margin: '1rem 0' }}>92/100</div>
                <p>Your personalized beauty insights are ready</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Original AI Beauty Section */}
      <AIBeautySection />

      {/* Original Feature Section */}
      <FeatureSection />

      {/* Premium Gift & Gifting Hub */}
      <section className="section-premium">
        <div className="premium-container">
          <div className="section-header">
            <div className="section-subtitle">Perfect Presents</div>
            <h2 className="section-title">Gift Beauty & Wellness</h2>
            <p className="section-description">
              Send the gift of self-care. Choose from spa days, beauty treatments, or custom gift cards. Delivered instantly via email or SMS.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { title: 'Spa Day Package', price: '$250', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop' },
              { title: 'Beauty Essentials', price: '$150', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop' },
              { title: 'Custom Gift Card', price: 'Any Amount', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop' }
            ].map((gift, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card"
                style={{ overflow: 'hidden', cursor: 'pointer' }}
              >
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${gift.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem'
                }} />
                <h4>{gift.title}</h4>
                <p style={{ color: 'var(--color-champagne-gold)', fontSize: '1.25rem', fontWeight: '600' }}>{gift.price}</p>
                <button className="btn-premium btn-rose" style={{ width: '100%', marginTop: '1rem' }}>
                  <Gift size={18} style={{ marginRight: '0.5rem', display: 'inline' }} />
                  Send as Gift
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Gift Transfer Section */}
      <GiftTransferSection />

      {/* Premium Top Services */}
      <section id="services" className="section-premium" style={{ 
        background: 'linear-gradient(135deg, #fef5f7 0%, #fff8fa 50%, #ffffff 100%)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(231, 84, 129, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.1, 0.06]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
        <div className="premium-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <motion.div 
              className="section-subtitle"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #E75481, #FF6B9D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '0.9rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '0.5rem'
              }}
            >
              <span style={{ marginRight: '10px' }}>✨</span>
              Trending Now
              <span style={{ marginLeft: '10px' }}>✨</span>
            </motion.div>
            <h2 className="section-title" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>Top Beauty Services</h2>
            <p style={{
              color: '#636e72',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover our most popular treatments loved by thousands of satisfied clients
            </p>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {topServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="service-card-premium"
                style={{
                  background: 'linear-gradient(145deg, #ffffff, #fafafa)',
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  border: '1px solid rgba(231, 84, 129, 0.08)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(231, 84, 129, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                onHoverStart={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  if (target) {
                    target.style.boxShadow = '0 20px 50px rgba(231, 84, 129, 0.3), 0 10px 20px rgba(255, 215, 0, 0.1)';
                    target.style.background = 'linear-gradient(145deg, #fff8fa, #fff0f4)';
                    target.style.borderColor = 'rgba(231, 84, 129, 0.25)';
                    target.style.transform = 'perspective(1000px)';
                  }
                }}
                onHoverEnd={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  if (target) {
                    target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(231, 84, 129, 0.08)';
                    target.style.background = 'linear-gradient(145deg, #ffffff, #fafafa)';
                    target.style.borderColor = 'rgba(231, 84, 129, 0.08)';
                    target.style.transform = 'perspective(1000px)';
                  }
                }}
              >
                {service.popular && (
                  <motion.div
                    animate={{ 
                      rotate: [-3, 3, -3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                      color: 'white',
                      padding: '0.4rem 1.2rem',
                      borderRadius: '25px',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      boxShadow: '0 6px 20px rgba(255, 215, 0, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      style={{ display: 'inline-block' }}
                    >⭐</motion.span>
                    POPULAR
                  </motion.div>
                )}
                <motion.div 
                  style={{ 
                    fontSize: '3.5rem', 
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(135deg, #E75481, #FF6B9D)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 3px 6px rgba(231, 84, 129, 0.25))',
                    display: 'inline-block',
                    position: 'relative'
                  }}
                  animate={{ 
                    scale: [1, 1.15, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  {service.icon}
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: '-10px',
                      background: 'radial-gradient(circle, rgba(231, 84, 129, 0.1) 0%, transparent 70%)',
                      borderRadius: '50%',
                      zIndex: -1
                    }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#2d3436',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-heading)'
                }}>{service.name}</h4>
                <p style={{ 
                  fontSize: '0.95rem', 
                  marginBottom: '1.25rem',
                  color: '#636e72',
                  lineHeight: '1.5'
                }}>{service.description}</p>
                <motion.div 
                  style={{ 
                    background: 'linear-gradient(135deg, #E75481, #FF6B9D)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '700',
                    fontSize: '1.15rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.span 
                    style={{ fontSize: '0.95rem' }}
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  >💰</motion.span>
                  {service.price}
                </motion.div>
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #E75481, #FF6B9D, #E75481)',
                    transformOrigin: 'left',
                    scaleX: 0
                  }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Payment Feature */}
      <PaymentFeature />

      {/* New Gym & Fitness Section */}
      <GymFitnessSection />

      {/* Original Clinic Services */}
      <ClinicServices />

      {/* Premium Why Choose MuchGlow */}
      <section className="section-premium">
        <div className="premium-container">
          <div className="section-header">
            <div className="section-subtitle">Why MuchGlow</div>
            <h2 className="section-title">The Premium Choice for Beauty Booking</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', padding: '2rem' }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  background: 'var(--gradient-gold)',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Salon Clients */}
      <SalonClients />

      {/* Premium How It Works */}
      <section id="how-it-works" className="section-premium" style={{ background: 'var(--color-soft-beige)' }}>
        <div className="premium-container">
          <div className="section-header">
            <div className="section-subtitle">Simple Process</div>
            <h2 className="section-title">How It Works</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', position: 'relative' }}>
            {[
              { step: '01', title: 'Discover', description: 'Browse treatments and find verified clinics near you', icon: <Search size={40} /> },
              { step: '02', title: 'Book', description: 'Choose your preferred time and secure your appointment', icon: <Calendar size={40} /> },
              { step: '03', title: 'Glow', description: 'Enjoy your treatment and feel your absolute best', icon: <Sparkles size={40} /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', position: 'relative' }}
              >
                <div style={{
                  width: '120px',
                  height: '120px',
                  margin: '0 auto 2rem',
                  background: 'white',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-lg)',
                  position: 'relative'
                }}>
                  <div style={{ color: 'var(--color-champagne-gold)' }}>{item.icon}</div>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    background: 'var(--gradient-gold)',
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '1.125rem'
                  }}>
                    {item.step}
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {index < 2 && (
                  <ChevronRight size={30} style={{
                    position: 'absolute',
                    right: '-2rem',
                    top: '60px',
                    color: 'var(--color-champagne-gold)'
                  }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Testimonials */}
      <TestimonialsSection />

      {/* Premium Installment Payments */}
      <section className="section-premium">
        <div className="premium-container">
          <div style={{ background: 'var(--gradient-gold)', borderRadius: 'var(--radius-lg)', padding: '4rem', color: 'white', textAlign: 'center' }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Pay Your Way</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem', color: 'white' }}>
              Split your payments with Tabby & Tamara. Pay half now, half later with zero interest.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              <div style={{ background: 'white', padding: '2rem 3rem', borderRadius: 'var(--radius-md)', color: 'var(--color-charcoal)' }}>
                <h3 style={{ color: 'var(--color-charcoal)' }}>Tabby</h3>
                <p>Split in 4 payments</p>
              </div>
              <div style={{ background: 'white', padding: '2rem 3rem', borderRadius: 'var(--radius-md)', color: 'var(--color-charcoal)' }}>
                <h3 style={{ color: 'var(--color-charcoal)' }}>Tamara</h3>
                <p>Pay in 3 installments</p>
              </div>
            </div>
            <button className="btn-premium btn-secondary" style={{ marginTop: '2rem' }}>
              Learn More About Payment Options
            </button>
          </div>
        </div>
      </section>

      {/* Original App Showcase */}
      <AppShowcase />

      {/* Premium App Download Section */}
      <section className="section-premium" style={{ background: 'var(--gradient-premium)' }}>
        <div className="premium-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Beauty at Your Fingertips</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
                Download the MuchGlow app for the ultimate booking experience. Available on iOS and Android.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <button className="btn-premium btn-primary">
                  <Download size={18} style={{ marginRight: '0.5rem', display: 'inline' }} />
                  App Store
                </button>
                <button className="btn-premium btn-primary">
                  <Download size={18} style={{ marginRight: '0.5rem', display: 'inline' }} />
                  Google Play
                </button>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: 'var(--radius-md)', display: 'inline-block' }}>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>Scan to download:</p>
                <div style={{ width: '150px', height: '150px', background: 'var(--color-light-gray)', borderRadius: 'var(--radius-sm)' }}>
                  {/* QR Code Placeholder */}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <div style={{
                width: '300px',
                height: '600px',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                borderRadius: '40px',
                margin: '0 auto',
                padding: '20px',
                boxShadow: 'var(--shadow-xl)'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'url("https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=300&h=600&fit=crop")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '30px'
                }} />
              </div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '50px',
                  right: '-20px',
                  background: 'white',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <Heart size={30} style={{ color: 'var(--color-rose-gold)' }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Original Gallery Section */}
      <GalleryySection />

      {/* Premium Partner Registration Section */}
      <PremiumPartnerSection />

      {/* Premium Clinics & Salons Onboarding */}
      <section id="for-business" className="section-premium" style={{ background: 'var(--color-soft-beige)' }}>
        <div className="premium-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="section-subtitle">For Business Owners</div>
              <h2 className="section-title">Join MuchGlow as a Partner</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
                Expand your reach, manage bookings effortlessly, and grow your beauty business with our premium platform.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                {['Zero commission for first 3 months', 'Advanced booking management system', 'AI-powered customer insights', 'Marketing tools and promotions', 'Secure payment processing'].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <Award size={20} style={{ color: 'var(--color-champagne-gold)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-premium btn-primary" style={{ marginRight: '1rem' }}>Become a Partner</button>
              <button className="btn-premium btn-secondary">Learn More</button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="premium-card" style={{ padding: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <TrendingUp size={60} style={{ color: 'var(--color-champagne-gold)' }} />
                </div>
                <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Partner Success Stats</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-champagne-gold)' }}>45%</div>
                    <p>Revenue Increase</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-champagne-gold)' }}>3x</div>
                    <p>More Bookings</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-champagne-gold)' }}>98%</div>
                    <p>Satisfaction Rate</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-champagne-gold)' }}>24/7</div>
                    <p>Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Original Accordion/FAQ */}
      <AccordionData />

      {/* Original Footer */}
      <FooterSection />
      </div>
    </div>
  );
};

export default PremiumIntegratedLanding;