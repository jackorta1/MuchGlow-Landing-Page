"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Activity, Shield, Clock, FileCheck, Award } from "lucide-react";

const ClinicServicesAr = () => {
  const services = [
    {
      icon: Sparkles,
      title: "البوتوكس والفيلر",
      description: "حقن تجميلية احترافية من ممارسين معتمدين",
      price: "من 1,500 درهم"
    },
    {
      icon: Activity,
      title: "علاجات الليزر",
      description: "علاج بالليزر المتقدم لتجديد البشرة",
      price: "من 2,000 درهم"
    },
    {
      icon: Shield,
      title: "التقشير الكيميائي",
      description: "تقشير طبي للحصول على بشرة مشرقة",
      price: "من 800 درهم"
    }
  ];

  const benefits = [
    {
      icon: FileCheck,
      title: "نماذج الموافقة الرقمية",
      description: "أكمل الأوراق عبر الإنترنت قبل زيارتك"
    },
    {
      icon: Clock,
      title: "التوفر في الوقت الفعلي",
      description: "احجز المواعيد مع الممارسين المعتمدين فوراً"
    },
    {
      icon: Award,
      title: "عيادات معتمدة فقط",
      description: "جميع العيادات الشريكة مرخصة ومؤمنة بالكامل"
    }
  ];

  return (
    <section className="clinic-section section-padding" style={{ background: 'var(--gradient-subtle)' }} dir="rtl">
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
              الطب التجميلي
            </span>
          </div>
          <h2 className="luxury-heading mb-3" style={{ fontSize: 'var(--text-4xl)' }}>
            الجمال الطبي
            <span className="gradient-text d-block">معاد تعريفه</span>
          </h2>
          <p className="subtitle" style={{ 
            fontSize: 'var(--text-lg)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            احصل على علاجات طبية تجميلية مميزة في عيادات معتمدة بأسعار شفافة وخيارات دفع مرنة
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
                لماذا تختار ماتش غلو
                <span className="gradient-text d-block">للجمال الطبي؟</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                لقد تعاونا مع أفضل العيادات التجميلية في المنطقة لنقدم لك علاجات آمنة 
                واحترافية مع شفافية كاملة وراحة تامة.
              </p>
              <button className="btn-luxury">
                استكشف جميع العلاجات
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
                        marginLeft: '16px',
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
            <Shield size={20} style={{ color: 'var(--deep-plum)', marginLeft: '8px' }} />
            <span style={{ 
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-sm)',
              fontWeight: '500'
            }}>
              جميع العلاجات تتم بواسطة متخصصين طبيين مرخصين
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClinicServicesAr;