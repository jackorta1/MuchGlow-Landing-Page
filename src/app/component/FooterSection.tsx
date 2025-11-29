import React from "react";
import Link from "next/link";
import SalLogo from "../../../public/muchglow.png";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <div className="partBg">
      <div className="container">
        <footer className=" ">
          <div className="container">
            <div className="text-center mb-4">
              <Image
                src={SalLogo}
                alt="Salon Logo"
                width={200}
                className="mb-3"
              />
              <p className="fs-5 fw-normal text-white">
                MuchGlow App Simplifies Salon Appointment Booking For In-Salon,
                <br /> At-Home, Or Virtual Consultations, And Enhances Client
                <br /> Retention With Personalized Rewards.
                <br />
                <br />
                {/* MuchGlow is owned by{" "}

                <strong className="colored">Salem Slayem Alameri For
                Electronic Services.</strong> */}
              </p>
            </div>
            {/* 
            <div className="d-flex justify-content-center mb-4">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 colored"
              >
                <FontAwesomeIcon icon={faInstagram} className="fs-3" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 colored"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="fs-3" />
              </Link>
            </div> */}

            <hr className="text-light" />

            <div className="row text-center pt-3">
              <div className="col-md-4">
                <h5 className="text-white-50 text-start">HEAD OFFICE</h5>
                <ul className="list-unstyled text-start  m-0">
                  <li className="lh-base">
                    <Link
                      href=" "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light text-decoration-none costo lh-lg"
                    >
                      Al Ain, UAE
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="mailto:support@muchglow.com"
                      className="text-light lh-base text-decoration-none costo lh-lg"
                    >
                      support@muchglow.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 ">
                <h5 className="text-white-50 cstPositionZero">GET THE APP</h5>
                <div className="clearfix"></div>
                <ul className="list-unstyled cstPositionZero">
                  <li className="lh-base">
                    <Link
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light  text-decoration-none lh-lg costo"
                    >
                      App Store
                    </Link>
                  </li>
                  <li className="lh-base">
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light  text-decoration-none lh-lg costo"
                    >
                      Google App
                    </Link>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <div className="col-md-4 ">
                <h5 className="text-white-50  cstPosition">HELP CENTER</h5>
                <div className="clearfix"></div>
                <ul className="list-unstyled cstPosition">
                  <li className="lh-base">
                    <Link
                      href="/en/terms"
                      className="text-light  text-decoration-none lh-lg costo"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="lh-base">
                    <Link
                      href="/en/privacy"
                      className="text-light  text-decoration-none lh-lg costo"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  {/* <li className="lh-base">
                    <Link
                      href="/en/delete-account"
                      className="text-light text-decoration-none lh-lg costo"
                    >
                      Delete my account
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <hr className="text-light" />

            <div className="d-none justify-content-center mb-4 ">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 colored"
              >
                <FontAwesomeIcon icon={faInstagram} className="fs-3" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 colored"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="fs-3" />
              </Link>
            </div>

            <div className="text-center">
              <p className="mb-0">
                <strong className="colored">MuchGlow - </strong>
                All rights reserved Ⓒ {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterSection;
