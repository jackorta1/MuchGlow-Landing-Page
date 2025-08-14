"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Regular Client",
      image: "/gal1.jpg",
      rating: 5,
      content: "MuchGlow transformed how I book beauty services. The loyalty points are amazing - I've saved over AED 500 in just 3 months!",
      service: "Hair & Spa Treatments"
    },
    {
      id: 2,
      name: "Fatima Al-Rashid",
      role: "VIP Member",
      image: "/gal2.jpg",
      rating: 5,
      content: "The installment payment option with Tabby made it possible for me to get premium treatments without financial stress.",
      service: "Medical Aesthetics"
    },
    {
      id: 3,
      name: "Layla Hassan",
      role: "Beauty Enthusiast",
      image: "/gal3.jpg",
      rating: 5,
      content: "I love the at-home service option! Professional stylists come to my door, and the quality is consistently excellent.",
      service: "At-Home Services"
    }
  ];

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="luxury-heading mb-3" style={{ fontSize: 'var(--text-4xl)' }}>
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="subtitle" style={{ fontSize: 'var(--text-lg)', maxWidth: '600px', margin: '0 auto' }}>
            Join thousands of satisfied clients who've elevated their beauty routine with MuchGlow
          </p>
        </motion.div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="luxury-card h-100 position-relative">
                {/* Quote Icon */}
                <div className="position-absolute" style={{
                  top: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Quote size={20} color="white" />
                </div>

                {/* Rating */}
                <div className="mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-warning me-1" fill="currentColor" />
                  ))}
                </div>

                {/* Content */}
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: '24px',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.content}"
                </p>

                {/* Service Badge */}
                <div className="mb-4">
                  <span className="badge px-3 py-2" style={{
                    background: 'rgba(231, 84, 129, 0.1)',
                    color: 'var(--primary)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: '500'
                  }}>
                    {testimonial.service}
                  </span>
                </div>

                {/* Author */}
                <div className="d-flex align-items-center">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginRight: '12px',
                    border: '2px solid var(--primary-light)'
                  }}>
                    <Image
                      src={testimonial.image}
                      width={50}
                      height={50}
                      alt={testimonial.name}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </div>
                  <div>
                    <div style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: '600',
                      color: 'var(--text-primary)'
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-tertiary)'
                    }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <button className="btn-luxury">
            Read More Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;