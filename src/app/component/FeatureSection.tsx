import React from 'react';
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
  { image: Feat1, title: "🌟 Experience & Indulge", description: "Discover a handpicked selection of premium Salons offering unparalleled services and luxurious experiences! ✨💎" },
  { image: Feat2, title: "🎯 Tailored to You", description: "From haircuts to spa treatments, every service is customized to your needs because you deserve nothing less than perfection! 👑💅" },
  { image: Feat3, title: "💳 Seamless Booking", description: "Secure your appointment effortlessly with Credit/Debit card, Apple Pay, or the MuchGlow wallet! 📱⚡" },
  { image: Feat4, title: "⏰ No Wait Times", description: "Book before you arrive, and step straight into your appointment without delay! 🚀✅" },
  { image: Feat5, title: "💄 Expert Stylists", description: "Relax in the hands of highly skilled professionals who ensure every detail is just right! 👩‍🎨🏆" },
  { image: Feat6, title: "🎁 Exclusive Perks", description: "Only with MuchGlow – the more you pamper yourself, the more rewards you earn! 💖" },
];









const FeatureItem: React.FC<{ image: StaticImageData; title: string; description: string }> = ({ image, title, description }) => (
    <div className="feat-card feat text-right p-3 mb-4">
      <div className="feat-icon-container mb-3">
        <Image src={image} width={80} height={80} className="img-fluid mb-2 iconWidth feat-icon" alt={title} loading="lazy" />
      </div>
      <h4 className="gradient-text fw-bold textHadd mt-2 custFontHadd">{title}</h4>
      <p className="fw-normal textPara custFontPara">{description}</p>
    </div>
  );
  
  const FeatureSection = () => (
    <div className="webMarg" id='customers'>
      <div className="container">
        <HaddingSection heading="Customers" subheading="Enjoy the Finest Salon Experience in Town" />
        <div className="row d-flex justify-content-center">
          {/* Left Column - Features */}
          <div className="col-lg-3 col-md-4 col-12 order-lg-1 order-md-2 order-2">
            {features.slice(0, 3).map((feat, index) => (
              <FeatureItem key={index} {...feat} />
            ))}
          </div>
  
          {/* Center Column - Image */}
          <div className="col-lg-6 col-md-4 col-12 order-lg-2 order-md-1 order-1">
            <div className="text-center">
              <Image src={MblVec} width={550} height={660} className="img-fluid" alt="App Feature" />
            </div>
          </div>
  
          {/* Right Column - Features with Right Alignment */}
          <div className="col-lg-3 col-md-4 col-12 text-end order-lg-3 order-md-3 order-3">
            {features.slice(3).map((feat, index) => (
              <FeatureItem key={index + 3} {...feat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
  

export default FeatureSection;
