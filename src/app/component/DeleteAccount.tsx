"use client";
import Image from "next/image";
import React, { useState } from "react";
import Sid from "../../../public/side.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Verif from "../../../public/check verified.png";
import Logo from "../../../public/logo.png";

const DeleteAccount: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (!phoneNumber) {
      setErrorMessage("Phone number is required");
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
        setShowPopup(true); // Show success popup
        setErrorMessage(""); // Clear error message
        setPhoneNumber(""); // Clear the phone number field
      } else {
        setErrorMessage("Failed to submit request. Please try again.");
      }
    } catch {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container-fluid m-0 p-0">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-3 col-md-12 col-12 disNone">
          <div className="row">
            <div>
              <Image
                src={Sid}
                width={400}
                className="img-fluid position-fixed d-block sideImg"
                alt="Side Image"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-lg-9 col-md-12 col-12">
          {/* Back to Home Section */}
          <div id="back-home-content" className="mt-5 ms-lg-5 ms-md-3">
            <Link href="/" className="textHadd fw-semibold text-decoration-none">
              <FontAwesomeIcon icon={faChevronLeft} className="me-4" />
              Back to Home Page
            </Link>
          </div>

          {/* Delete Account Content */}
          <div id="delete-content" className="d-flex flex-column align-items-center">
            <Image src={Logo} width={150} className="img-fluid" alt="Logo" />
            <p className="display-6 mb-5 mt-4">Delete Account</p>
            <div className="clearfix"></div>
            <div id="delete-form" className="col-md-5 col-12">
              <h6 className="fs-6 mt-3 fw-bold">Enter your phone number</h6>
              <div id="delete-form-input">
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">+971</InputGroup.Text>
                  <Form.Control
                    aria-label="Large" className="form-control-01"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Phone Number"
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
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      <Modal show={showPopup} onHide={handleClosePopup} centered className="text-center p-5">
        <Modal.Body className="my-3">
          <div className="text-center">
            <Image src={Verif} width={100} height={100} alt="..." />
          </div>
          <p className="fs-6 m-0 p-0">
            Thank you for reaching out, your request has been forwarded to our support team. We will
            promptly connect with you to confirm and initiate the deletion process.
          </p>
          <div className="clearfix"></div>
          <button
            type="button"
            className="btn btn-primary rounded-3 fs-6 mt-4 px-3 py-3 fw-semibold"
            onClick={handleClosePopup}
          >
            Done
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteAccount;
