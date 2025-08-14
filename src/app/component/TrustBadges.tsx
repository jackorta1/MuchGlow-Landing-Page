"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

const TrustBadges = () => {
  const stats = [
    { icon: Users, value: "50K+", label: "Happy Clients" },
    { icon: Award, value: "500+", label: "Partner Salons" },
    { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
    { icon: Shield, value: "100%", label: "Secure Payments" }
  ];

  return (
    <section className="trust-section py-5" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--neutral-100)',
      borderBottom: '1px solid var(--neutral-100)'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <h3 style={{
              fontSize: 'var(--text-lg)',
              fontWeight: '600',
              color: 'var(--text-tertiary)',
              letterSpacing: 'var(--tracking-wide)',
              marginBottom: 0
            }}>
              Trusted by Leading Brands
            </h3>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="row g-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="col-6 col-md-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="d-flex justify-content-center mb-2">
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'rgba(231, 84, 129, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <stat.icon size={24} style={{ color: 'var(--primary)' }} />
                      </div>
                    </div>
                    <div style={{
                      fontSize: 'var(--text-2xl)',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '4px'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-tertiary)'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;