'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Gift, Clock, Shield, CreditCard, Sparkles, Users, Download, ChevronRight, Check, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Heart, Calendar, Award, TrendingUp, Zap, Palette, UserCheck, Brain } from 'lucide-react';
import '../muchglow-premium.css';

const PremiumLanding = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      treatment: 'HydraFacial',
      rating: 5,
      review: 'MuchGlow transformed my skincare routine. The AI recommendations were spot-on!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      clinic: 'Glow Aesthetics Clinic'
    },
    {
      id: 2,
      name: 'Emily Chen',
      treatment: 'Laser Hair Removal',
      rating: 5,
      review: 'Booking was seamless, and the payment plan made it so affordable!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      clinic: 'Radiance Beauty Center'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      treatment: 'Microblading',
      rating: 5,
      review: 'The gift voucher feature is amazing! Sent a spa day to my best friend.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      clinic: 'Elite Beauty Studio'
    }
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
      {/* Navigation */}
      <nav className="premium-nav">
        <div className="premium-container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 0'
          }}>
            <div className="logo" style={{
              fontSize: '2rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: '700',
              background: 'var(--gradient-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              MuchGlow
            </div>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="#services" style={{ color: 'var(--color-charcoal)', textDecoration: 'none', fontWeight: '500' }}>Services</a>
              <a href="#how-it-works" style={{ color: 'var(--color-charcoal)', textDecoration: 'none', fontWeight: '500' }}>How It Works</a>
              <a href="#for-business" style={{ color: 'var(--color-charcoal)', textDecoration: 'none', fontWeight: '500' }}>For Business</a>
              <button className="btn-premium btn-primary">Download App</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Trust Badges Section */}
      <section style={{ padding: '3rem 0' }}>
        <div className="premium-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} style={{ color: 'var(--color-champagne-gold)' }} />
              <span>Verified Clinics</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={20} style={{ color: 'var(--color-champagne-gold)' }} />
              <span>4.9/5 Rating</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={20} style={{ color: 'var(--color-champagne-gold)' }} />
              <span>100K+ Users</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Beauty Analyzer Section */}
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
              <button className="btn-premium btn-primary">Try AI Analysis</button>
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

      {/* Gift & Gifting Hub */}
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

      {/* Top Services */}
      <section id="services" className="section-premium" style={{ background: 'var(--gradient-premium)' }}>
        <div className="premium-container">
          <div className="section-header">
            <div className="section-subtitle">Trending Now</div>
            <h2 className="section-title">Top Beauty Services</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {topServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card"
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                whileHover={{ y: -5 }}
              >
                {service.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'var(--gradient-gold)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    POPULAR
                  </div>
                )}
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h4>{service.name}</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{service.description}</p>
                <div style={{ color: 'var(--color-champagne-gold)', fontWeight: '600' }}>{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MuchGlow */}
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

      {/* How It Works */}
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

      {/* Installment Payments */}
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

      {/* Clinics & Salons Onboarding */}
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

      {/* Testimonials */}
      <section className="section-premium">
        <div className="premium-container">
          <div className="section-header">
            <div className="section-subtitle">Client Stories</div>
            <h2 className="section-title">Real Results, Real People</h2>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="premium-card" style={{ padding: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: 'var(--radius-full)',
                    marginRight: '1.5rem'
                  }}
                />
                <div>
                  <h4>{testimonials[activeTestimonial].name}</h4>
                  <p style={{ fontSize: '0.9rem' }}>{testimonials[activeTestimonial].treatment} at {testimonials[activeTestimonial].clinic}</p>
                  <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.5rem' }}>
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--color-champagne-gold)" style={{ color: 'var(--color-champagne-gold)' }} />
                    ))}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '2rem' }}>
                "{testimonials[activeTestimonial].review}"
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: 'var(--radius-full)',
                      border: 'none',
                      background: index === activeTestimonial ? 'var(--color-champagne-gold)' : 'var(--color-light-gray)',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
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

      {/* Footer */}
      <footer style={{ background: 'var(--color-charcoal)', color: 'white', padding: '4rem 0' }}>
        <div className="premium-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <h3 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>MuchGlow</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Your premium beauty and wellness booking platform.</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <Facebook size={20} style={{ cursor: 'pointer' }} />
                <Instagram size={20} style={{ cursor: 'pointer' }} />
                <Twitter size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About Us</a></li>
                <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Careers</a></li>
                <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Press</a></li>
                <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Help Center</a></li>
                <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact Us</a></li>
                <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacy Policy</a></li>
                <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Contact</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Mail size={16} />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>hello@muchglow.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Phone size={16} />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>+1 (555) 123-4567</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={16} />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>Dubai, UAE</span>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)'
          }}>
            <p>&copy; 2024 MuchGlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PremiumLanding;