"use client";

import Image from "next/image";
import React, { useState } from "react";
import partvec from "../../../public/partvect.png";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const PartnerSection = () => {
  const [formData, setFormData] = useState({
    salonName: "",
    phoneNumber: "",
    contactName: "",
    country: "",
    email: "",
    city: "",
    instaAccount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clean the phone number to match the required pattern
    const cleanPhoneNumber = formData.phoneNumber.replace(/[^\d+]/g, "");

    const payload = {
      salonName: formData.salonName,
      phoneNumber: cleanPhoneNumber, // Use cleaned phone number
      contactName: formData.contactName,
      country: formData.country,
      email: formData.email || undefined,
      city: formData.city,
      instaAccount: formData.instaAccount || null,
    };

    try {
      const response = await fetch(
        "https://api.muchglow.com/api/v1/salon/RegisterSalon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Request Has been successfully submitted"); // Show success toast notification
        setFormData({
          salonName: "",
          phoneNumber: "",
          contactName: "",
          country: "",
          email: "",
          city: "",
          instaAccount: "",
        });
      } else {
        toast.error(data.message || "Something went wrong."); // Show error toast notification
      }
    } catch {
      toast.error("Something went wrong. Please try again."); // Show error toast notification
    }
  };

  return (
    <div className="partBg" id="partner">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-7 col-md-12 col-12">
            <div className="mb-4">
              <h2
                className="text-white fw-bold mb-3"
                style={{ fontSize: "45px", textAlign: "left" }}
              >
                BECOME A PARTNER
              </h2>
              <p
                className="fw-medium mb-4 colored"
                style={{ fontSize: "40px", textAlign: "left" }}
              >
                Join us now
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <p
                  className="text-white mb-4"
                  style={{
                    fontSize: "20px",
                    lineHeight: "2rem",
                    textAlign: "left",
                  }}
                >
                  Please fill in the following form and we will contact you
                  within 24 hours:
                </p>
              </div>
              <div className="row mb-3">
                <div className="col-lg-6 col-md-6 col-12 mb-3">
                  <label htmlFor="salonName" className="form-label">
                    Salon name*
                  </label>
                  <input
                    type="text"
                    id="salonName"
                    name="salonName"
                    placeholder="#salonname"
                    className="form-control form-control-lg styledInput"
                    value={formData.salonName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone*
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="#phone"
                    className="form-control form-control-lg styledInput"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-6 col-md-6 col-12 mb-3">
                  <label htmlFor="contactName" className="form-label">
                    Contact name*
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    placeholder="#contactName"
                    className="form-control form-control-lg styledInput"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <label htmlFor="country" className="form-label">
                    Country*
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="#country"
                    className="form-control form-control-lg styledInput"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-6 col-md-6 col-12 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="@gmail.com"
                    className="form-control form-control-lg styledInput"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <label htmlFor="city" className="form-label">
                    City*
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="#city"
                    className="form-control form-control-lg styledInput"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-6 col-md-6 col-12">
                  <label htmlFor="instagram" className="form-label">
                    Instagram Account (optional)
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    placeholder="@yourInstagram"
                    className="form-control form-control-lg styledInput"
                    value={formData.instaAccount}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-grid gap-2 me-4">
                <button
                  type="submit"
                  className="col-md-6 col-12 btn btn-primary rounded-3 fs-6 px-3 py-3 fw-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-5 col-md-12 col-12 text-center">
            <Image
              src={partvec}
              width={498}
              className="img-fluid"
              height={818}
              alt="..."
            />
            <p className="text-white fs-5 fw-light mt-3 lh-base">
              If you have any questions about becoming a partner, please email
              us at{" "}
              <Link
                href="mailto:⁠sales@muchglow.com"
                className="colored text-decoration-none"
              >
                ⁠sales@muchglow.com
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
      />
    </div>
  );
};

export default PartnerSection;
