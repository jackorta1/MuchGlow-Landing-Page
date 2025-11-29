'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dumbbell, 
  Activity, 
  Calendar, 
  Users, 
  Trophy, 
  Heart,
  Target,
  Clock,
  MapPin,
  Star,
  Gift,
  CreditCard,
  Brain,
  TrendingUp,
  Filter,
  Search,
  ChevronRight,
  Check,
  Sparkles,
  Zap,
  Shield,
  Award
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const GymFitnessSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  // Gym categories
  const categories = [
    { id: 'all', name: 'All Fitness', icon: <Dumbbell size={18} /> },
    { id: 'gym', name: 'Gyms', icon: <Trophy size={18} /> },
    { id: 'yoga', name: 'Yoga & Pilates', icon: <Heart size={18} /> },
    { id: 'crossfit', name: 'CrossFit', icon: <Zap size={18} /> },
    { id: 'personal', name: 'Personal Training', icon: <Target size={18} /> },
    { id: 'classes', name: 'Group Classes', icon: <Users size={18} /> }
  ];

  // Featured gyms data
  const gyms = [
    {
      id: 1,
      name: 'FitZone Premium',
      category: 'gym',
      rating: 4.9,
      reviews: 312,
      image: '/gym1.jpg',
      location: 'Downtown Dubai',
      distance: '2.3 km',
      tags: ['24/7', 'Pool', 'Sauna'],
      packages: [
        { type: 'Day Pass', price: 50, currency: 'AED' },
        { type: 'Monthly', price: 450, currency: 'AED', popular: true },
        { type: 'Annual', price: 3999, currency: 'AED', tamara: true }
      ],
      features: ['State-of-art Equipment', 'Personal Trainers', 'Swimming Pool', 'Steam & Sauna']
    },
    {
      id: 2,
      name: 'Zen Yoga Studio',
      category: 'yoga',
      rating: 5.0,
      reviews: 189,
      image: '/yoga1.jpg',
      location: 'Business Bay',
      distance: '3.1 km',
      tags: ['Hot Yoga', 'Meditation', 'Prenatal'],
      packages: [
        { type: 'Drop-in Class', price: 80, currency: 'AED' },
        { type: '10 Classes', price: 650, currency: 'AED', popular: true },
        { type: 'Unlimited Monthly', price: 899, currency: 'AED' }
      ],
      features: ['Certified Instructors', 'Small Class Sizes', 'Meditation Room', 'Organic Juice Bar']
    },
    {
      id: 3,
      name: 'CrossFit Thunder',
      category: 'crossfit',
      rating: 4.8,
      reviews: 276,
      image: '/crossfit1.jpg',
      location: 'JLT',
      distance: '4.5 km',
      tags: ['Competition', 'Beginners', 'Nutrition'],
      packages: [
        { type: 'Trial Week', price: 199, currency: 'AED' },
        { type: 'Monthly', price: 799, currency: 'AED', popular: true },
        { type: '6 Months', price: 3999, currency: 'AED', tamara: true }
      ],
      features: ['Olympic Lifting', 'Mobility Classes', 'Nutrition Coaching', 'Competition Prep']
    }
  ];

  // Subscription packages
  const subscriptionPlans = [
    {
      name: 'Fitness Starter',
      price: 299,
      period: 'month',
      features: [
        'Access to partner gyms',
        '5 group classes/month',
        'Basic fitness tracking',
        'Mobile app access'
      ],
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: 'Wellness Pro',
      price: 599,
      period: 'month',
      popular: true,
      features: [
        'Unlimited gym access',
        'Unlimited classes',
        'Personal trainer session',
        'AI fitness coach',
        'Nutrition planning',
        '20% off beauty services'
      ],
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: 'Elite Athlete',
      price: 999,
      period: 'month',
      features: [
        'All Pro features',
        '4 PT sessions/month',
        'Recovery treatments',
        'Priority booking',
        'Guest passes (2/month)',
        'Exclusive events'
      ],
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  // AI Fitness recommendations
  const aiRecommendations = [
    { goal: 'Weight Loss', icon: <TrendingUp />, color: '#FF6B35', plan: '3x cardio + 2x strength/week' },
    { goal: 'Muscle Gain', icon: <Dumbbell />, color: '#7B2CBF', plan: '4x strength + protein focus' },
    { goal: 'Flexibility', icon: <Heart />, color: '#00D9A3', plan: 'Daily yoga + stretching' },
    { goal: 'Endurance', icon: <Activity />, color: '#3D5A80', plan: 'Progressive cardio training' }
  ];

  return (
    <section className="gym-fitness-section" style={{ padding: '5rem 0', background: 'var(--color-soft-beige)' }}>
      <div className="container">
        {/* Section Header with Mode Toggle */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="mode-toggle" style={{
              display: 'inline-flex',
              background: 'white',
              borderRadius: '50px',
              padding: '4px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <button style={{
                padding: '12px 24px',
                border: 'none',
                borderRadius: '50px',
                background: 'transparent',
                color: 'var(--color-soft-gray)',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                <Sparkles size={18} style={{ marginRight: '8px', display: 'inline' }} />
                Beauty & Spa
              </button>
              <button style={{
                padding: '12px 24px',
                border: 'none',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #FF6B35 0%, #FF6B6B 100%)',
                color: 'white',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                <Dumbbell size={18} style={{ marginRight: '8px', display: 'inline' }} />
                Fitness & Gym
              </button>
            </div>
            
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '600',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #FF6B35 0%, #7B2CBF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Transform Your Body & Mind
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-soft-gray)', maxWidth: '600px', margin: '0 auto' }}>
              Discover premium gyms, book fitness classes, and achieve your wellness goals with AI-powered guidance
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  border: activeCategory === cat.id ? 'none' : '2px solid var(--color-light-gray)',
                  borderRadius: '50px',
                  background: activeCategory === cat.id 
                    ? 'linear-gradient(135deg, #FF6B35 0%, #FF6B6B 100%)' 
                    : 'white',
                  color: activeCategory === cat.id ? 'white' : 'var(--color-charcoal)',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: activeCategory === cat.id ? '0 4px 15px rgba(255, 107, 53, 0.3)' : 'none'
                }}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div style={{
            maxWidth: '500px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <Search style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-soft-gray)'
            }} size={20} />
            <input
              type="text"
              placeholder="Search gyms, classes, or trainers..."
              style={{
                width: '100%',
                padding: '15px 20px 15px 50px',
                border: '2px solid var(--color-light-gray)',
                borderRadius: '50px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s'
              }}
            />
          </div>
        </motion.div>

        {/* Featured Gyms Grid */}
        <motion.div 
          className="gyms-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem'
          }}
        >
          {gyms.filter(gym => activeCategory === 'all' || gym.category === activeCategory).map(gym => (
            <motion.div
              key={gym.id}
              className="gym-card"
              whileHover={{ y: -5 }}
              style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.3s'
              }}
            >
              <div style={{
                position: 'relative',
                height: '200px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Star size={16} fill="#FFD700" color="#FFD700" />
                  <span style={{ fontWeight: '600' }}>{gym.rating}</span>
                  <span style={{ color: 'var(--color-soft-gray)', fontSize: '0.875rem' }}>
                    ({gym.reviews})
                  </span>
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  display: 'flex',
                  gap: '8px'
                }}>
                  {gym.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '4px 12px',
                        borderRadius: '15px',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem'
                }}>
                  {gym.name}
                </h3>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'var(--color-soft-gray)',
                  fontSize: '0.875rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={16} />
                    {gym.location}
                  </span>
                  <span>{gym.distance}</span>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  {gym.features.slice(0, 2).map(feature => (
                    <div
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '8px'
                      }}
                    >
                      <Check size={16} style={{ color: '#00D9A3' }} />
                      <span style={{ fontSize: '0.875rem' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  borderTop: '1px solid var(--color-light-gray)',
                  paddingTop: '1rem',
                  marginTop: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <span style={{ fontWeight: '600' }}>Starting from</span>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#FF6B35'
                    }}>
                      {gym.packages[0].price} {gym.packages[0].currency}
                    </span>
                  </div>
                  
                  <button style={{
                    width: '100%',
                    padding: '12px',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF6B6B 100%)',
                    color: 'white',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}>
                    View Details
                    <ChevronRight size={18} style={{ marginLeft: '8px', display: 'inline' }} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Fitness Coach Section */}
        <motion.div
          className="ai-coach-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            marginBottom: '5rem',
            color: 'white'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '20px',
                marginBottom: '1rem'
              }}>
                <Brain size={20} />
                <span style={{ fontWeight: '600' }}>AI-Powered</span>
              </div>
              
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>
                Your Personal AI Fitness Coach
              </h3>
              
              <p style={{
                fontSize: '1.125rem',
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                Get personalized workout plans, track your progress, and receive real-time coaching powered by advanced AI technology.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {aiRecommendations.map(rec => (
                  <div
                    key={rec.goal}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: rec.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {React.cloneElement(rec.icon, { size: 16, color: 'white' })}
                      </div>
                      <span style={{ fontWeight: '600' }}>{rec.goal}</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>{rec.plan}</p>
                  </div>
                ))}
              </div>

              <button style={{
                padding: '14px 28px',
                border: '2px solid white',
                borderRadius: '50px',
                background: 'white',
                color: '#667eea',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                Start Your Fitness Journey
                <Zap size={18} style={{ marginLeft: '8px', display: 'inline' }} />
              </button>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}>
                <Activity size={80} style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>AI Coach Active</h4>
                <p style={{ opacity: 0.9 }}>24/7 Support Available</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subscription Plans */}
        <motion.div
          className="subscription-plans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginBottom: '5rem' }}
        >
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Choose Your Fitness Journey
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {subscriptionPlans.map(plan => (
              <motion.div
                key={plan.name}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  position: 'relative',
                  boxShadow: plan.popular ? '0 8px 32px rgba(255, 107, 53, 0.2)' : 'var(--shadow-md)',
                  border: plan.popular ? '2px solid #FF6B35' : 'none'
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF6B6B 100%)',
                    color: 'white',
                    padding: '4px 20px',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: plan.color,
                  marginBottom: '1.5rem'
                }} />

                <h4 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  marginBottom: '0.5rem'
                }}>
                  {plan.name}
                </h4>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: '700' }}>{plan.price}</span>
                  <span style={{ color: 'var(--color-soft-gray)' }}> AED/{plan.period}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {plan.features.map(feature => (
                    <li
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '12px'
                      }}
                    >
                      <Check size={18} style={{ color: '#00D9A3' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button style={{
                  width: '100%',
                  padding: '14px',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  background: plan.popular 
                    ? 'linear-gradient(135deg, #FF6B35 0%, #FF6B6B 100%)'
                    : 'var(--color-light-gray)',
                  color: plan.popular ? 'white' : 'var(--color-charcoal)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fitness Gift Cards Integration */}
        <motion.div
          className="fitness-gifts"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, #FFE5EC 0%, #FFF5E1 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            textAlign: 'center'
          }}
        >
          <Gift size={48} style={{ color: '#FF6B35', marginBottom: '1rem' }} />
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem',
            marginBottom: '1rem'
          }}>
            Gift Fitness & Wellness
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--color-soft-gray)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Send gym memberships, personal training sessions, or wellness packages as thoughtful gifts to your loved ones
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '14px 28px',
              border: 'none',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #FF6B35 0%, #FF6B6B 100%)',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Gift size={18} />
              Send Fitness Gift
            </button>
            
            <button style={{
              padding: '14px 28px',
              border: '2px solid #FF6B35',
              borderRadius: '50px',
              background: 'transparent',
              color: '#FF6B35',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <CreditCard size={18} />
              Corporate Wellness
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GymFitnessSection;