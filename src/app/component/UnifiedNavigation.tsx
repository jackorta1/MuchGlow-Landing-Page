'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Dumbbell,
  Search,
  User,
  Heart,
  Calendar,
  Gift,
  Brain,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Activity,
  Trophy,
  Target,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/muchglow.png';

const UnifiedNavigation = () => {
  const [activeMode, setActiveMode] = useState('beauty'); // 'beauty' or 'fitness'
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const beautyMenuItems = [
    {
      title: 'Services',
      dropdown: [
        { name: 'Facial Treatments', icon: '✨', link: '/#services' },
        { name: 'Hair Services', icon: '💇‍♀️', link: '/#services' },
        { name: 'Nail Care', icon: '💅', link: '/#services' },
        { name: 'Spa & Massage', icon: '🌸', link: '/#services' },
        { name: 'Aesthetic Procedures', icon: '💉', link: '/#services' }
      ]
    },
    {
      title: 'AI Beauty',
      link: '/ai-beauty'
    },
    {
      title: 'Gift Cards',
      link: '/#gift-transfer'
    },
    {
      title: 'Partners',
      link: '/#partner'
    }
  ];

  const fitnessMenuItems = [
    {
      title: 'Fitness',
      dropdown: [
        { name: 'Gyms', icon: <Trophy size={16} />, link: '/#services' },
        { name: 'Yoga Studios', icon: <Heart size={16} />, link: '/#services' },
        { name: 'CrossFit', icon: <Activity size={16} />, link: '/#services' },
        { name: 'Personal Training', icon: <Target size={16} />, link: '/#services' },
        { name: 'Group Classes', icon: <Calendar size={16} />, link: '/#services' }
      ]
    },
    {
      title: 'AI Coach',
      link: '/ai-beauty'
    },
    {
      title: 'Memberships',
      link: '/#partner'
    },
    {
      title: 'Corporate',
      link: '/#partner'
    }
  ];

  const currentMenuItems = activeMode === 'beauty' ? beautyMenuItems : fitnessMenuItems;

  return (
    <nav 
      className={`unified-navigation ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.98)' 
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 0'
        }}>
          {/* Logo */}
          <Link href="/">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer'
            }}>
              <Image
                src={Logo}
                alt="MuchGlow Logo"
                width={180}
                height={75}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>

          {/* Mode Toggle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <div style={{
              display: 'flex',
              background: 'var(--color-light-gray)',
              borderRadius: '50px',
              padding: '4px',
              position: 'relative'
            }}>
              <motion.div
                style={{
                  position: 'absolute',
                  top: '4px',
                  width: '50%',
                  height: 'calc(100% - 8px)',
                  borderRadius: '50px',
                  background: activeMode === 'beauty'
                    ? 'linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%)'
                    : 'linear-gradient(135deg, #FF6B35 0%, #7B2CBF 100%)'
                }}
                animate={{
                  left: activeMode === 'beauty' ? '4px' : '50%'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              
              <button
                onClick={() => setActiveMode('beauty')}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  background: 'transparent',
                  borderRadius: '50px',
                  color: activeMode === 'beauty' ? 'white' : 'var(--color-soft-gray)',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s'
                }}
              >
                <Sparkles size={16} />
                Beauty
              </button>
              
              <button
                onClick={() => setActiveMode('fitness')}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  background: 'transparent',
                  borderRadius: '50px',
                  color: activeMode === 'fitness' ? 'white' : 'var(--color-soft-gray)',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s'
                }}
              >
                <Dumbbell size={16} />
                Fitness
              </button>
            </div>

            {/* Desktop Menu */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}
            className="desktop-menu"
            >
              {currentMenuItems.map((item, index) => (
                <div
                  key={index}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.link ? (
                    <Link href={item.link}>
                      <span style={{
                        color: 'var(--color-charcoal)',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'color 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        {item.title}
                      </span>
                    </Link>
                  ) : (
                    <span style={{
                      color: 'var(--color-charcoal)',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'color 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      {item.title}
                      {item.dropdown && <ChevronDown size={16} />}
                    </span>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          marginTop: '1rem',
                          background: 'white',
                          borderRadius: 'var(--radius-md)',
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                          padding: '1rem',
                          minWidth: '200px',
                          zIndex: 1001
                        }}
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link key={subIndex} href={subItem.link}>
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '10px',
                              borderRadius: 'var(--radius-sm)',
                              transition: 'background 0.3s',
                              cursor: 'pointer'
                            }}
                            className="dropdown-item"
                            >
                              {typeof subItem.icon === 'string' ? (
                                <span>{subItem.icon}</span>
                              ) : (
                                subItem.icon
                              )}
                              <span>{subItem.name}</span>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <button style={{
                padding: '10px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: 'var(--color-charcoal)'
              }}>
                <Search size={20} />
              </button>

              <button style={{
                padding: '10px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: 'var(--color-charcoal)'
              }}>
                <Heart size={20} />
              </button>

              {/* Language Switcher */}
              <Link href="/ar">
                <button style={{
                  padding: '8px 16px',
                  border: '2px solid var(--color-light-gray)',
                  background: 'white',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  color: 'var(--color-charcoal)',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.3s'
                }}
                className="language-switcher"
                >
                  <Globe size={16} />
                  العربية
                </button>
              </Link>

              <button style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '50px',
                background: activeMode === 'beauty'
                  ? 'linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%)'
                  : 'linear-gradient(135deg, #FF6B35 0%, #7B2CBF 100%)',
                color: 'white',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <User size={16} />
                Account
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'none',
                padding: '10px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: 'var(--color-charcoal)'
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              background: 'white',
              borderTop: '1px solid var(--color-light-gray)',
              overflow: 'hidden'
            }}
          >
            <div className="container" style={{ padding: '2rem 1rem' }}>
              {currentMenuItems.map((item, index) => (
                <div key={index} style={{ marginBottom: '1.5rem' }}>
                  {item.link ? (
                    <Link href={item.link}>
                      <div style={{
                        padding: '10px 0',
                        fontWeight: '500',
                        color: 'var(--color-charcoal)'
                      }}>
                        {item.title}
                      </div>
                    </Link>
                  ) : (
                    <>
                      <div style={{
                        padding: '10px 0',
                        fontWeight: '500',
                        color: 'var(--color-charcoal)',
                        marginBottom: '10px'
                      }}>
                        {item.title}
                      </div>
                      {item.dropdown && (
                        <div style={{ paddingLeft: '20px' }}>
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link key={subIndex} href={subItem.link}>
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '8px 0',
                                color: 'var(--color-soft-gray)'
                              }}>
                                {typeof subItem.icon === 'string' ? (
                                  <span>{subItem.icon}</span>
                                ) : (
                                  subItem.icon
                                )}
                                <span>{subItem.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* Mobile Language Switcher */}
              <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--color-light-gray)' }}>
                <Link href="/ar">
                  <button style={{
                    width: '100%',
                    padding: '12px 20px',
                    border: '2px solid var(--color-light-gray)',
                    background: 'white',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    color: 'var(--color-charcoal)',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '1rem'
                  }}>
                    <Globe size={20} />
                    العربية
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-menu-toggle {
            display: block !important;
          }
        }

        .dropdown-item:hover {
          background: var(--color-soft-beige);
        }

        .language-switcher:hover {
          border-color: var(--color-champagne-gold);
          background: var(--color-soft-beige);
        }
      `}</style>
    </nav>
  );
};

export default UnifiedNavigation;