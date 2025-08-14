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
  ChevronRight,
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

const AIBeautyAnalysis = () => {
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
        alert("Please open this link on your phone to download the MuchGlow app and try the AI Beauty Test.");
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Generate random particles for background
  useEffect(() => {
    const particlesContainer = document.querySelector('.ai-particles');
    if (particlesContainer) {
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
      number: "1",
      title: "Capture Your Beauty",
      description: "Upload a clear selfie or take a photo instantly",
      icon: Camera
    },
    {
      number: "2",
      title: "AI Deep Analysis",
      description: "Advanced algorithms analyze your unique features",
      icon: Brain
    },
    {
      number: "3",
      title: "Personalized Results",
      description: "Get tailored beauty & treatment recommendations",
      icon: Sparkles
    },
    {
      number: "4",
      title: "Book & Save",
      description: "Connect with top salons & exclusive offers",
      icon: Award
    }
  ];

  const sampleResults = [
    {
      title: "Skin Analysis",
      icon: "✨",
      description: "Your skin shows signs of dehydration. We recommend hydrating facials.",
      tags: ["Hydrafacial", "Vitamin C Treatment", "Moisture Boost"],
      color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
      title: "Face Shape Match",
      icon: "💄",
      description: "Oval face shape detected. Perfect for layered haircuts and contouring.",
      tags: ["Layered Cut", "Face Contouring", "Brow Shaping"],
      color: "linear-gradient(135deg, #f093fb, #f5576c)"
    },
    {
      title: "Treatment Suggestions",
      icon: "💉",
      description: "Based on your profile, consider these premium treatments.",
      tags: ["Botox", "Lip Fillers", "Chemical Peel"],
      color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
      title: "Style Recommendations",
      icon: "👗",
      description: "Trending styles that complement your features perfectly.",
      tags: ["Balayage", "Glass Skin", "Natural Glow"],
      color: "linear-gradient(135deg, #fa709a, #fee140)"
    }
  ];

  return (
    <section className="ai-beauty-section">
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
            AI Beauty & Skin Analysis
          </h1>
          <p className="ai-subtitle">
            Discover your perfect beauty routine with our revolutionary AI-powered skin & style test
          </p>
        </motion.div>

        {/* Upload Section */}
        <div className="ai-upload-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
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
                    alt="Uploaded selfie"
                    style={{ borderRadius: '20px', maxWidth: '100%', height: 'auto' }}
                  />
                </motion.div>
              ) : (
                <>
                  <div className="upload-icon">
                    <div className="camera-icon"></div>
                  </div>
                  <div className="upload-text">Upload Your Selfie</div>
                  <div className="upload-subtext">
                    Drag & drop or click to browse
                  </div>
                </>
              )}
            </div>
            
            <div className="security-badge">
              <Lock size={20} />
              <span>Secure & Private Analysis</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="ai-preview-section"
          >
            <div className="preview-badges">
              <div className="ai-badge">
                <Zap size={16} />
                <span>Instant Results</span>
              </div>
              <div className="ai-badge">
                <Shield size={16} />
                <span>GDPR Compliant</span>
              </div>
              <div className="ai-badge">
                <Brain size={16} />
                <span>Advanced AI</span>
              </div>
            </div>

            <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '20px' }}>
              What We Analyze
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <motion.div 
                className="analysis-item"
                whileHover={{ x: 10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#b8b8d8' }}
              >
                <Eye size={20} style={{ color: '#667eea' }} />
                <span>Skin tone, texture & conditions</span>
              </motion.div>
              <motion.div 
                className="analysis-item"
                whileHover={{ x: 10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#b8b8d8' }}
              >
                <Palette size={20} style={{ color: '#f5576c' }} />
                <span>Face shape & feature mapping</span>
              </motion.div>
              <motion.div 
                className="analysis-item"
                whileHover={{ x: 10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#b8b8d8' }}
              >
                <Heart size={20} style={{ color: '#4facfe' }} />
                <span>Personalized beauty matches</span>
              </motion.div>
              <motion.div 
                className="analysis-item"
                whileHover={{ x: 10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#b8b8d8' }}
              >
                <TrendingUp size={20} style={{ color: '#fa709a' }} />
                <span>Trending styles for you</span>
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
                  <span style={{ marginLeft: '10px' }}>Loading...</span>
                </>
              ) : (
                <>
                  <Download size={20} style={{ display: 'inline', marginRight: '10px' }} />
                  Download App to Test My Look
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
            How It Works
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
                Your Personalized Results
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
                      <span style={{ marginLeft: '10px' }}>Loading...</span>
                    </>
                  ) : (
                    <>
                      <Download size={20} style={{ display: 'inline', marginRight: '10px' }} />
                      Download App to Book Treatments
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
              Analyzing your beauty profile...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBeautyAnalysis;