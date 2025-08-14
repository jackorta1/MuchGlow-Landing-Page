import React from "react";

type PrivacyPageSectionProps = {
  title: string;
  content: React.ReactNode;
};

const PrivacyPageSection: React.FC<PrivacyPageSectionProps> = ({ title, content }) => (
  <div className="article">
    <h2 className="display-6 fw-bold fs-4">{title}</h2>
    {content}
  </div>
);

type PrivacyPagesProps = {
  sections: { title: string; content: React.ReactNode }[];
};

const PrivacyPages: React.FC<PrivacyPagesProps> = ({ sections }) => {
  return (
    <div className="webMarg">
      <div className="container privacy-section">
        {sections.map((section, index) => (
          <PrivacyPageSection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
};

export default PrivacyPages;
