import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'; // Importing the icon
import Gal1 from '../../../public/gal1.jpg';
import Gal2 from '../../../public/gal2.jpg';
import HaddingSection from './HaddingSection';

const GalleryySection = () => {
  return (
    <div className="webMarg" id='gallery'>
      <div className="container">
        <HaddingSection heading={'Gallery'} subheading={' '} />
        <div className="d-block justify-content-center">
          <div className="row">
            {/* Responsive Video Section */}
            <div className="col-lg-9 col-md-12 col-12">
              <div className="ratio ratio-16x9">
                <div className="custom-ratio">
                  <video className="custom-video" controls preload="metadata" playsInline>
                    <source
                      src="https://videos.pexels.com/video-files/5226462/5226462-hd_1920_1080_30fps.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            {/* Image Gallery Section */}
            <div className="col-lg-3 col-md-12 col-12 mt-sm-4 mt-lg-0">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-12">
              <div className="mb-4">
                <Image src={Gal1} width={925} className="img-fluid galImag" height={716} alt="Professional salon interior and services" loading="lazy" />
              </div>
              </div>
              <div className="col-lg-12 col-md-6 col-12">
              <div>
                <Image src={Gal2} width={925} height={716} className="img-fluid galImag" alt="Beauty treatment and styling session" loading="lazy" />
              </div>
              </div>
            </div>
            </div>
          </div>
          {/* View More Link with Icon */}
<a href="/en/gallery" className="magical-btn btn btn-primary fs-5 fw-bold text-decoration-none float-end viewMore d-flex align-items-center px-4 py-2 rounded-pill">
            🎨 View More Gallery ✨ <FontAwesomeIcon icon={faCircleArrowRight} className="fs-4 ms-2" />
          </a>
          <div className='clearfix'></div>
        </div>
      </div>
    </div>
  );
};

export default GalleryySection;
