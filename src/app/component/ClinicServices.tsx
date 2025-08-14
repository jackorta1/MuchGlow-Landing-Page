"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Activity, Shield, Clock, FileCheck, Award } from "lucide-react";

const ClinicServices = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Botox & Fillers",
      description: "Professional cosmetic injections by certified practitioners",
      price: "From AED 1,500"
    },
    {
      icon: Activity,
      title: "Laser Treatments",
      description: "Advanced laser therapy for skin rejuvenation",
      price: "From AED 2,000"
    },
    {
      icon: Shield,
      title: "Chemical Peels",
      description: "Medical-grade peels for radiant skin",
      price: "From AED 800"
    }
  ];

  const benefits = [
    {
      icon: FileCheck,
      title: "Digital Consent Forms",
      description: "Complete paperwork online before your visit"
    },
    {
      icon: Clock,
      title: "Real-time Availability",
      description: "Book appointments with certified practitioners instantly"
    },
    {
      icon: Award,
      title: "Certified Clinics Only",
      description: "All partner clinics are fully licensed and insured"
    }
  ];

  return (
    <section className="clinic-section section-padding" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <div className="mb-4">
            <span className="badge px-3 py-2" style={{
              background: 'rgba(107, 58, 160, 0.1)',
              color: 'var(--deep-plum)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-sm)',
              fontWeight: '600',
              letterSpacing: 'var(--tracking-wide)'
            }}>
              Medical Aesthetics
            </span>
          </div>
          <h2 className="luxury-heading mb-3" style={{ fontSize: 'var(--text-4xl)' }}>
            Clinical Beauty
            <span className="gradient-text d-block">Redefined</span>
          </h2>
          <p className="subtitle" style={{ 
            fontSize: 'var(--text-lg)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Access premium medical aesthetic treatments at certified clinics with transparent pricing and flexible payment options
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="row g-4 mb-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-card h-100 text-center">
                <div className="mx-auto mb-4" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'var(--gradient-luxury)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <service.icon size={36} color="white" />
                </div>
                <h4 className="mb-3" style={{ fontSize: 'var(--text-xl)' }}>
                  {service.title}
                </h4>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  marginBottom: '16px'
                }}>
                  {service.description}
                </p>
                <div className="pt-3" style={{ borderTop: '1px solid var(--neutral-100)' }}>
                  <span style={{ 
                    fontSize: 'var(--text-lg)',
                    fontWeight: '600',
                    color: 'var(--primary)'
                  }}>
                    {service.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="luxury-card"
          style={{ 
            background: 'white',
            padding: 'var(--space-3xl)'
          }}
        >
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h3 className="luxury-heading mb-4" style={{ fontSize: 'var(--text-3xl)' }}>
                Why Choose MuchGlow for
                <span className="gradient-text d-block">Clinical Beauty?</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                We've partnered with the region's top aesthetic clinics to bring you safe, 
                professional treatments with complete transparency and convenience.
              </p>
              <button className="btn-luxury">
                Explore All Treatments
              </button>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="col-md-12">
                    <div className="d-flex align-items-start">
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-lg)',
                        background: 'rgba(107, 58, 160, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px',
                        flexShrink: 0
                      }}>
                        <benefit.icon size={24} style={{ color: 'var(--deep-plum)' }} />
                      </div>
                      <div>
                        <h5 style={{ 
                          fontSize: 'var(--text-lg)',
                          fontWeight: '600',
                          marginBottom: '4px'
                        }}>
                          {benefit.title}
                        </h5>
                        <p style={{ 
                          fontSize: 'var(--text-base)',
                          color: 'var(--text-secondary)',
                          margin: 0
                        }}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Safety Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <div className="d-inline-flex align-items-center px-4 py-3" style={{
            background: 'rgba(107, 58, 160, 0.05)',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(107, 58, 160, 0.1)'
          }}>
            <Shield size={20} style={{ color: 'var(--deep-plum)', marginRight: '8px' }} />
            <span style={{ 
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-sm)',
              fontWeight: '500'
            }}>
              All treatments performed by licensed medical professionals
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClinicServices;