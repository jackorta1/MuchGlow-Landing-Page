"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, 
  Upload, 
  Sparkles, 
  Shield, 
  Brain, 
  Star, 
  ChevronLeft,
  Check,
  Zap,
  Eye,
  Palette,
  Heart,
  TrendingUp,
  Lock,
  Award,
  Download
} from "lucide-react";
import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";
import "../ai-beauty-analysis.css";

const AIBeautyAnalysisAr = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle app download based on device OS
  const handleAppDownload = async () => {
    setIsDownloading(true);
    
    try {
      const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    
      const isAndroid = /android/i.test(userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
      const isWindows = /Windows/i.test(userAgent);
      const isMac = /Macintosh|Mac OS X/i.test(userAgent);
      const isLinux = /Linux/i.test(userAgent);
    
      await new Promise(resolve => setTimeout(resolve, 1000));
    
      if (isAndroid) {
        window.location.href = "https://play.google.com/store";
      } else if (isIOS) {
        window.location.href = "https://apps.apple.com/";
      } else if (isWindows || isLinux) {
        window.location.href = "https://play.google.com/store";
      } else if (isMac) {
        window.location.href = "https://apps.apple.com/";
      } else {
        alert("يرجى فتح هذا الرابط على هاتفك المحمول لتحميل تطبيق ماتش غلو وتجربة اختبار الجمال بالذكاء الاصطناعي.");
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("حدث خطأ. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Generate random particles for background
  useEffect(() => {
    const particlesContainer = document.querySelector('.ai-particles');
    if (particlesContainer && particlesContainer.children.length === 0) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${20 + Math.random() * 10}s`;
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setTimeout(() => startAnalysis(), 500);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }, 3000);
  };

  const analysisSteps = [
    {
      number: "١",
      title: "التقط جمالك",
      description: "ارفع صورة سيلفي واضحة أو التقط صورة فورية",
      icon: Camera
    },
    {
      number: "٢",
      title: "تحليل عميق بالذكاء الاصطناعي",
      description: "خوارزميات متقدمة تحلل ملامحك الفريدة",
      icon: Brain
    },
    {
      number: "٣",
      title: "نتائج مخصصة",
      description: "احصل على توصيات مخصصة للجمال والعلاجات",
      icon: Sparkles
    },
    {
      number: "٤",
      title: "احجز ووفر",
      description: "تواصل مع أفضل الصالونات والعروض الحصرية",
      icon: Award
    }
  ];

  const sampleResults = [
    {
      title: "تحليل البشرة",
      icon: "✨",
      description: "بشرتك تظهر علامات الجفاف. نوصي بعلاجات الترطيب.",
      tags: ["هيدرافيشل", "علاج فيتامين سي", "تعزيز الترطيب"],
      color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
      title: "تطابق شكل الوجه",
      icon: "💄",
      description: "تم اكتشاف شكل وجه بيضاوي. مثالي لقصات الشعر المتدرجة والكونتور.",
      tags: ["قص متدرج", "كونتور الوجه", "تشكيل الحواجب"],
      color: "linear-gradient(135deg, #f093fb, #f5576c)"
    },
    {
      title: "اقتراحات العلاج",
      icon: "💉",
      description: "بناءً على ملفك الشخصي، فكر في هذه العلاجات المميزة.",
      tags: ["البوتوكس", "حشو الشفاه", "التقشير الكيميائي"],
      color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
      title: "توصيات الأنماط",
      icon: "👗",
      description: "أنماط رائجة تكمل ملامحك بشكل مثالي.",
      tags: ["بلياج", "بشرة زجاجية", "إشراقة طبيعية"],
      color: "linear-gradient(135deg, #fa709a, #fee140)"
    }
  ];

  return (
    <section className="ai-beauty-section" dir="rtl">
      {/* Animated Background */}
      <div className="ai-particles"></div>
      
      <div className="ai-container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="ai-hero-title">
            تحليل الجمال والبشرة بالذكاء الاصطناعي
          </h1>
          <p className="ai-subtitle">
            اكتشف روتين الجمال المثالي لك مع اختبار البشرة والأنماط الثوري المدعوم بالذكاء الاصطناعي
          </p>
        </motion.div>

        {/* Upload Section */}
        <div className="ai-upload-container">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ai-upload-box"
          >
            <div
              className={`ai-upload-zone ${isDragging ? 'dragover' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
              />
              
              {selectedImage ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image
                    src={selectedImage}
                    width={300}
                    height={300}
                    alt="صورة سيلفي مرفوعة"
                    style={{ borderRadius: '20px', maxWidth: '100%', height: 'auto' }}
                  />
                </motion.div>
              ) : (
                <>
                  <div className="upload-icon">
                    <div className="camera-icon"></div>
                  </div>
                  <div className="upload-text">ارفع صورتك الشخصية</div>
                  <div className="upload-subtext">
                    اسحب وأفلت أو انقر للتصفح
                  </div>
                </>
              )}
            </div>
            
            <div className="security-badge">
              <Lock size={20} />
              <span>تحليل آمن وخاص</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="ai-preview-section"
          >
            <div className="preview-badges">
              <div className="ai-badge">
                <Zap size={16} />
                <span>نتائج فورية</span>
              </div>
              <div className="ai-badge">
                <Shield size={16} />
                <span>متوافق مع GDPR</span>
              </div>
              <div className="ai-badge">
                <Brain size={16} />
                <span>ذكاء اصطناعي متقدم</span>
              </div>
            </div>

            <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '20px' }}>
              ما نحلله
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <motion.div 
                className="analysis-item"
                whileHover={{ x: -10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#b8b8d8' }}
              >
                <Eye size={20} style={{ color: '#667eea' }} />
                <span>لون البشرة وملمسها وحالتها</span>
              </motion.div>
              <motion.div 
                className="analysis-item"
                whileHover={{ x: -10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#b8b8d8' }}
              >
                <Palette size={20} style={{ color: '#f5576c' }} />
                <span>شكل الوجه ورسم الملامح</span>
              </motion.div>
              <motion.div 
                className="analysis-item"
                whileHover={{ x: -10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#b8b8d8' }}
              >
                <Heart size={20} style={{ color: '#4facfe' }} />
                <span>تطابقات الجمال المخصصة</span>
              </motion.div>
              <motion.div 
                className="analysis-item"
                whileHover={{ x: -10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#b8b8d8' }}
              >
                <TrendingUp size={20} style={{ color: '#fa709a' }} />
                <span>الأنماط الرائجة المناسبة لك</span>
              </motion.div>
            </div>

            <button 
              className="ai-cta-button" 
              style={{ marginTop: '30px' }}
              onClick={handleAppDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <>
                  <LoadingSpinner size="sm" color="#fff" />
                  <span style={{ marginLeft: '10px' }}>جاري التحميل...</span>
                </>
              ) : (
                <>
                  <Download size={20} style={{ display: 'inline', marginLeft: '10px' }} />
                  حمل التطبيق لاختبار مظهرك
                </>
              )}
            </button>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            color: '#fff', 
            marginBottom: '60px',
            marginTop: '100px' 
          }}>
            كيف يعمل
          </h2>
          
          <div className="analysis-steps">
            {analysisSteps.map((step, index) => (
              <motion.div
                key={index}
                className="step-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results Section */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ 
                textAlign: 'center', 
                fontSize: '2.5rem', 
                color: '#fff', 
                marginBottom: '60px',
                marginTop: '100px' 
              }}>
                نتائجك المخصصة
              </h2>
              
              <div className="ai-results-container">
                {sampleResults.map((result, index) => (
                  <motion.div
                    key={index}
                    className="result-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="result-icon" style={{ background: result.color }}>
                      {result.icon}
                    </div>
                    <h3 className="result-title">{result.title}</h3>
                    <p className="result-description">{result.description}</p>
                    <div className="result-tags">
                      {result.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ textAlign: 'center', marginTop: '60px' }}
              >
                <button 
                  className="ai-cta-button"
                  onClick={handleAppDownload}
                  disabled={isDownloading}
                >
                  {isDownloading ? (
                    <>
                      <LoadingSpinner size="sm" color="#fff" />
                      <span style={{ marginLeft: '10px' }}>جاري التحميل...</span>
                    </>
                  ) : (
                    <>
                      <Download size={20} style={{ display: 'inline', marginLeft: '10px' }} />
                      حمل التطبيق لحجز العلاجات
                    </>
                  )}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Overlay */}
        <div className={`ai-loading ${isAnalyzing ? 'active' : ''}`}>
          <div style={{ textAlign: 'center' }}>
            <div className="loading-spinner"></div>
            <p style={{ color: '#fff', marginTop: '20px', fontSize: '1.2rem' }}>
              جاري تحليل ملف جمالك...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBeautyAnalysisAr;