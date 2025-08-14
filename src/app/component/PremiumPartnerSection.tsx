"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Building2, User, Users, Phone, Mail, Globe, MapPin, Instagram, Sparkles, Check, Clock, TrendingUp } from 'lucide-react';

const PremiumPartnerSection = () => {
  const [formData, setFormData] = useState({
    salonName: "",
    phoneNumber: "",
    contactName: "",
    country: "",
    email: "",
    city: "",
    instaAccount: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const cleanPhoneNumber = formData.phoneNumber.replace(/[^\d+]/g, "");

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
        "https://api.muchglow.com/api/v1/salon/RegisterSalon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("🎉 Registration successful! We'll contact you within 24 hours.");
        setFormData({
          salonName: "",
          phoneNumber: "",
          contactName: "",
          country: "",
          email: "",
          city: "",
          instaAccount: "",
        });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: <TrendingUp size={24} />, text: "Increase revenue by 45%" },
    { icon: <Clock size={24} />, text: "Save 10+ hours weekly" },
    { icon: <Users size={24} />, text: "Access 100K+ customers" },
    { icon: <Sparkles size={24} />, text: "AI-powered insights" }
  ];

  return (
    <section id="partner" style={{
      background: 'linear-gradient(135deg, var(--color-soft-beige) 0%, var(--color-muted-blush) 100%)',
      padding: 'var(--spacing-2xl) 0'
    }}>
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <div className="section-subtitle" style={{ color: 'var(--color-champagne-gold)' }}>
              Partner Program
            </div>
            <h2 className="section-title" style={{ marginBottom: 'var(--spacing-md)' }}>
              Quick Registration
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-soft-gray)' }}>
              Join in 2 minutes, start earning today!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'start' }}>
            {/* Registration Form Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="premium-card"
              style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-lg)',
                boxShadow: 'var(--shadow-xl)',
                border: '2px solid var(--color-light-gray)'
              }}
            >
              <form onSubmit={handleSubmit}>
                {/* Business Name */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--color-charcoal)'
                  }}>
                    <Building2 size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                    Business Name*
                  </label>
                  <input
                    type="text"
                    name="salonName"
                    placeholder="Salon, clinic, or beauty center name"
                    value={formData.salonName}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--color-light-gray)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      transition: 'all 0.3s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-champagne-gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-light-gray)'}
                  />
                </div>

                {/* Contact Name */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--color-charcoal)'
                  }}>
                    <User size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                    Contact Name*
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Your name"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--color-light-gray)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      transition: 'all 0.3s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-champagne-gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-light-gray)'}
                  />
                </div>

                {/* Phone */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--color-charcoal)'
                  }}>
                    <Phone size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                    Phone*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="+971 XX XXX XXXX"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--color-light-gray)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      transition: 'all 0.3s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-champagne-gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-light-gray)'}
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--color-charcoal)'
                  }}>
                    <Mail size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@salon.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--color-light-gray)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      transition: 'all 0.3s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-champagne-gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-light-gray)'}
                  />
                </div>

                {/* Country and City Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  {/* Country */}
                  <div>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--color-charcoal)'
                    }}>
                      <Globe size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                      Country*
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid var(--color-light-gray)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '1rem',
                        transition: 'all 0.3s',
                        outline: 'none',
                        background: 'white',
                        cursor: 'pointer'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-champagne-gold)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-light-gray)'}
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

                  {/* City */}
                  <div>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--color-charcoal)'
                    }}>
                      <MapPin size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                      City*
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Dubai"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid var(--color-light-gray)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '1rem',
                        transition: 'all 0.3s',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-champagne-gold)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-light-gray)'}
                    />
                  </div>
                </div>

                {/* Instagram */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--color-charcoal)'
                  }}>
                    <Instagram size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                    Instagram
                  </label>
                  <input
                    type="text"
                    name="instaAccount"
                    placeholder="@yoursalon"
                    value={formData.instaAccount}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--color-light-gray)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      transition: 'all 0.3s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-champagne-gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-light-gray)'}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-premium btn-primary"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: isLoading ? 'wait' : 'pointer',
                    opacity: isLoading ? 0.7 : 1
                  }}
                >
                  {isLoading ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Complete Registration
                      <Sparkles size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Benefits Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Success Metrics Card */}
              <div className="premium-card" style={{
                background: 'var(--gradient-gold)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-lg)',
                color: 'white',
                marginBottom: 'var(--spacing-md)'
              }}>
                <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>
                  Why Partner with MuchGlow?
                </h3>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                    >
                      <div style={{
                        width: '50px',
                        height: '50px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: 'var(--radius-full)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {benefit.icon}
                      </div>
                      <span style={{ fontSize: '1.125rem', fontWeight: '500' }}>
                        {benefit.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="glass-card" style={{
                padding: 'var(--spacing-md)',
                background: 'rgba(255, 255, 255, 0.9)'
              }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
                  What You Get:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Zero commission for 3 months',
                    'Advanced booking system',
                    'Marketing support',
                    'Customer analytics',
                    '24/7 support team',
                    'Payment processing'
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: 'var(--color-charcoal)'
                    }}>
                      <Check size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div style={{
                textAlign: 'center',
                marginTop: 'var(--spacing-md)',
                padding: 'var(--spacing-md)',
                background: 'var(--color-soft-beige)',
                borderRadius: 'var(--radius-md)'
              }}>
                <p style={{ marginBottom: '0.5rem', color: 'var(--color-soft-gray)' }}>
                  Questions? Contact us at:
                </p>
                <a href="mailto:sales@muchglow.com" style={{
                  color: 'var(--color-champagne-gold)',
                  textDecoration: 'none',
                  fontSize: '1.125rem',
                  fontWeight: '600'
                }}>
                  sales@muchglow.com
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        toastStyle={{
          background: 'white',
          color: 'var(--color-charcoal)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)'
        }}
      />
    </section>
  );
};

export default PremiumPartnerSection;