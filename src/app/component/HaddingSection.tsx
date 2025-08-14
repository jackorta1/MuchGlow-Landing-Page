import React from 'react';

interface HaddingSectionProps {
  heading: string;
  subheading: string;
}

const HaddingSection: React.FC<HaddingSectionProps> = ({ heading, subheading }) => {
  return (
    <div className="text-center">
      <h4 className="display-4 fw-bold">{heading}</h4>
      <p className="fs-4 fw-normal mt-2">{subheading}</p>
    </div>
  );
};

export default HaddingSection;
