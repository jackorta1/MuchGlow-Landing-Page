import Image from 'next/image';
import React from 'react';
import HaddingSection from './HaddingSection';

const images = [
  "/gal3.jpg", "/gal4.jpg",
  "/gal5.jpg", "/gal6.jpg", "/gal7.jpg", "/gal8.jpg",
  "/gal9.jpg", "/gal10.jpg", "/gal11.jpg", "/gal12.jpg",
  "/gal13.jpg", "/gal14.jpg",
];

const GalleryPage = () => (
  <div className='webMargGal'> 
    <div className='container-fluid'>
      <HaddingSection heading="Gallery" subheading=" " />
      <div className='row'>
        {images.map((src, index) => (
          <div key={index} className='col-lg-3 col-md-4 col-12 m-0 p-0'>
            <Image src={src} alt={`Gallery image ${index + 1}`} className='img-fluid' width={500} height={500} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default GalleryPage;
