import React from 'react';
import Image from 'next/image'

const clientLogos = [
    '/sld1.png',
    '/sld2.png',
    '/sld3.png',
    '/sld4.png',
    '/sld5.png',
    '/sld6.png',
];

const ClientSlide: React.FC = () => {
  return (
    <div className="ticker-container">
      <div className="ticker-content">
        {clientLogos.map((logo, index) => (
          <div className="ticker-item" key={index}>
            <Image src={logo} width={150} height={82} alt={`Client Logo ${index + 1}`} />
          </div>
        ))}
         {[...clientLogos, ...clientLogos].map((logo, index) => (
          <div className="ticker-item" key={index}>
            <Image src={logo} width={150} height={82} alt={`Client Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSlide;
