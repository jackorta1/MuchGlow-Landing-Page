import React from 'react'
import Image from 'next/image'
import Abt1 from "../../../public/abt1.png"
import Abt2 from "../../../public/abt2.png"
import Abt3 from "../../../public/abt3.png"

const AboutAppSection = () => {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-4 col-12'>
        <div className='text-center'>
        <div className="d-flex justify-content-around align-items-center gap-3">
  <div className="d-flex flex-column justify-content-center mt-4 text-center">
    <div className="abtCircle1 d-flex justify-content-center align-items-center rounded-circle w-20 h-20 mb-3 p-4">
      <Image
        alt="Appointment booking icon"
        className=" "
        width={70}
        height={70}
        src={Abt1}
        loading="lazy" 
      />
    </div> 
  </div>
</div>
<h4 className="gradient-text">📅 Appointment</h4>  
    <p className="texPara">📱 Book your appointment now and<br/>avoid the wait! ⚡</p>
        </div>
        </div>

        <div className='col-md-4 col-12'>
        <div className='text-center'>
        <div className="d-flex justify-content-around align-items-center gap-3">
  <div className="d-flex flex-column justify-content-center mt-4 text-center">
    <div className="abtCircle2 d-flex justify-content-center align-items-center rounded-circle w-20 h-20 mb-3 p-4">
      <Image
        alt="Loyalty stickers and rewards icon"
        className=" "
        width={70}
        height={70}
        src={Abt2}
        loading="lazy" 
      />
    </div> 
  </div>
</div>
<h4 className="gradient-text">🎟️ Stickers</h4>  
    <p className="texPara">🏆 You Can Collect stamp cards<br/>
to earn free Service! 🎁</p>

    

        </div>
        </div>

        <div className='col-md-4 col-12'>
        <div className='text-center'>
        <div className="d-flex justify-content-around align-items-center gap-3">
  <div className="d-flex flex-column justify-content-center mt-4 text-center">
    <div className="abtCircle3 d-flex justify-content-center align-items-center rounded-circle w-20 h-20 mb-3 p-4">
      <Image
        alt="Gift sending and receiving icon"
        className=" "
        width={70}
        height={70}
        src={Abt3}
        loading="lazy" 
      />
    </div> 
  </div>
</div>
<h4 className="gradient-text">🎁 Gifts</h4>  
    <p className="texPara">💝 Send and receive gifts<br/>
with your friends! 👫✨</p>
    

        </div>
        </div>
    
        
      </div>
 

         <div className='webMarg'>
      <div className="row d-flex justify-content-center">
        {/* Video Section */}
        <div className="col-lg-8 col-md-12 col-12">
        <video className="w-100" controls preload="metadata" playsInline>
            <source
              src="https://videos.pexels.com/video-files/5226462/5226462-hd_1920_1080_30fps.mp4"
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Text Section */}
        <div className="col-lg-4 col-md-12 col-12"> 
          <div className='details'>
            <div className='d-flex'>
            <span className='brdr'></span>
            <h6 className='colored'>MUCHGLOW</h6>
            </div>
            
<h2 className='gradient-hero-text display-6 fw-bold mt-3'>⚡ The fastest way to 
get your perfect look! 💫</h2>
<p className='lh-lg fs-5 fw-normal my-lg-5'> 
✅ Simplify Booking Management<br/>
🎯 Customer Loyalty Programs<br/>
📊 Improve with Data Analytics<br/>
🌟 24/7 Premium Support
            </p>
          </div> 
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutAppSection;
