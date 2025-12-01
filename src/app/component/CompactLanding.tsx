'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Globe,
  Sparkles, Gift, Shield, CreditCard, Clock, Star,
  Search, Calendar, CheckCircle,
  Instagram, Linkedin, Mail, Phone, MapPin,
  ChevronUp, Send, ArrowRight, MessageCircle, Quote
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MuchGlowLogo from '../../../public/muchglow.png';

interface CompactLandingProps {
  lang?: 'en' | 'ar';
}

const CompactLanding: React.FC<CompactLandingProps> = ({ lang = 'en' }) => {
  const isRTL = lang === 'ar';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    businessType: '',
    message: ''
  });

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setIsScrolled(window.scrollY > 50);

      // Detect active section for nav highlight
      const sections = ['services', 'gift', 'how-it-works', 'partner'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Content translations
  const content = {
    en: {
      nav: {
        services: 'Services',
        howItWorks: 'How It Works',
        partners: 'Partners',
        contact: 'Contact'
      },
      hero: {
        badge: 'Your Smart Platform for Beauty and Health',
        title: 'MuchGlow —',
        titleHighlight: 'Beauty & Health Services',
        subtitle: 'Book appointments, send digital gifts, discover clinics and salons, and enjoy modern, secure payments.',
        ctaPrimary: 'Download App',
        ctaSecondary: 'Be a Partner',
        paymentLabel: 'Supported Payments:'
      },
      services: {
        label: 'Key Features',
        title: 'What We Offer',
        subtitle: 'Multi-category platform: Beauty, Health, Fitness',
        items: [
          { icon: '🎁', title: 'Digital Gift Cards', desc: 'Send instant gifts to loved ones' },
          { icon: '💇', title: 'Salon & Beauty Services', desc: 'Book at premium beauty salons' },
          { icon: '🏥', title: 'Medical & Wellness Clinics', desc: 'Trusted medical & aesthetic services' },
          { icon: '💪', title: 'Fitness & Sports Centers', desc: 'Gym memberships & personal training' },
          { icon: '🔍', title: 'Smart Product Image Search', desc: 'AI-powered visual search technology' },
          { icon: '🤖', title: 'AI Face Analysis', desc: 'Personalized beauty recommendations' }
        ]
      },
      whyUs: {
        label: 'Why MuchGlow',
        title: 'Why Choose Us',
        items: [
          { icon: <Clock size={28} />, title: 'Fast and Easy Booking', desc: 'Book in seconds, anytime' },
          { icon: <Shield size={28} />, title: 'Secure Online Payments', desc: 'Safe & protected transactions' },
          { icon: <Star size={28} />, title: 'Trusted Clinics & Salons', desc: 'Verified & quality partners' },
          { icon: <Sparkles size={28} />, title: 'Smart AI Features', desc: 'Powered by artificial intelligence' }
        ]
      },
      howItWorks: {
        label: 'Simple Process',
        title: 'How It Works',
        steps: [
          { num: '1', title: 'Discover Services', desc: 'Browse salons, clinics & fitness centers' },
          { num: '2', title: 'Select Your Appointment', desc: 'Choose your preferred time & service' },
          { num: '3', title: 'Enjoy Your Experience', desc: 'Arrive and enjoy premium service' }
        ]
      },
      payment: {
        title: 'Flexible Payments',
        subtitle: 'Split payments with zero interest using our supported payment partners.',
        tabby: 'Tabby (Coming Soon)',
        tamara: 'Tamara (Live)',
        stripe: 'Stripe (Live)'
      },
      gift: {
        title: "Make Someone's Day",
        subtitle: 'Send a Digital Gift Instantly',
        description: 'Send salon, clinic, spa, gym, or fitness experiences to your loved ones in just a few taps.',
        steps: [
          { num: '1', icon: '🏰', title: 'Pick a Destination', desc: 'Choose from premium salons, clinics, gyms, spas & fitness centers' },
          { num: '2', icon: '🎨', title: 'Customize Your Gift', desc: 'Select amount and pick a beautiful card theme' },
          { num: '3', icon: '💝', title: 'Send with Love', desc: 'Instantly deliver joy to friends and loved ones' }
        ],
        amounts: ['100 AED', '200 AED', '500 AED'],
        recipientName: "Recipient's name",
        recipientContact: 'Phone or email',
        sendButton: 'Send Gift Now',
        cta: 'Send a Gift Now',
        cardThemes: ['Ocean Teal', 'Champagne', 'Royal Gold', 'Deep Navy']
      },
      partner: {
        label: 'Grow Your Business',
        title: 'Become a Partner',
        subtitle: 'Join clinics, salons, and fitness providers who use our platform to reach more customers',
        benefits: [
          'Access 50,000+ active users',
          'Zero commission first 3 months',
          'Free digital marketing tools',
          'Advanced booking management',
          '24/7 dedicated support'
        ],
        formTitle: 'Partner Registration',
        fields: {
          companyName: 'Business Name',
          contactPerson: 'Contact Name',
          email: 'Email',
          phone: 'Phone',
          country: 'Country',
          businessType: 'Business Type',
          message: 'Message (Optional)'
        },
        countries: ['UAE', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain', 'Oman'],
        businessTypes: ['Salon', 'Spa', 'Aesthetic Clinic', 'Medical Clinic', 'Health & Beauty Center', 'Gym', 'Fitness Center', 'Personal Training', 'Other'],
        submit: 'Submit Application',
        submitting: 'Submitting...',
        success: 'Application submitted! We\'ll contact you within 24 hours.'
      },
      testimonials: {
        label: 'Customer Reviews',
        title: 'What Our Clients Say',
        items: [
          { name: 'Sara Al-Rashid', role: 'Regular Customer', rating: 5, text: 'MuchGlow made booking my clinic and spa appointments so easy! The gift card feature is perfect for surprising friends.' },
          { name: 'Ahmed Hassan', role: 'Gym Owner', rating: 5, text: 'As a gym partner, MuchGlow has increased our memberships by 40%. The platform is professional and easy to use.' },
          { name: 'Khalid Omar', role: 'Fitness Enthusiast', rating: 5, text: 'Love the flexible payment options! I can book gym sessions and spa treatments all in one place.' },
          { name: 'Layla Mohammed', role: 'Corporate Client', rating: 5, text: 'We use MuchGlow for all our employee health and beauty gifts - gyms, spas, and clinics. The bulk ordering is fantastic!' }
        ]
      },
      footer: {
        desc: 'MuchGlow is a modern platform for beauty, health, and wellness services. We connect users with trusted clinics, salons, and fitness centers across GCC countries.',
        headOffice: 'Head Office',
        address: 'Al Ain, UAE',
        getApp: 'Get the App',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        helpCenter: 'Help Center',
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy',
        copyright: 'All rights reserved'
      }
    },
    ar: {
      nav: {
        services: 'الخدمات',
        howItWorks: 'كيف يعمل',
        partners: 'الشركاء',
        contact: 'اتصل بنا'
      },
      hero: {
        badge: 'منصّة متكاملة لخدمات الصحة والجمال',
        title: 'MuchGlow —',
        titleHighlight: 'منصّتك الذكية للصحة والجمال',
        subtitle: 'احجز مواعيدك، أرسل الهدايا الرقمية، اكتشف أفضل العيادات والصالونات، وتمتّع بخيارات دفع حديثة وآمنة.',
        ctaPrimary: 'حمّل التطبيق',
        ctaSecondary: 'كن شريكاً',
        paymentLabel: 'طرق الدفع المدعومة:'
      },
      services: {
        label: 'خدماتنا الرئيسية',
        title: 'ما نقدمه',
        subtitle: 'منصّة متعددة الخدمات: الصحة، الجمال، واللياقة',
        items: [
          { icon: '🎁', title: 'بطاقات هدايا رقمية', desc: 'أرسل هدايا فورية لأحبائك' },
          { icon: '💇', title: 'خدمات الصالونات والتجميل', desc: 'احجز في أفضل صالونات التجميل' },
          { icon: '🏥', title: 'العيادات الطبية والتجميلية', desc: 'خدمات طبية وتجميلية موثوقة' },
          { icon: '💪', title: 'النوادي والمراكز الرياضية', desc: 'اشتراكات لياقة وتدريب شخصي' },
          { icon: '🔍', title: 'البحث عن المنتجات عبر الصورة', desc: 'تقنية ذكية للبحث البصري' },
          { icon: '🤖', title: 'تحليل الوجه بالذكاء الاصطناعي', desc: 'توصيات جمالية مخصصة لك' }
        ]
      },
      whyUs: {
        label: 'لماذا MuchGlow',
        title: 'لماذا تختارنا',
        items: [
          { icon: <Clock size={28} />, title: 'حجز سريع وسهل', desc: 'احجز في ثوانٍ، في أي وقت' },
          { icon: <Shield size={28} />, title: 'مدفوعات آمنة', desc: 'دفع آمن عبر الإنترنت' },
          { icon: <Star size={28} />, title: 'عيادات وصالونات موثوقة', desc: 'شركاء معتمدون ومختارون' },
          { icon: <Sparkles size={28} />, title: 'مزايا ذكية بالذكاء الاصطناعي', desc: 'تقنيات متطورة لخدمتك' }
        ]
      },
      howItWorks: {
        label: 'كيف يعمل',
        title: 'ثلاث خطوات بسيطة',
        steps: [
          { num: '1', title: 'اكتشف الخدمات', desc: 'تصفح الصالونات والعيادات والنوادي' },
          { num: '2', title: 'اختر الموعد المناسب', desc: 'حدد الوقت والخدمة المطلوبة' },
          { num: '3', title: 'استمتع بتجربتك', desc: 'احضر واستمتع بخدمة مميزة' }
        ]
      },
      payment: {
        title: 'خيارات دفع مرنة',
        subtitle: 'قسّط مدفوعاتك بدون فوائد مع شركاء الدفع المدعومين.',
        tabby: 'Tabby (قريبًا)',
        tamara: 'Tamara (متاح)',
        stripe: 'Stripe (متاح)'
      },
      gift: {
        title: 'اصنع يوماً مميزاً',
        subtitle: 'أرسل هدية رقمية فورية',
        description: 'أرسل تجارب الصالون والعيادة والسبا والنادي الرياضي لأحبائك ببضع نقرات.',
        steps: [
          { num: '1', icon: '🏰', title: 'اختر الوجهة', desc: 'اختر من الصالونات والعيادات والنوادي والمنتجعات' },
          { num: '2', icon: '🎨', title: 'خصص هديتك', desc: 'اختر المبلغ وتصميم البطاقة الجميل' },
          { num: '3', icon: '💝', title: 'أرسل بحب', desc: 'اسعد أصدقاءك وأحبائك فوراً' }
        ],
        amounts: ['100 درهم', '200 درهم', '500 درهم'],
        recipientName: 'اسم المستلم',
        recipientContact: 'الهاتف أو البريد',
        sendButton: 'أرسل الهدية الآن',
        cta: 'أرسل هدية الآن',
        cardThemes: ['أزرق محيطي', 'شامبانيا', 'ذهبي ملكي', 'كحلي غامق']
      },
      partner: {
        label: 'نمِّ أعمالك',
        title: 'كن شريكاً مع MuchGlow',
        subtitle: 'انضم إلى العيادات والصالونات ومراكز اللياقة التي تستخدم منصّتنا للوصول إلى المزيد من العملاء',
        benefits: [
          'الوصول إلى أكثر من 50,000 مستخدم نشط',
          'صفر عمولة لأول 3 أشهر',
          'أدوات تسويق رقمي مجانية',
          'إدارة حجوزات متقدمة',
          'دعم مخصص 24/7'
        ],
        formTitle: 'نموذج الشراكة',
        fields: {
          companyName: 'اسم المنشأة',
          contactPerson: 'اسم الشخص المسؤول',
          email: 'البريد الإلكتروني',
          phone: 'رقم الهاتف',
          country: 'الدولة',
          businessType: 'نوع النشاط',
          message: 'الرسالة (اختياري)'
        },
        countries: ['الإمارات', 'السعودية', 'الكويت', 'قطر', 'البحرين', 'عُمان'],
        businessTypes: ['صالون', 'سبا', 'عيادة تجميل', 'عيادة طبية', 'مركز صحة وجمال', 'نادي رياضي', 'مركز لياقة', 'تدريب شخصي', 'أخرى'],
        submit: 'إرسال الطلب',
        submitting: 'جاري الإرسال...',
        success: 'تم إرسال الطلب! سنتواصل معك خلال 24 ساعة.'
      },
      testimonials: {
        label: 'آراء العملاء',
        title: 'ماذا يقول عملاؤنا',
        items: [
          { name: 'سارة الراشد', role: 'عميلة منتظمة', rating: 5, text: 'MuchGlow جعل حجز مواعيد العيادات والسبا سهلاً جداً! ميزة بطاقات الهدايا مثالية لمفاجأة الأصدقاء.' },
          { name: 'أحمد حسن', role: 'صاحب نادي رياضي', rating: 5, text: 'كشريك نادي رياضي، زاد MuchGlow اشتراكاتنا بنسبة 40%. المنصة احترافية وسهلة الاستخدام.' },
          { name: 'خالد عمر', role: 'عاشق اللياقة', rating: 5, text: 'أحب خيارات الدفع المرنة! أستطيع حجز تمارين النادي والسبا في مكان واحد.' },
          { name: 'ليلى محمد', role: 'عميلة شركات', rating: 5, text: 'نستخدم MuchGlow لجميع هدايا الصحة والجمال للموظفين - النوادي والمنتجعات والعيادات. نظام الطلب بالجملة رائع!' }
        ]
      },
      footer: {
        desc: 'MuchGlow هي منصّة حديثة لخدمات الصحة والجمال. نربط المستخدمين بأفضل العيادات والصالونات ومراكز اللياقة في دول الخليج.',
        headOffice: 'المكتب الرئيسي',
        address: 'العين، الإمارات',
        getApp: 'حمّل التطبيق',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        helpCenter: 'مركز المساعدة',
        terms: 'الشروط والأحكام',
        privacy: 'سياسة الخصوصية',
        copyright: 'جميع الحقوق محفوظة'
      }
    }
  };

  const t = content[lang];

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission - sends email to admin@muchglow.com
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      // Send to both local API and MuchGlow API
      const payload = {
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        businessType: formData.businessType,
        message: formData.message
      };

      // Try local API first (handles email to admin@muchglow.com)
      const localResponse = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Also try external API as backup
      const apiPayload = {
        salonName: formData.companyName,
        phoneNumber: formData.phone.replace(/[^\d+]/g, ''),
        contactName: formData.contactPerson,
        country: formData.country,
        email: formData.email,
        city: formData.businessType,
        instaAccount: formData.message || null,
      };

      fetch('https://api.muchglow.com/api/v1/salon/RegisterSalon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiPayload),
      }).catch(() => {}); // Silent fail for backup

      if (localResponse.ok) {
        setFormSuccess(true);
        toast.success(t.partner.success);
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          country: '',
          businessType: '',
          message: ''
        });
      } else {
        const data = await localResponse.json();
        toast.error(data.message || 'Something went wrong.');
      }
    } catch {
      toast.error('Connection error. Please try again.');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'rtl' : ''}>
      {/* ============ NAVIGATION ============ */}
      <nav className={`mg-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="mg-container mg-navbar-content">
          <Link href="/" className="mg-nav-logo">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image src={MuchGlowLogo} alt="MuchGlow" height={80} width={250} priority />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="mg-nav-links">
            <li>
              <a href="#services" className={`mg-nav-link ${activeSection === 'services' ? 'active' : ''}`}>
                {t.nav.services}
              </a>
            </li>
            <li>
              <a href="#gift" className={`mg-nav-link ${activeSection === 'gift' ? 'active' : ''}`}>
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#how-it-works" className={`mg-nav-link ${activeSection === 'how-it-works' ? 'active' : ''}`}>
                {t.nav.howItWorks}
              </a>
            </li>
            <li>
              <a href="#partner" className={`mg-nav-link ${activeSection === 'partner' ? 'active' : ''}`}>
                {t.nav.partners}
              </a>
            </li>
          </ul>

          <div className="mg-nav-actions">
            {/* Language Switcher */}
            <div className="mg-lang-switch">
              <Link href="/en" className={`mg-lang-btn ${lang === 'en' ? 'active' : ''}`}>EN</Link>
              <Link href="/ar" className={`mg-lang-btn ${lang === 'ar' ? 'active' : ''}`}>AR</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mg-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mg-mobile-menu active"
              initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? -100 : 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <ul className="mg-mobile-nav-links">
                {[
                  { href: '#services', label: t.nav.services },
                  { href: '#gift', label: 'Gift Cards' },
                  { href: '#how-it-works', label: t.nav.howItWorks },
                  { href: '#partner', label: t.nav.partners },
                  { href: '#footer', label: t.nav.contact }
                ].map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <a href={item.href} className="mg-mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              {/* Language Switcher in Mobile Menu */}
              <motion.div
                style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <div className="mg-lang-switch" style={{ display: 'flex' }}>
                  <Link href="/en" className={`mg-lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>EN</Link>
                  <Link href="/ar" className={`mg-lang-btn ${lang === 'ar' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>AR</Link>
                </div>
              </motion.div>

              <motion.div
                style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <a href="#partner" className="mg-btn mg-btn-primary" style={{ flex: 1, textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                  {t.hero.ctaSecondary}
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ============ HERO SECTION ============ */}
      <section className="mg-hero">
        <div className="mg-container">
          <div className="mg-hero-content">
            <motion.div
              className="mg-hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mg-hero-badge">
                <Sparkles size={16} />
                {t.hero.badge}
              </span>

              <h1 className="mg-hero-title">
                {t.hero.title}
                <br />
                <span className="mg-gradient-text">{t.hero.titleHighlight}</span>
              </h1>

              <p className="mg-hero-subtitle">{t.hero.subtitle}</p>

              <div className="mg-hero-buttons">
                <a href="#services" className="mg-btn mg-btn-primary mg-btn-lg mg-btn-mobile-full">
                  {t.hero.ctaPrimary}
                  <ArrowRight size={18} />
                </a>
                <a href="#partner" className="mg-btn mg-btn-secondary mg-btn-lg mg-btn-mobile-full">
                  {t.hero.ctaSecondary}
                </a>
              </div>

              <div className="mg-payment-logos">
                <span>{t.hero.paymentLabel}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontWeight: 700, color: '#3DBFBF' }}>Tabby</span>
                  <span style={{ fontWeight: 700, color: '#FFA700' }}>Tamara</span>
                  <span style={{ fontWeight: 700, color: '#635BFF' }}>Stripe</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mg-hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mg-hero-card mg-animate-float">
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💎</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Zero Commission</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>First 3 months free</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Free Digital Marketing', 'Instant Client Access', 'Advanced Analytics', '24/7 Support'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle size={18} color="#0891B2" />
                      <span style={{ fontSize: '0.9rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES SECTION ============ */}
      <section id="services" className="mg-section mg-services">
        <div className="mg-container">
          <div className="mg-section-header">
            <span className="mg-section-label">{t.services.label}</span>
            <h2 className="mg-section-title">{t.services.title}</h2>
            <p className="mg-section-desc">{t.services.subtitle}</p>
          </div>

          <div className="mg-grid mg-grid-4">
            {t.services.items.map((service, index) => (
              <motion.div
                key={index}
                className="mg-service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mg-service-icon">{service.icon}</div>
                <h3 className="mg-service-name">{service.title}</h3>
                <p className="mg-service-desc">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GIFT SECTION ============ */}
      <section id="gift" className="mg-gift-section">
        <div className="mg-container">
          <motion.div
            className="mg-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mg-gift-title">
              <span className="mg-gradient-text">{t.gift.title}</span>
              <br />
              {t.gift.subtitle}
            </h2>
            <p className="mg-section-desc">{t.gift.description}</p>
          </motion.div>

          <div className="mg-gift-content">
            {/* Left Side - Phone Mockup */}
            <motion.div
              className="mg-gift-mockup"
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mg-phone-frame">
                <div className="mg-phone-notch"></div>
                <div className="mg-phone-screen">
                  <div className="mg-gift-interface">
                    <h4 className="mg-gift-header">🎁 {t.gift.sendButton}</h4>

                    {/* Gift Card Themes */}
                    <div className="mg-gift-cards-row">
                      {[
                        { theme: t.gift.cardThemes[0], color: '#0891B2' },
                        { theme: t.gift.cardThemes[1], color: '#F7E7CE' },
                        { theme: t.gift.cardThemes[2], color: '#D97706' },
                        { theme: t.gift.cardThemes[3], color: '#1E3A5F' }
                      ].map((card, idx) => (
                        <motion.div
                          key={idx}
                          className="mg-gift-card-mini"
                          style={{ backgroundColor: card.color }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <span>{card.theme}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Amount Buttons */}
                    <div className="mg-amount-buttons">
                      {t.gift.amounts.map((amount, idx) => (
                        <button
                          key={idx}
                          className={`mg-amount-btn ${idx === 1 ? 'active' : ''}`}
                        >
                          {amount}
                        </button>
                      ))}
                    </div>

                    {/* Inputs */}
                    <div className="mg-gift-inputs">
                      <input type="text" placeholder={t.gift.recipientName} readOnly />
                      <input type="text" placeholder={t.gift.recipientContact} readOnly />
                    </div>

                    {/* Send Button */}
                    <motion.button
                      className="mg-gift-send-btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      🎁 {t.gift.sendButton}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Happy Recipient */}
            <motion.div
              className="mg-gift-recipient"
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mg-recipient-card">
                <div className="mg-glow-bg"></div>
                <div className="mg-happy-person">
                  <motion.div
                    className="mg-person-emoji"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    😊
                  </motion.div>
                  <motion.div
                    className="mg-notification-bubble"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎁 You&apos;ve received a beauty gift!
                  </motion.div>
                </div>
                <div className="mg-floating-hearts">
                  <motion.span
                    animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ position: 'absolute', top: '20%', left: '10%' }}
                  >💖</motion.span>
                  <motion.span
                    animate={{ y: [10, -10, 10], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    style={{ position: 'absolute', top: '60%', right: '15%' }}
                  >💕</motion.span>
                  <motion.span
                    animate={{ y: [-5, 15, -5], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                    style={{ position: 'absolute', bottom: '25%', left: '20%' }}
                  >✨</motion.span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3 Steps */}
          <motion.div
            className="mg-gift-steps"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mg-grid mg-grid-3">
              {t.gift.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="mg-gift-step-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mg-step-header">
                    <span className="mg-step-num">{step.num}</span>
                    <span className="mg-step-icon">{step.icon}</span>
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mg-text-center mg-mt-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="mg-btn mg-btn-primary mg-btn-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(231, 84, 129, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              🎁 {t.gift.cta} <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* Gift Card Showcase */}
          <motion.div
            className="mg-gift-showcase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="mg-showcase-label">Choose from beautiful gift card designs</p>
            <div className="mg-showcase-cards">
              {[
                { theme: t.gift.cardThemes[0], color: '#0891B2' },
                { theme: t.gift.cardThemes[1], color: '#F7E7CE' },
                { theme: t.gift.cardThemes[2], color: '#D97706' },
                { theme: t.gift.cardThemes[3], color: '#1E3A5F' }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  className="mg-showcase-card"
                  style={{ backgroundColor: card.color }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="mg-card-pattern"></div>
                  <span className="mg-card-theme">{card.theme}</span>
                  <span className="mg-card-amount">200 AED</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="mg-section mg-why-choose">
        <div className="mg-container">
          <div className="mg-section-header">
            <span className="mg-section-label">{t.whyUs.label}</span>
            <h2 className="mg-section-title">{t.whyUs.title}</h2>
          </div>

          <div className="mg-grid mg-grid-4">
            {t.whyUs.items.map((item, index) => (
              <motion.div
                key={index}
                className="mg-feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mg-feature-icon">{item.icon}</div>
                <h4 className="mg-feature-title">{item.title}</h4>
                <p className="mg-feature-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how-it-works" className="mg-section" style={{ background: 'white' }}>
        <div className="mg-container">
          <div className="mg-section-header">
            <span className="mg-section-label">{t.howItWorks.label}</span>
            <h2 className="mg-section-title">{t.howItWorks.title}</h2>
          </div>

          <div className="mg-steps">
            {t.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                className="mg-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="mg-step-number">{step.num}</div>
                <h4 className="mg-step-title">{step.title}</h4>
                <p className="mg-step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PAYMENT SECTION ============ */}
      <section className="mg-section mg-payment-section">
        <div className="mg-container">
          <div className="mg-payment-content">
            <div className="mg-payment-text">
              <h2 className="mg-heading-lg">{t.payment.title}</h2>
              <p>{t.payment.subtitle}</p>
              <div className="mg-payment-methods">
                <div className="mg-payment-badge">
                  <CheckCircle size={20} />
                  <div>
                    <strong>Tabby</strong>
                    <small style={{ display: 'block', fontSize: '0.75rem' }}>{t.payment.tabby}</small>
                  </div>
                </div>
                <div className="mg-payment-badge">
                  <CheckCircle size={20} />
                  <div>
                    <strong>Tamara</strong>
                    <small style={{ display: 'block', fontSize: '0.75rem' }}>{t.payment.tamara}</small>
                  </div>
                </div>
                <div className="mg-payment-badge">
                  <CheckCircle size={20} />
                  <div>
                    <strong>Stripe</strong>
                    <small style={{ display: 'block', fontSize: '0.75rem' }}>{t.payment.stripe}</small>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
                }}
              >
                <CreditCard size={60} color="#0891B2" />
                <h3 style={{ color: '#1a1518', marginTop: '1rem' }}>0% Interest</h3>
                <p style={{ color: '#666' }}>Pay Later, Glow Now</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS SECTION ============ */}
      <section id="testimonials" className="mg-section mg-testimonials">
        <div className="mg-container">
          <div className="mg-section-header">
            <span className="mg-section-label">{t.testimonials.label}</span>
            <h2 className="mg-section-title">{t.testimonials.title}</h2>
          </div>

          <div className="mg-testimonials-grid">
            {t.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                className="mg-testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(231, 84, 129, 0.15)' }}
              >
                <div className="mg-testimonial-quote">
                  <Quote size={24} className="mg-quote-icon" />
                </div>
                <p className="mg-testimonial-text">{testimonial.text}</p>
                <div className="mg-testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>
                <div className="mg-testimonial-author">
                  <div className="mg-author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="mg-author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARTNER REGISTRATION SECTION ============ */}
      <section id="partner" className="mg-section mg-partner-section">
        <div className="mg-container">
          <div className="mg-partner-content">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="mg-section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>{t.partner.label}</span>
              <h2 className="mg-heading-lg mg-mb-md">{t.partner.title}</h2>
              <p style={{ marginBottom: '1.5rem' }}>{t.partner.subtitle}</p>

              <ul className="mg-partner-benefits">
                {t.partner.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mg-partner-form-card">
                <h3>{t.partner.formTitle}</h3>

                {formSuccess ? (
                  <div className="mg-alert mg-alert-success mg-form-success" style={{ textAlign: 'center', padding: '2rem' }}>
                    <CheckCircle size={48} style={{ marginBottom: '1rem', color: '#28a745' }} />
                    <h4 style={{ color: '#155724', marginBottom: '0.5rem' }}>Success!</h4>
                    <p>{t.partner.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mg-form-row mg-mb-md">
                      <div className="mg-form-group">
                        <label className="mg-label">{t.partner.fields.companyName} *</label>
                        <input
                          type="text"
                          name="companyName"
                          className="mg-input"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mg-form-group">
                        <label className="mg-label">{t.partner.fields.contactPerson} *</label>
                        <input
                          type="text"
                          name="contactPerson"
                          className="mg-input"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mg-form-row mg-mb-md">
                      <div className="mg-form-group">
                        <label className="mg-label">{t.partner.fields.email} *</label>
                        <input
                          type="email"
                          name="email"
                          className="mg-input"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mg-form-group">
                        <label className="mg-label">{t.partner.fields.phone} *</label>
                        <input
                          type="tel"
                          name="phone"
                          className="mg-input"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mg-form-row mg-mb-md">
                      <div className="mg-form-group">
                        <label className="mg-label">{t.partner.fields.country} *</label>
                        <select
                          name="country"
                          className="mg-input mg-select"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select</option>
                          {t.partner.countries.map((country, i) => (
                            <option key={i} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mg-form-group">
                        <label className="mg-label">{t.partner.fields.businessType} *</label>
                        <select
                          name="businessType"
                          className="mg-input mg-select"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select</option>
                          {t.partner.businessTypes.map((type, i) => (
                            <option key={i} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mg-form-group mg-mb-lg">
                      <label className="mg-label">{t.partner.fields.message}</label>
                      <textarea
                        name="message"
                        className="mg-input mg-textarea"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                      />
                    </div>

                    <button
                      type="submit"
                      className="mg-btn mg-btn-primary"
                      style={{ width: '100%' }}
                      disabled={formLoading}
                    >
                      {formLoading ? (
                        <>
                          <span className="mg-spinner" />
                          {t.partner.submitting}
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          {t.partner.submit}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer id="footer" className="mg-footer">
        <div className="mg-container">
          <div className="mg-footer-content">
            <div className="mg-footer-brand">
              <Image src={MuchGlowLogo} alt="MuchGlow" className="mg-footer-logo" height={80} width={250} />
              <p className="mg-footer-desc">{t.footer.desc}</p>
              <div className="mg-social-links">
                <a href="https://instagram.com" className="mg-social-link" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18} />
                </a>
                <a href="https://linkedin.com" className="mg-social-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mg-footer-heading">{t.footer.headOffice}</h4>
              <ul className="mg-footer-links">
                <li><MapPin size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />{t.footer.address}</li>
                <li><a href="mailto:support@muchglow.com"><Mail size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />support@muchglow.com</a></li>
                <li><a href="mailto:admin@muchglow.com"><Mail size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />admin@muchglow.com</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mg-footer-heading">{t.footer.getApp}</h4>
              <ul className="mg-footer-links">
                <li><a href="#">{t.footer.appStore}</a></li>
                <li><a href="#">{t.footer.googlePlay}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mg-footer-heading">{t.footer.helpCenter}</h4>
              <ul className="mg-footer-links">
                <li><Link href={`/${lang}/terms`}>{t.footer.terms}</Link></li>
                <li><Link href={`/${lang}/privacy`}>{t.footer.privacy}</Link></li>
              </ul>
            </div>
          </div>

          <div className="mg-footer-bottom">
            <p><strong style={{ color: '#0891B2' }}>MuchGlow</strong> - {t.footer.copyright} &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>

      {/* ============ SCROLL TO TOP ============ */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="mg-scroll-top visible"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ============ WHATSAPP FLOATING BUTTON ============ */}
      <motion.a
        href="https://wa.me/971503759296"
        target="_blank"
        rel="noopener noreferrer"
        className="mg-whatsapp-btn"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>

      {/* Toast Container */}
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
      />
    </div>
  );
};

export default CompactLanding;
