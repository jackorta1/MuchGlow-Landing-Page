'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X,
  Gift, Scissors, Plus, Activity, Search, ScanFace,
  CheckCircle, ChevronUp, Send, Star, Quote
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  // Scroll reveal observer
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    const revealEls = document.querySelectorAll('.lux-reveal');
    revealEls.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${(i % 3) * 0.08}s`;
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setIsScrolled(window.scrollY > 50);

      const sections = ['features', 'gift', 'how-it-works', 'partner'];
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

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Content translations
  const content = {
    en: {
      announce: {
        tag: 'APP EXCLUSIVE',
        text: 'Get the best prices on the app — always lower than walk-in.',
        cta: 'Download now'
      },
      nav: {
        services: 'Services',
        giftCards: 'Gift Cards',
        howItWorks: 'How It Works',
        partners: 'Partners'
      },
      hero: {
        eyebrow: 'Your Smart Platform for Beauty & Health',
        titleLine1: 'Beauty & wellness,',
        titleLine2: 'beautifully booked.',
        lead: 'Book salons, clinics, spas & gyms across the UAE at prices lower than walk-in. Send digital gifts, scan your skin with AI, and pay your way — all in one refined app.',
        ctaPrimary: 'Download App',
        ctaSecondary: 'Become a Partner',
        paymentLabel: 'Supported payments'
      },
      appBanner: {
        eyebrow: 'Why Book on the App?',
        titleLine1: 'Better prices than',
        titleLine2: 'walking in.',
        desc: 'MuchGlow partners offer exclusive in-app pricing you won\'t find at the counter. Book ahead, skip the queue, and pay less — every single time.',
        perks: [
          { icon: '💰', text: 'App-exclusive prices' },
          { icon: '🎁', text: 'Bonus points on top-up' },
          { icon: '📱', text: 'Skip the queue' },
          { icon: '💳', text: '0% interest BNPL' }
        ],
        priceBadge: 'Save up to 30%',
        ctaPrimary: 'Get the App',
        ctaSecondary: 'Browse Services'
      },
      features: {
        eyebrow: 'Key Features',
        title: 'One ecosystem for self-care',
        subtitle: 'Beauty, wellness, fitness and healthcare — a single connected marketplace built for the Gulf.',
        items: [
          { num: '01', title: 'Digital Gift Cards', desc: 'Send instant beauty & wellness gifts — credit or a specific salon experience — to anyone.' },
          { num: '02', title: 'Salons & Barbershops', desc: 'Book premium hair, beauty and grooming appointments with verified providers near you.' },
          { num: '03', title: 'Medical & Wellness Clinics', desc: 'Trusted dermatology, aesthetic and recovery services, fully bookable in-app.' },
          { num: '04', title: 'Gyms & Fitness', desc: 'Memberships, personal trainers and fitness centres — discover and join in seconds.' },
          { num: '05', title: 'Smart Discovery', desc: 'Search by category, location, rating and offers — map-based, radius-aware, instant.' },
          { num: '06', title: 'AI Face Analysis', desc: 'Scan your skin and get personalised treatment recommendations in seconds.' }
        ]
      },
      ai: {
        eyebrow: 'Powered by AI',
        titleLine1: 'Scan your skin.',
        titleLine2: 'Glow smarter.',
        desc: "Upload or scan a facial image and MuchGlow's AI analyses visible skin conditions to recommend the right treatments — facials, hydration, acne care, rejuvenation and clinic consultations.",
        tags: ['Facial treatments', 'Hydration', 'Acne care', 'Skin rejuvenation', 'Dermatology'],
        badge: 'Face detected'
      },
      gift: {
        eyebrow: "Make Someone's Day",
        title: 'Send a digital gift,',
        titleHighlight: 'instantly',
        subtitle: 'Pick an amount or gift a specific salon experience. Choose a beautiful theme and deliver joy in a few taps.',
        cta: 'Send a Gift Now',
        steps: [
          { num: '1', icon: '🏰', title: 'Pick a Destination', desc: 'Choose from premium salons, clinics, gyms, spas & fitness centers' },
          { num: '2', icon: '🎨', title: 'Customize Your Gift', desc: 'Select amount and pick a beautiful card theme' },
          { num: '3', icon: '💝', title: 'Send with Love', desc: 'Instantly deliver joy to friends and loved ones' }
        ]
      },
      whyUs: {
        eyebrow: 'Why MuchGlow',
        title: 'Refined by design',
        items: [
          { label: 'BOOKING', title: 'Fast & easy', desc: 'Book in seconds, anytime, from any device.' },
          { label: 'PAYMENTS', title: 'Secure by default', desc: 'Stripe Connect, Apple Pay and BNPL — safe & protected.' },
          { label: 'TRUST', title: 'Verified partners', desc: 'Quality clinics and salons, vetted and reviewed.' },
          { label: 'INTELLIGENCE', title: 'Smart AI features', desc: 'Recommendations powered by real analysis.' }
        ]
      },
      howItWorks: {
        eyebrow: 'Simple Process',
        title: 'How it works',
        steps: [
          { num: '1', title: 'Discover services', desc: 'Browse salons, clinics & fitness centres near you.' },
          { num: '2', title: 'Select your time', desc: 'Choose a preferred slot and service that fits.' },
          { num: '3', title: 'Enjoy & glow', desc: 'Arrive, relax and enjoy a premium experience.' }
        ]
      },
      payment: {
        title: 'Flexible Payments',
        subtitle: 'Split payments with zero interest using our supported payment partners.',
        methods: [
          { name: 'Tabby', status: 'Coming Soon' },
          { name: 'Tamara', status: 'Live' },
          { name: 'Stripe', status: 'Live' },
          { name: 'Apple Pay', status: 'Live' }
        ]
      },
      testimonials: {
        eyebrow: 'Customer Reviews',
        title: 'What Our Clients Say',
        items: [
          { name: 'Sara Al-Rashid', role: 'Regular Customer', rating: 5, text: 'MuchGlow made booking my clinic and spa appointments so easy! The gift card feature is perfect for surprising friends.' },
          { name: 'Ahmed Hassan', role: 'Gym Owner', rating: 5, text: 'As a gym partner, MuchGlow has increased our memberships by 40%. The platform is professional and easy to use.' },
          { name: 'Khalid Omar', role: 'Fitness Enthusiast', rating: 5, text: 'Love the flexible payment options! I can book gym sessions and spa treatments all in one place.' },
          { name: 'Layla Mohammed', role: 'Corporate Client', rating: 5, text: 'We use MuchGlow for all our employee health and beauty gifts — gyms, spas, and clinics. The bulk ordering is fantastic!' }
        ]
      },
      partner: {
        eyebrow: 'Grow Your Business',
        title: 'Unlock your',
        titleHighlight: 'beauty business',
        subtitle: 'Join clinics, salons and fitness providers using MuchGlow to reach more customers across the Gulf.',
        benefits: [
          'Access 50,000+ active users',
          'Zero commission for the first 3 months',
          'Free digital marketing tools',
          'Advanced booking management & analytics',
          '24/7 dedicated partner support'
        ],
        formTitle: 'Partner Registration',
        fields: {
          companyName: 'Business Name',
          contactPerson: 'Contact Name',
          email: 'Email',
          phone: 'Phone',
          country: 'Country',
          businessType: 'Business Type',
          message: 'Message (optional)'
        },
        countries: ['United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain', 'Oman'],
        businessTypes: ['Beauty Salon', 'Clinic', 'Gym', 'Spa', 'Fitness Center', 'Personal Training', 'Other'],
        submit: 'Submit Application',
        submitting: 'Submitting...',
        success: 'Application submitted! We\'ll contact you within 24 hours.'
      },
      footer: {
        desc: 'A modern UAE platform for beauty, health and wellness. We connect users with trusted clinics, salons and fitness centres across GCC countries.',
        headOffice: 'Head Office',
        address: 'Al Ain, UAE',
        getApp: 'Get the App',
        customerApp: 'Customer App',
        partnerApp: 'Partner App',
        helpCenter: 'Help Center',
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy',
        copyright: 'All rights reserved'
      },
      phone: {
        wallet: 'Wallet',
        tier: 'Bronze Tier',
        balance: 'Wallet Balance',
        amount: '38.00',
        currency: 'AED',
        brandName: 'MuchGlow',
        transactions: 'Transaction History',
        points: 'Points History',
        convert: 'Convert Points'
      },
      floatGift: {
        label: '— Gift · Credit',
        amount: 'AED 300',
        sub: 'Credit'
      },
      floatSage: {
        title: 'Face detected ✓',
        sub: 'AI skin analysis ready'
      }
    },
    ar: {
      announce: {
        tag: 'حصري للتطبيق',
        text: 'احصل على أفضل الأسعار عبر التطبيق — أقل من الحضور المباشر.',
        cta: 'حمّل الآن'
      },
      nav: {
        services: 'الخدمات',
        giftCards: 'بطاقات الهدايا',
        howItWorks: 'كيف يعمل',
        partners: 'الشركاء'
      },
      hero: {
        eyebrow: 'منصّة متكاملة لخدمات الصحة والجمال',
        titleLine1: 'الجمال والعافية،',
        titleLine2: 'بحجز أنيق.',
        lead: 'احجز في الصالونات والعيادات والمنتجعات والنوادي في الإمارات بأسعار أقل من الحضور المباشر. أرسل هدايا رقمية، افحص بشرتك بالذكاء الاصطناعي، وادفع بالطريقة التي تناسبك — كل ذلك في تطبيق واحد.',
        ctaPrimary: 'حمّل التطبيق',
        ctaSecondary: 'كن شريكاً',
        paymentLabel: 'طرق الدفع المدعومة'
      },
      appBanner: {
        eyebrow: 'لماذا تحجز عبر التطبيق؟',
        titleLine1: 'أسعار أفضل من',
        titleLine2: 'الحضور المباشر.',
        desc: 'شركاء MuchGlow يقدمون أسعاراً حصرية داخل التطبيق لن تجدها في المركز. احجز مسبقاً، تجاوز الانتظار، وادفع أقل — في كل مرة.',
        perks: [
          { icon: '💰', text: 'أسعار حصرية للتطبيق' },
          { icon: '🎁', text: 'نقاط مكافأة عند الشحن' },
          { icon: '📱', text: 'تجاوز طابور الانتظار' },
          { icon: '💳', text: 'تقسيط بدون فوائد' }
        ],
        priceBadge: 'وفّر حتى 30%',
        ctaPrimary: 'حمّل التطبيق',
        ctaSecondary: 'تصفح الخدمات'
      },
      features: {
        eyebrow: 'خدماتنا الرئيسية',
        title: 'منظومة متكاملة للعناية الشخصية',
        subtitle: 'الجمال والعافية واللياقة والرعاية الصحية — سوق واحد متصل مصمم للخليج.',
        items: [
          { num: '01', title: 'بطاقات هدايا رقمية', desc: 'أرسل هدايا فورية للجمال والعافية — رصيد أو تجربة صالون محددة — لأي شخص.' },
          { num: '02', title: 'صالونات وحلاقة', desc: 'احجز مواعيد متميزة للشعر والتجميل والعناية مع مزودين معتمدين بالقرب منك.' },
          { num: '03', title: 'عيادات طبية وتجميلية', desc: 'خدمات جلدية وتجميلية وعلاجية موثوقة، قابلة للحجز بالكامل عبر التطبيق.' },
          { num: '04', title: 'النوادي واللياقة', desc: 'اشتراكات ومدربون شخصيون ومراكز لياقة — اكتشف وانضم في ثوانٍ.' },
          { num: '05', title: 'اكتشاف ذكي', desc: 'ابحث حسب الفئة والموقع والتقييم والعروض — على الخريطة وفوري.' },
          { num: '06', title: 'تحليل الوجه بالذكاء الاصطناعي', desc: 'افحص بشرتك واحصل على توصيات علاجية مخصصة في ثوانٍ.' }
        ]
      },
      ai: {
        eyebrow: 'بتقنية الذكاء الاصطناعي',
        titleLine1: 'افحص بشرتك.',
        titleLine2: 'تألّق بذكاء.',
        desc: 'ارفع صورة لوجهك ودع الذكاء الاصطناعي في MuchGlow يحلل حالة بشرتك ويقترح العلاجات المناسبة — تنظيف البشرة، الترطيب، علاج حب الشباب، تجديد البشرة واستشارات العيادات.',
        tags: ['علاجات البشرة', 'الترطيب', 'علاج حب الشباب', 'تجديد البشرة', 'الأمراض الجلدية'],
        badge: 'تم كشف الوجه'
      },
      gift: {
        eyebrow: 'اصنع يوماً مميزاً',
        title: 'أرسل هدية رقمية',
        titleHighlight: 'فورية',
        subtitle: 'اختر المبلغ أو أهدِ تجربة صالون محددة. اختر تصميماً جميلاً وقدّم الفرح بنقرات قليلة.',
        cta: 'أرسل هدية الآن',
        steps: [
          { num: '1', icon: '🏰', title: 'اختر الوجهة', desc: 'اختر من الصالونات والعيادات والنوادي والمنتجعات' },
          { num: '2', icon: '🎨', title: 'خصص هديتك', desc: 'اختر المبلغ وتصميم البطاقة الجميل' },
          { num: '3', icon: '💝', title: 'أرسل بحب', desc: 'اسعد أصدقاءك وأحبائك فوراً' }
        ]
      },
      whyUs: {
        eyebrow: 'لماذا MuchGlow',
        title: 'تصميم راقٍ',
        items: [
          { label: 'الحجز', title: 'سريع وسهل', desc: 'احجز في ثوانٍ، في أي وقت ومن أي جهاز.' },
          { label: 'المدفوعات', title: 'آمنة بالكامل', desc: 'Stripe Connect و Apple Pay والتقسيط — آمنة ومحمية.' },
          { label: 'الثقة', title: 'شركاء معتمدون', desc: 'عيادات وصالونات موثوقة ومراجعة.' },
          { label: 'الذكاء', title: 'مزايا ذكية', desc: 'توصيات مبنية على تحليل حقيقي.' }
        ]
      },
      howItWorks: {
        eyebrow: 'كيف يعمل',
        title: 'ثلاث خطوات بسيطة',
        steps: [
          { num: '1', title: 'اكتشف الخدمات', desc: 'تصفح الصالونات والعيادات والنوادي بالقرب منك.' },
          { num: '2', title: 'اختر الموعد', desc: 'حدد الوقت والخدمة المناسبة.' },
          { num: '3', title: 'استمتع وتألّق', desc: 'احضر واسترخِ واستمتع بتجربة مميزة.' }
        ]
      },
      payment: {
        title: 'خيارات دفع مرنة',
        subtitle: 'قسّط مدفوعاتك بدون فوائد مع شركاء الدفع المدعومين.',
        methods: [
          { name: 'Tabby', status: 'قريبًا' },
          { name: 'Tamara', status: 'متاح' },
          { name: 'Stripe', status: 'متاح' },
          { name: 'Apple Pay', status: 'متاح' }
        ]
      },
      testimonials: {
        eyebrow: 'آراء العملاء',
        title: 'ماذا يقول عملاؤنا',
        items: [
          { name: 'سارة الراشد', role: 'عميلة منتظمة', rating: 5, text: 'MuchGlow جعل حجز مواعيد العيادات والسبا سهلاً جداً! ميزة بطاقات الهدايا مثالية لمفاجأة الأصدقاء.' },
          { name: 'أحمد حسن', role: 'صاحب نادي رياضي', rating: 5, text: 'كشريك نادي رياضي، زاد MuchGlow اشتراكاتنا بنسبة 40%. المنصة احترافية وسهلة الاستخدام.' },
          { name: 'خالد عمر', role: 'عاشق اللياقة', rating: 5, text: 'أحب خيارات الدفع المرنة! أستطيع حجز تمارين النادي والسبا في مكان واحد.' },
          { name: 'ليلى محمد', role: 'عميلة شركات', rating: 5, text: 'نستخدم MuchGlow لجميع هدايا الصحة والجمال للموظفين — النوادي والمنتجعات والعيادات. نظام الطلب بالجملة رائع!' }
        ]
      },
      partner: {
        eyebrow: 'نمِّ أعمالك',
        title: 'أطلق العنان',
        titleHighlight: 'لأعمالك التجميلية',
        subtitle: 'انضم إلى العيادات والصالونات ومراكز اللياقة التي تستخدم MuchGlow للوصول إلى المزيد من العملاء في الخليج.',
        benefits: [
          'الوصول إلى أكثر من 50,000 مستخدم نشط',
          'صفر عمولة لأول 3 أشهر',
          'أدوات تسويق رقمي مجانية',
          'إدارة حجوزات متقدمة وتحليلات',
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
        businessTypes: ['صالون تجميل', 'عيادة', 'نادي رياضي', 'سبا', 'مركز لياقة', 'تدريب شخصي', 'أخرى'],
        submit: 'إرسال الطلب',
        submitting: 'جاري الإرسال...',
        success: 'تم إرسال الطلب! سنتواصل معك خلال 24 ساعة.'
      },
      footer: {
        desc: 'منصّة إماراتية حديثة لخدمات الصحة والجمال والعافية. نربط المستخدمين بأفضل العيادات والصالونات ومراكز اللياقة في دول الخليج.',
        headOffice: 'المكتب الرئيسي',
        address: 'العين، الإمارات',
        getApp: 'حمّل التطبيق',
        customerApp: 'تطبيق العملاء',
        partnerApp: 'تطبيق الشركاء',
        helpCenter: 'مركز المساعدة',
        terms: 'الشروط والأحكام',
        privacy: 'سياسة الخصوصية',
        copyright: 'جميع الحقوق محفوظة'
      },
      phone: {
        wallet: 'المحفظة',
        tier: 'الفئة البرونزية',
        balance: 'رصيد المحفظة',
        amount: '38.00',
        currency: 'د.إ',
        brandName: 'MuchGlow',
        transactions: 'سجل المعاملات',
        points: 'سجل النقاط',
        convert: 'تحويل النقاط'
      },
      floatGift: {
        label: '— هدية · رصيد',
        amount: '300 د.إ',
        sub: 'رصيد'
      },
      floatSage: {
        title: 'تم كشف الوجه ✓',
        sub: 'تحليل البشرة جاهز'
      }
    }
  };

  const t = content[lang];

  const featureIcons = [
    <Gift key="gift" size={26} strokeWidth={1.8} />,
    <Scissors key="scissors" size={26} strokeWidth={1.8} />,
    <Plus key="plus" size={26} strokeWidth={1.8} />,
    <Activity key="activity" size={26} strokeWidth={1.8} />,
    <Search key="search" size={26} strokeWidth={1.8} />,
    <ScanFace key="scanface" size={26} strokeWidth={1.8} />
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const payload = {
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        businessType: formData.businessType,
        message: formData.message
      };

      const localResponse = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

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
      }).catch(() => {});

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

  // Brand logo component
  const BrandLogo = ({ size = 38 }: { size?: number }) => (
    <Image
      src="/logomuchglow.png"
      alt="MuchGlow"
      width={size}
      height={size}
      style={{ borderRadius: '50%', objectFit: 'cover' }}
    />
  );

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* ============ ANNOUNCEMENT BAR ============ */}
      <div className="lux-announce">
        <span className="lux-announce-tag">{t.announce.tag}</span>
        <span>{t.announce.text}</span>
        <a href="https://apps.apple.com/ca/app/muchglow/id6747438635" target="_blank" rel="noopener noreferrer">{t.announce.cta} →</a>
      </div>

      {/* ============ NAVIGATION ============ */}
      <nav className={`lux-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="lux-wrap lux-nav-inner">
          <Link href={`/${lang}`} className="lux-brand">
            <span className="lux-mark"><BrandLogo /></span>
            MuchGlow
          </Link>

          <ul className="lux-nav-links">
            <li><a href="#features" className={activeSection === 'features' ? 'active' : ''}>{t.nav.services}</a></li>
            <li><a href="#gift" className={activeSection === 'gift' ? 'active' : ''}>{t.nav.giftCards}</a></li>
            <li><a href="#how-it-works" className={activeSection === 'how-it-works' ? 'active' : ''}>{t.nav.howItWorks}</a></li>
            <li><a href="#partner" className={activeSection === 'partner' ? 'active' : ''}>{t.nav.partners}</a></li>
          </ul>

          <div className="lux-nav-right">
            <div className="lux-lang">
              <Link href="/en" className={lang === 'en' ? 'on' : ''}>EN</Link>
              <Link href="/ar" className={lang === 'ar' ? 'on' : ''}>AR</Link>
            </div>
            <a href="https://apps.apple.com/ca/app/muchglow/id6747438635" className="lux-btn lux-btn-gold" target="_blank" rel="noopener noreferrer">
              {t.hero.ctaPrimary}
            </a>
            <button
              className="lux-menu-btn"
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
              className="lux-mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ul>
                {[
                  { href: '#features', label: t.nav.services },
                  { href: '#gift', label: t.nav.giftCards },
                  { href: '#how-it-works', label: t.nav.howItWorks },
                  { href: '#partner', label: t.nav.partners }
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <div className="lux-lang">
                  <Link href="/en" className={lang === 'en' ? 'on' : ''} onClick={() => setMobileMenuOpen(false)}>EN</Link>
                  <Link href="/ar" className={lang === 'ar' ? 'on' : ''} onClick={() => setMobileMenuOpen(false)}>AR</Link>
                </div>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                <a href="https://apps.apple.com/ca/app/muchglow/id6747438635" className="lux-btn lux-btn-gold" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  {t.hero.ctaPrimary} →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ============ HERO ============ */}
      <header className="lux-hero">
        <div className="lux-grain" />
        <div className="lux-wrap lux-hero-grid">
          <div className="lux-reveal in">
            <span className="lux-eyebrow">{t.hero.eyebrow}</span>
            <h1>
              {t.hero.titleLine1}<br />
              <span className="lux-serif-italic">{t.hero.titleLine2}</span>
            </h1>
            <p className="lux-lead">{t.hero.lead}</p>
            <div className="lux-hero-cta">
              <a href="https://apps.apple.com/ca/app/muchglow/id6747438635" className="lux-btn lux-btn-gold" target="_blank" rel="noopener noreferrer">
                {t.hero.ctaPrimary} →
              </a>
              <a href="#partner" className="lux-btn lux-btn-ghost">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="lux-pay-row">
              <span className="lux-pay-label">{t.hero.paymentLabel}</span>
              <span className="lux-pay-chip">Tabby</span>
              <span className="lux-pay-chip">Tamara</span>
              <span className="lux-pay-chip">Stripe</span>
              <span className="lux-pay-chip">Apple&nbsp;Pay</span>
            </div>
          </div>

          {/* Phone Visual — Real App Screenshot */}
          <div className="lux-phone-stage lux-reveal in">
            <div className="lux-glow-ring" />
            <div className="lux-float-gift">
              <div className="lux-fg-lab">{t.floatGift.label}</div>
              <div className="lux-fg-amt">{t.floatGift.amount} <em>{t.floatGift.sub}</em></div>
            </div>
            <div className="lux-phone">
              <div className="lux-phone-screen-img">
                <Image
                  src="/app-home.jpg"
                  alt="MuchGlow App — Browse salons, clinics and beauty services"
                  width={576}
                  height={1248}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
            </div>
            <div className="lux-float-sage">
              <b>{t.floatSage.title}</b>
              <span className="lux-float-sage-sub">{t.floatSage.sub}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ============ FEATURES ============ */}
      <section id="features" className="lux-section">
        <div className="lux-wrap">
          <div className="lux-sec-head lux-reveal">
            <span className="lux-eyebrow">{t.features.eyebrow}</span>
            <h2>{t.features.title}</h2>
            <p>{t.features.subtitle}</p>
          </div>
          <div className="lux-feat-grid">
            {t.features.items.map((item, index) => (
              <div key={index} className="lux-feat lux-reveal">
                <span className="lux-feat-num">{item.num}</span>
                <div className="lux-feat-ico">{featureIcons[index]}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AI BAND (Dark) ============ */}
      <section className="lux-section" style={{ paddingTop: 0 }}>
        <div className="lux-wrap">
          <div className="lux-ai-band lux-reveal">
            <div>
              <span className="lux-eyebrow">{t.ai.eyebrow}</span>
              <h2>
                {t.ai.titleLine1}<br />
                <span className="lux-serif-italic" style={{ color: 'var(--gold-300)' }}>{t.ai.titleLine2}</span>
              </h2>
              <p>{t.ai.desc}</p>
              <div className="lux-ai-rec">
                {t.ai.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', alignItems: 'flex-start' }}>
              <div className="lux-ai-phone">
                <Image
                  src="/app-ai-scan.jpg"
                  alt="MuchGlow AI — Scan your face"
                  width={400}
                  height={868}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="lux-ai-phone" style={{ marginTop: '30px' }}>
                <Image
                  src="/app-ai-results.png"
                  alt="MuchGlow AI — Skin scan results with confidence scores"
                  width={400}
                  height={868}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GIFT SECTION ============ */}
      <section id="gift" className="lux-section lux-gift-section">
        <div className="lux-wrap">
          <div className="lux-sec-head lux-reveal">
            <span className="lux-eyebrow">{t.gift.eyebrow}</span>
            <h2>{t.gift.title} <span className="lux-serif-italic">{t.gift.titleHighlight}</span></h2>
            <p>{t.gift.subtitle}</p>
          </div>
          <div className="lux-gift-grid">
            <div className="lux-gift-card lux-g-sage lux-reveal">
              <span className="lux-gc-arc" />
              <div className="lux-gc-lab">— Credit</div>
              <div className="lux-gc-amt">100<small> AED</small></div>
            </div>
            <div className="lux-gift-card lux-g-gold lux-reveal">
              <span className="lux-gc-arc" />
              <div className="lux-gc-lab">— Credit</div>
              <div className="lux-gc-amt">250<small> AED</small></div>
            </div>
            <div className="lux-gift-card lux-g-ink lux-reveal">
              <span className="lux-gc-arc" />
              <div className="lux-gc-lab">— Credit</div>
              <div className="lux-gc-amt">500<small> AED</small></div>
            </div>
          </div>

          {/* Real app screenshot — gift flow */}
          <div className="lux-reveal" style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
            <div className="lux-showcase-phone" style={{ width: '220px' }}>
              <Image src="/app-send-gift-v2.png" alt="MuchGlow — Send gift cards in the app" width={440} height={880} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>

          {/* 3-step gift process */}
          <div className="lux-gift-steps">
            {t.gift.steps.map((step, index) => (
              <div key={index} className="lux-gift-step lux-reveal">
                <span className="lux-gift-step-icon">{step.icon}</span>
                <span className="lux-gift-step-num">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a href="https://apps.apple.com/ca/app/muchglow/id6747438635" className="lux-btn lux-btn-gold" target="_blank" rel="noopener noreferrer">
              {t.gift.cta} →
            </a>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="lux-section">
        <div className="lux-wrap">
          <div className="lux-sec-head lux-reveal">
            <span className="lux-eyebrow">{t.whyUs.eyebrow}</span>
            <h2>{t.whyUs.title}</h2>
          </div>
          <div className="lux-why-grid">
            {t.whyUs.items.map((item, index) => (
              <div key={index} className="lux-why lux-reveal">
                <div className="lux-wlab">{item.label}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ APP ADVANTAGE BANNER ============ */}
      <section className="lux-section">
        <div className="lux-wrap">
          <div className="lux-app-banner lux-reveal">
            <div>
              <span className="lux-eyebrow">{t.appBanner.eyebrow}</span>
              <h2>
                {t.appBanner.titleLine1}<br />
                <span className="lux-serif-italic" style={{ color: 'var(--gold-300)' }}>{t.appBanner.titleLine2}</span>
              </h2>
              <p className="lux-app-banner-desc">{t.appBanner.desc}</p>
              <div className="lux-app-perks">
                {t.appBanner.perks.map((perk, i) => (
                  <span key={i} className="lux-app-perk">
                    <span className="lux-app-perk-icon">{perk.icon}</span>
                    {perk.text}
                  </span>
                ))}
              </div>
              <div className="lux-app-banner-cta">
                <a href="https://apps.apple.com/ca/app/muchglow/id6747438635" className="lux-btn lux-btn-gold" target="_blank" rel="noopener noreferrer">
                  {t.appBanner.ctaPrimary} →
                </a>
                <a href="#features" className="lux-btn lux-btn-ghost" style={{ color: 'var(--cream)', borderColor: 'var(--gold-500)' }}>
                  {t.appBanner.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="lux-app-showcase">
              <div className="lux-showcase-phone">
                <Image src="/app-home.jpg" alt="MuchGlow Home — Browse services" width={360} height={780} loading="lazy" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="lux-showcase-phone">
                <Image src="/app-salon.jpg" alt="MuchGlow — Salon booking with prices" width={360} height={780} loading="lazy" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="lux-showcase-phone">
                <Image src="/app-wallet.jpg" alt="MuchGlow Wallet — Top up and earn bonus" width={360} height={780} loading="lazy" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="lux-price-compare">{t.appBanner.priceBadge}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how-it-works" className="lux-section" style={{ background: 'var(--cream-2)' }}>
        <div className="lux-wrap">
          <div className="lux-sec-head lux-reveal">
            <span className="lux-eyebrow">{t.howItWorks.eyebrow}</span>
            <h2>{t.howItWorks.title}</h2>
          </div>
          <div className="lux-steps">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="lux-step lux-reveal">
                <div className="lux-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FLEXIBLE PAYMENTS ============ */}
      <section className="lux-section">
        <div className="lux-wrap">
          <div className="lux-payment-strip lux-reveal" style={{ alignItems: 'center' }}>
            <div style={{ flex: '1' }}>
              <h3>{t.payment.title}</h3>
              <p>{t.payment.subtitle}</p>
              <div className="lux-payment-methods" style={{ marginTop: '20px' }}>
                {t.payment.methods.map((method, i) => (
                  <div key={i} className="lux-payment-badge">
                    <div>
                      <strong>{method.name}</strong>
                      <small>{method.status}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lux-showcase-phone" style={{ width: '180px', flexShrink: 0 }}>
              <Image src="/app-bnpl.png" alt="Tabby & Tamara — Buy now pay later in MuchGlow" width={360} height={780} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="lux-section" style={{ background: 'var(--cream-2)' }}>
        <div className="lux-wrap">
          <div className="lux-sec-head lux-reveal">
            <span className="lux-eyebrow">{t.testimonials.eyebrow}</span>
            <h2>{t.testimonials.title}</h2>
          </div>
          <div className="lux-testimonials-grid">
            {t.testimonials.items.map((item, index) => (
              <div key={index} className="lux-testimonial lux-reveal">
                <div className="lux-testimonial-quote">
                  <Quote size={24} />
                </div>
                <p className="lux-testimonial-text">{item.text}</p>
                <div className="lux-testimonial-rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#d8b765" color="#d8b765" />
                  ))}
                </div>
                <div className="lux-testimonial-author">
                  <div className="lux-author-avatar">
                    {item.name.charAt(0)}
                  </div>
                  <div className="lux-author-info">
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARTNER CTA (Dark) ============ */}
      <section id="partner" className="lux-section">
        <div className="lux-wrap">
          <div className="lux-partner lux-reveal">
            <div>
              <span className="lux-eyebrow">{t.partner.eyebrow}</span>
              <h2>
                {t.partner.title} <span className="lux-serif-italic" style={{ color: 'var(--gold-300)' }}>{t.partner.titleHighlight}</span>
              </h2>
              <p>{t.partner.subtitle}</p>
              <ul className="lux-partner-benefits">
                {t.partner.benefits.map((benefit, index) => (
                  <li key={index}>
                    <span className="lux-partner-check">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="https://apps.apple.com/ca/app/muchglow-partners/id6747438839" className="lux-btn lux-btn-gold" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', padding: '10px 18px' }}>
                  Partner App (iOS)
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.muchglow.partners.app" className="lux-btn lux-btn-gold" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', padding: '10px 18px' }}>
                  Partner App (Android)
                </a>
              </div>
            </div>

            <div className="lux-pform">
              <h3>{t.partner.formTitle}</h3>

              {formSuccess ? (
                <div className="lux-form-success">
                  <CheckCircle size={48} />
                  <h4>Success!</h4>
                  <p>{t.partner.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="lux-pf-row">
                    <div>
                      <label>{t.partner.fields.companyName} *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label>{t.partner.fields.contactPerson} *</label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="lux-pf-row">
                    <div>
                      <label>{t.partner.fields.email} *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label>{t.partner.fields.phone} *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="lux-pf-row">
                    <div>
                      <label>{t.partner.fields.country} *</label>
                      <select
                        name="country"
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
                    <div>
                      <label>{t.partner.fields.businessType} *</label>
                      <select
                        name="businessType"
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

                  <div style={{ marginBottom: '12px' }}>
                    <label>{t.partner.fields.message}</label>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={isRTL ? 'أخبرنا عن عملك' : 'Tell us about your business'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="lux-btn lux-btn-gold"
                    disabled={formLoading}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {formLoading ? (
                      <>
                        <span className="lux-spinner" />
                        {t.partner.submitting}
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {t.partner.submit} →
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="lux-footer">
        <div className="lux-wrap lux-foot-grid">
          <div className="lux-foot-brand">
            <Link href={`/${lang}`} className="lux-brand">
              <span className="lux-mark"><BrandLogo /></span>
              MuchGlow
            </Link>
            <p>{t.footer.desc}</p>
          </div>

          <div className="lux-foot-col">
            <h4>{t.footer.headOffice}</h4>
            <span>{t.footer.address}</span>
            <a href="mailto:support@muchglow.com">support@muchglow.com</a>
            <a href="mailto:admin@muchglow.com">admin@muchglow.com</a>
          </div>

          <div className="lux-foot-col">
            <h4>{t.footer.getApp}</h4>
            <a href="https://apps.apple.com/ca/app/muchglow/id6747438635" target="_blank" rel="noopener noreferrer">{t.footer.customerApp} (iOS)</a>
            <a href="https://play.google.com/store/apps/details?id=com.muchglow.care.app" target="_blank" rel="noopener noreferrer">{t.footer.customerApp} (Android)</a>
            <a href="https://apps.apple.com/ca/app/muchglow-partners/id6747438839" target="_blank" rel="noopener noreferrer">{t.footer.partnerApp} (iOS)</a>
            <a href="https://play.google.com/store/apps/details?id=com.muchglow.partners.app" target="_blank" rel="noopener noreferrer">{t.footer.partnerApp} (Android)</a>
          </div>

          <div className="lux-foot-col">
            <h4>{t.footer.helpCenter}</h4>
            <Link href={`/${lang}/terms`}>{t.footer.terms}</Link>
            <Link href={`/${lang}/privacy`}>{t.footer.privacy}</Link>
          </div>
        </div>
        <div className="lux-foot-bot">
          <b>MuchGlow</b> — {t.footer.copyright} &copy; {new Date().getFullYear()}
        </div>
      </footer>

      {/* ============ SCROLL TO TOP ============ */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="lux-scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ============ WHATSAPP BUTTON ============ */}
      <a
        href="https://wa.me/971503759296"
        target="_blank"
        rel="noopener noreferrer"
        className="lux-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

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
