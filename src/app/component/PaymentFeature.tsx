"use client";
import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Calendar, Shield, Zap } from "lucide-react";
import Image from "next/image";

const PaymentFeature = () => {
  const features = [
    {
      icon: Calendar,
      title: "Split Payments",
      description: "Pay in 3-4 easy installments with no interest"
    },
    {
      icon: Zap,
      title: "Instant Approval",
      description: "Get approved in seconds, no paperwork needed"
    },
    {
      icon: Shield,
      title: "Secure & Protected",
      description: "Bank-level encryption for all transactions"
    }
  ];

  return (
    <section className="payment-section section-padding" style={{ background: 'var(--bg-accent)' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
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
                  <CreditCard size={14} className="me-1" />
                  Flexible Payments
                </span>
              </div>

              <h2 className="luxury-heading mb-4" style={{ fontSize: 'var(--text-4xl)' }}>
                Beauty Now,
                <span className="gradient-text d-block">Pay Later</span>
              </h2>

              <p className="subtitle mb-5" style={{ fontSize: 'var(--text-lg)' }}>
                Partner with Tabby and Tamara to make premium beauty services more accessible. 
                Split your payments into easy installments with zero interest.
              </p>

              <div className="row g-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="col-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="d-flex align-items-start">
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-lg)',
                        background: 'var(--gradient-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px',
                        flexShrink: 0
                      }}>
                        <feature.icon size={24} color="white" />
                      </div>
                      <div>
                        <h5 style={{ 
                          fontSize: 'var(--text-lg)',
                          fontWeight: '600',
                          marginBottom: '8px'
                        }}>
                          {feature.title}
                        </h5>
                        <p style={{ 
                          fontSize: 'var(--text-base)',
                          color: 'var(--text-secondary)',
                          margin: 0
                        }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Payment Partners */}
              <div className="mt-5">
                <p style={{ 
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                  marginBottom: '12px'
                }}>
                  Our Payment Partners:
                </p>
                <div className="d-flex gap-3 align-items-center">
                  <div className="px-4 py-2" style={{
                    background: 'white',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <span style={{ fontWeight: '700', fontSize: '20px', color: '#5B52F9' }}>tabby</span>
                  </div>
                  <div className="px-4 py-2" style={{
                    background: 'white',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <span style={{ fontWeight: '700', fontSize: '20px', color: '#FF5E5B' }}>tamara</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="position-relative"
            >
              {/* Payment Visual */}
              <div className="text-center">
                <div className="position-relative d-inline-block">
                  {/* Mock Payment Card */}
                  <div className="luxury-card" style={{
                    padding: 'var(--space-2xl)',
                    maxWidth: '400px',
                    margin: '0 auto'
                  }}>
                    <h4 className="mb-4">Your Treatment</h4>
                    <div className="mb-4 pb-4" style={{ borderBottom: '1px solid var(--neutral-100)' }}>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Luxury Facial Treatment</span>
                        <span style={{ fontWeight: '600' }}>AED 1,200</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Hair Styling Session</span>
                        <span style={{ fontWeight: '600' }}>AED 800</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-3">
                        <span style={{ fontWeight: '600' }}>Total</span>
                        <span style={{ fontSize: 'var(--text-2xl)', fontWeight: '700', color: 'var(--primary)' }}>
                          AED 2,000
                        </span>
                      </div>
                    </div>
                    <div className="p-3 mb-3" style={{
                      background: 'var(--gradient-subtle)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--primary-light)'
                    }}>
                      <div className="text-center mb-2">
                        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                          Or pay in 4 installments of
                        </span>
                      </div>
                      <div className="text-center">
                        <span style={{ fontSize: 'var(--text-3xl)', fontWeight: '700', color: 'var(--primary)' }}>
                          AED 500
                        </span>
                        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', marginLeft: '8px' }}>
                          /month
                        </span>
                      </div>
                    </div>
                    <button className="btn-luxury w-100">
                      Book & Pay Later
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFeature;