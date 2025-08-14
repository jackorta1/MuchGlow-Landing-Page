"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

const AccordionData = () => (
  <div className="webMarg container">
    <div className="row justify-content-center">
      <div className="col-lg-5 text-center text-lg-start">
        <h6 className="fs-6 fw-semibold">Support</h6>
        <h3 className="colored display-4 fw-bold">FAQS</h3>
        <p className="fs-5 w-75 mx-auto mx-lg-0 lh-base">
          Everything you need to know about our app. Can’t find the answer
          you’re looking for? Contact us at&nbsp;
          <a
            href="mailto:support@muchglow.com"
            className="textPara fw-bold text-decoration-none"
          >
            support@muchglow.com
          </a>
          .
        </p>
      </div>
      <div className="col-lg-7">
        {/* Removed defaultActiveKey to prevent any Accordion from being open by default */}
        <Accordion>
          {[
            {
              title: "What is MuchGlow?",
              body: "MuchGlow is a mobile app revolutionizing Salon and spa service bookings, offering personalized rewards and seamless experiences.",
            },
            {
              title: "Is MuchGlow a Salon home-service app?",
              body: "No, it streamlines in-Salon appointments and curbside pickups with loyalty programs for Salons and clients.",
            },
            {
              title: "How Do I register my Salon?",
              body: "Complete the Become a Partner form, and our team will connect within 24 hours to onboard you.",
            },
            {
              title: "Is Payment done on MuchGlow for services?",
              body: "Yes, secure payments are made via Apple Pay, cards, or an in-app wallet.",
            },
          ].map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body className="textPara fs-5">
                {item.body}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);

export default AccordionData;
