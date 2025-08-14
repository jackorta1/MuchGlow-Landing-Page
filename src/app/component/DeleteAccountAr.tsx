"use client";
import Image from "next/image";
import React, { useState } from "react";
import Sid from "../../../public/side.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Verif from "../../../public/check verified.png";
import Logo from "../../../public/logo.png";

const DeleteAccountAr: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (!phoneNumber) {
      setErrorMessage("رقم الهاتف مطلوب");
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        setShowPopup(true); // عرض النافذة المنبثقة للنجاح
        setErrorMessage(""); // مسح رسالة الخطأ
        setPhoneNumber(""); // مسح حقل رقم الهاتف
      } else {
        setErrorMessage("فشل إرسال الطلب. يرجى المحاولة مرة أخرى.");
      }
    } catch {
      setErrorMessage("حدث خطأ. يرجى المحاولة مرة أخرى.");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container-fluid m-0 p-0">
      <div className="row">
        {/* الشريط الجانبي */}
        <div className="col-lg-3 col-md-12 col-12 disNone">
          <div className="row">
            <div>
              <Image
                src={Sid}
                width={400}
                className="img-fluid position-fixed d-block sideImg"
                alt="صورة جانبية"
              />
            </div>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="col-lg-9 col-md-12 col-12">
          {/* العودة إلى الصفحة الرئيسية */}
          <div id="back-home-content" className="mt-5 me-lg-5 me-md-3">
            <Link href="/ar" className="textHadd fw-semibold fs-4 text-decoration-none">
              <FontAwesomeIcon icon={faChevronRight} className="ms-4" />
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>

          {/* محتوى حذف الحساب */}
          <div id="delete-content" className="d-flex flex-column align-items-center">
            <Image src={Logo} width={150} className="img-fluid" alt="الشعار" />
            <p className="display-6 mb-5 mt-4">حذف الحساب</p>
            <div className="clearfix"></div>
            <div id="delete-form" className="col-md-5 col-12">
              <h6 className="fs-4 mt-3 fw-bold">أدخل رقم هاتفك</h6>
              <div id="delete-form-input ms-3">
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg" className="ms-3">+971</InputGroup.Text>
                  <Form.Control
                    aria-label="Large" className="form-control-01"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="رقم الهاتف"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </InputGroup>
              </div>
              {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-primary rounded-3 fs-6 mt-4 px-3 py-3 fw-semibold"
                  onClick={handleSubmit}
                >
                  إرسال
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* النافذة المنبثقة للنجاح */}
      <Modal show={showPopup} onHide={handleClosePopup} centered className="text-center p-5">
        <Modal.Body className="my-3">
          <div className="text-center">
            <Image src={Verif} width={100} height={100} alt="..." />
          </div>
          <p className="fs-6 m-0 p-0">
            شكرًا للتواصل معنا، تم إرسال طلبك إلى فريق الدعم لدينا. سنتواصل معك قريبًا لتأكيد
            وبدء عملية الحذف.
          </p>
          <div className="clearfix"></div>
          <button
            type="button"
            className="btn btn-primary rounded-3 fs-6 mt-4 px-3 py-3 fw-semibold"
            onClick={handleClosePopup}
          >
            تم
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteAccountAr;
