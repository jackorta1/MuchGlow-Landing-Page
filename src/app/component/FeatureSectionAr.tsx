"use client";
import React from 'react';
import { motion } from "framer-motion";
import HaddingSection from './HaddingSection';
import Image, { StaticImageData } from 'next/image';
import Feat1 from "../../../public/ft1.png";
import Feat2 from "../../../public/ft2.png";
import Feat3 from "../../../public/ft3.png";
import Feat4 from "../../../public/ft4.png";
import Feat5 from "../../../public/ft5.png";
import Feat6 from "../../../public/ft6.png";
import MblVec from "../../../public/appfeat.png";

// Feature item data structure
const features = [
  { image: Feat1, title: "جرب واستمتع", description: "اكتشف مجموعة مختارة من الصالونات الفاخرة التي تقدم خدمات وتجارب لا مثيل لها." },
  { image: Feat2, title: "مصمم خصيصًا لك", description: "من قصات الشعر إلى علاجات السبا، كل خدمة تُصمم لتلبي احتياجاتك لأنك تستحق الكمال." },
  { image: Feat3, title: "حجز سلس", description: "احجز موعدك بسهولة باستخدام بطاقة الائتمان/الخصم، Apple Pay، أو محفظة SaloonGlow." },
  { image: Feat4, title: "بدون أوقات انتظار", description: "احجز قبل وصولك، وادخل مباشرة إلى موعدك دون أي تأخير." },
  { image: Feat5, title: "خبراء التجميل", description: "استرخِ بين أيدي محترفين مهرة يضمنون أن كل تفصيل يكون على ما يرام." },
  { image: Feat6, title: "مزايا حصرية", description: "فقط مع SaloonGlow - كلما اعتنيت بنفسك، زادت المكافآت التي تحصل عليها!" },
];

const FeatureItem: React.FC<{ image: StaticImageData; title: string; description: string; index: number }> = ({ image, title, description, index }) => (
  <motion.div 
    className="feat text-right"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
  >
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
    >
      <Image src={image} width={80} height={80} className="img-fluid mb-2 iconWidth" alt={title} />
    </motion.div>
    <motion.h4 
      className="fw-semibold textHadd mt-2 custFontHadd"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h4>
    <motion.p 
      className="fw-normal textPara custFontPara"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
      viewport={{ once: true }}
    >
      {description}
    </motion.p>
  </motion.div>
);

const FeatureSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
  <motion.div 
    className="webMarg" 
    id="customers"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={containerVariants}
  >
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <HaddingSection heading="العملاء" subheading="استمتع بأفضل تجربة صالون في المدينة" />
      </motion.div>
      <div className="row d-flex justify-content-center">
        {/* Left Column - Features */}
        <motion.div 
          className="col-lg-3 col-md-4 col-12 order-lg-1 order-md-2 order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.slice(0, 3).map((feat, index) => (
            <FeatureItem key={index} {...feat} index={index} />
          ))}
        </motion.div>

        {/* Center Column - Image */}
        <motion.div 
          className="col-lg-6 col-md-4 col-12 order-lg-2 order-md-1 order-1"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={MblVec} width={550} height={660} className="img-fluid" alt="ميزة التطبيق" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Features with Right Alignment */}
        <motion.div 
          className="col-lg-3 col-md-4 col-12 text-end order-lg-3 order-md-3 order-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.slice(3).map((feat, index) => (
            <FeatureItem key={index + 3} {...feat} index={index + 3} />
          ))}
        </motion.div>
      </div>
    </div>
  </motion.div>
  );
};

export default FeatureSection;
