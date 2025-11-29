"use client"; // if you're in the app router of Next.js
import React, { useState } from "react";
import Star from "../../../public/star.svg";
import Image from "next/image";
import Bnr from "../../../public/bnrvec.png";
import Button from "react-bootstrap/Button";
import LoadingSpinner from "./LoadingSpinner";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    
    try {
      const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    
      const isAndroid = /android/i.test(userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
      const isWindows = /Windows/i.test(userAgent);
      const isMac = /Macintosh|Mac OS X/i.test(userAgent);
      const isLinux = /Linux/i.test(userAgent);
    
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 1000));
    
      if (isAndroid) {
        // Android Mobile or Linux Desktop
        window.location.href = "https://play.google.com/store";
      } else if (isIOS) {
        // iOS Mobile
        window.location.href = "https://apps.apple.com/";
      } else if (isWindows || isLinux) {
        // Windows or Linux Desktop
        window.location.href = "https://play.google.com/store";
      } else if (isMac) {
        // macOS Desktop
        window.location.href = "https://apps.apple.com/";
      } else {
        // Fallback for unknown devices
        alert("Please open this link on your phone to download the app.");
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="container">
      <div className="webMarg">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-12">
            <div className="custAlign">
              <h1 className="gradient-hero-text fw-bold display-4 mb-4">
                ✨ Your Personal Beauty Assistant 💅
              </h1>
              <p className="hadd fw-normal fs-5 mb-4">
                🌟 MuchGlow makes beauty bookings effortless for in-center, express,
                or curbside services, while enhancing client loyalty with
                tailored rewards! 🎁💖
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <span className="badge bg-light text-dark fs-6 px-3 py-2 rounded-pill">
                  📱 Easy Booking
                </span>
                <span className="badge bg-light text-dark fs-6 px-3 py-2 rounded-pill">
                  🎯 No Wait Times
                </span>
                <span className="badge bg-light text-dark fs-6 px-3 py-2 rounded-pill">
                  🏆 Exclusive Rewards
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <div className="magVect">
              <div className="position-relative text-start me-lg-5">
                <div>
                  <Image
                    src={Bnr}
                    width={550}
                    height={582}
                    className="img-fluid custWidth"
                    alt="MuchGlow mobile app interface showing beauty booking features"
                    priority
                  />
                </div>
                <div className="position-absolute top-100 translate-middle floating-card custoHeroPoints custoHeroPointsEn custStart">
                  <div className="sparkle-container">
                    <span className="sparkle">✨</span>
                    <span className="sparkle">💫</span>
                    <span className="sparkle">⭐</span>
                  </div>
                  <h4 className="gradient-text mb-2">
                    <Image src={Star} width={25} alt="Star Icon" /> +500 Points! 🎉
                  </h4>
                  <p className="fontSm lh-base mb-3">
                    💰 Collect points to convert them to cash 💳
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    className="magical-btn rounded-pill fs-6 px-4 py-3 fw-bold d-flex align-items-center justify-content-center"
                    onClick={handleDownload}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <LoadingSpinner size="sm" color="#fff" />
                        <span className="ms-2">✨ Loading Magic...</span>
                      </>
                    ) : (
                      "🚀 Download Now! 📱"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
