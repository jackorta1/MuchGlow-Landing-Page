"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import partvec from "../../../public/partvect.png";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const PartnerSectionAr = () => {
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
        toast.success("تم تقديم الطلب بنجاح"); // Show success toast notification in Arabic
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
        toast.error(data.message || "حدث خطأ أثناء الإرسال."); // Show error toast notification in Arabic
      }
    } catch {
      toast.error("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."); // Show error toast notification in Arabic
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="partBg" 
      id="partner"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <motion.div 
            className="col-lg-7 col-md-12 col-12"
            initial="hidden"
            whileInView="visible"
            variants={slideInLeft}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-white display-5 fw-bold mb-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                انضم إلى شريكنا
              </motion.h2>
              <motion.p 
                className="fw-normal mb-4 colored display-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                انضم إلينا الآن
              </motion.p>
            </motion.div>
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-white mb-4 mt-2 fs-5 lh-base">
                يرجى تعبئة النموذج التالي وسنتواصل معك في غضون 24 ساعة:
              </p>

              <div className="row mb-3">
                <div className="col-lg-6 mb-3">
                  <label htmlFor="salonName" className="form-label">
                    اسم الصالون*
                  </label>
                  <input
                    type="text"
                    name="salonName"
                    value={formData.salonName}
                    onChange={handleChange}
                    placeholder="#اسم_الصالون"
                    className="form-control form-control-lg styledInput"
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="phoneNumber" className="form-label">
                    الهاتف*
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="#الهاتف"
                    className="form-control form-control-lg styledInput"
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6 mb-3">
                  <label htmlFor="contactName" className="form-label">
                    اسم الشخص المسؤول*
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="#اسم_الشخص_المسؤول"
                    className="form-control form-control-lg styledInput"
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="country" className="form-label">
                    البلد*
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="#البلد"
                    className="form-control form-control-lg styledInput"
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    البريد الإلكتروني*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="@gmail.com"
                    className="form-control form-control-lg styledInput"
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="city" className="form-label">
                    المدينة*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="#المدينة"
                    className="form-control form-control-lg styledInput"
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6">
                  <label htmlFor="instaAccount" className="form-label">
                    حساب إنستغرام (اختياري)
                  </label>
                  <input
                    type="text"
                    name="instaAccount"
                    value={formData.instaAccount}
                    onChange={handleChange}
                    placeholder="@إنستغرامك"
                    className="form-control form-control-lg styledInput"
                  />
                </div>
              </div>

              <div className="d-grid gap-2 ms-4">
                <button
                  type="submit"
                  className="col-md-6 col-12 btn btn-primary rounded-3 fs-6 px-3 py-3 fw-semibold"
                >
                  إرسال
                </button>

                <div className="text-center">
                  <p
                    className="text-end text-capitalize text-light"
                    style={{ lineHeight: "2rem", margin: "auto" }}
                  >
                    أنا بالفعل شريك؟&nbsp;
                    <a href="/login" className="colored">
                      تسجيل الدخول
                    </a>
                  </p>
                </div>
              </div>
            </motion.form>
          </motion.div>

          <motion.div 
            className="col-lg-5 col-md-12 col-12 text-center"
            initial="hidden"
            whileInView="visible"
            variants={slideInRight}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={partvec}
                width={498}
                height={818}
                className="img-fluid"
                alt="..."
              />
            </motion.div>
            <motion.p 
              className="text-white fs-5 fw-normal mt-3 lh-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              إذا كانت لديك أي أسئلة حول أن تصبح شريكًا، يرجى إرسال بريد
              إلكتروني إلينا على
              <Link
                href="mailto:⁠sales@muchglow.com"
                className="colored text-decoration-none"
              >
                {" "}
                ⁠sales@muchglow.com
              </Link>
              .
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar newestOnTop />
    </motion.div>
  );
};

export default PartnerSectionAr;
