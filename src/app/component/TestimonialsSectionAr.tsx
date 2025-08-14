"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const TestimonialsSectionAr = () => {
  const testimonials = [
    {
      id: 1,
      name: "سارة أحمد",
      role: "عميلة دائمة",
      image: "/gal1.jpg",
      rating: 5,
      content: "ماتش غلو غيّر طريقة حجزي لخدمات الجمال. نقاط الولاء رائعة - وفرت أكثر من 500 درهم في 3 شهور فقط!",
      service: "علاجات الشعر والسبا"
    },
    {
      id: 2,
      name: "فاطمة الراشد",
      role: "عضو VIP",
      image: "/gal2.jpg",
      rating: 5,
      content: "خيار الدفع بالتقسيط مع تابي جعل من الممكن لي الحصول على علاجات مميزة دون ضغط مالي.",
      service: "الطب التجميلي"
    },
    {
      id: 3,
      name: "ليلى حسن",
      role: "عاشقة الجمال",
      image: "/gal3.jpg",
      rating: 5,
      content: "أحب خيار الخدمة المنزلية! مصففون محترفون يأتون إلى بابي، والجودة ممتازة باستمرار.",
      service: "الخدمات المنزلية"
    }
  ];

  return (
    <section className="testimonials-section section-padding" dir="rtl">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="luxury-heading mb-3" style={{ fontSize: 'var(--text-4xl)' }}>
            قصص نجاح <span className="gradient-text">العملاء</span>
          </h2>
          <p className="subtitle" style={{ fontSize: 'var(--text-lg)', maxWidth: '600px', margin: '0 auto' }}>
            انضم إلى آلاف العملاء الراضين الذين ارتقوا بروتين جمالهم مع ماتش غلو
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
                  left: '20px',
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
                    <Star key={i} size={18} className="text-warning ms-1" fill="currentColor" />
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
                    marginLeft: '12px',
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
            اقرأ المزيد من التقييمات
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSectionAr;