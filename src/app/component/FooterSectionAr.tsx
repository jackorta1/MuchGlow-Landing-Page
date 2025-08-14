"use client";
import React from "react";
import Link from "next/link";
import SalLogo from "../../../public/salonglow.png";
import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterSectionAr = () => {
  return (
    <div className="partBg">
      <div className="container">
        <footer className=" ">
          <div className="container">
            <div className="text-center mb-4">
              <Image
                src={SalLogo}
                alt="شعار الصالون"
                width={200}
                className="mb-3"
              />
              <p className="fs-5 fw-normal text-white lh-base">
                تطبيق مَتش غلو يبسط عملية حجز المواعيد للصالونات،
                <br /> المنزل، أو الاستشارات الافتراضية، ويعزز ولاء العملاء
                <br /> من خلال مكافآت مخصصة.
                {/* </strong> */}
              </p>
            </div>

            {/* <div className="d-flex justify-content-center mb-4">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 colored"
              >
                <FontAwesomeIcon icon={faInstagram} className='fs-3' />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 colored"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className='fs-3' />
              </Link>
            </div> */}

            <hr className="text-light" />

            <div className="row text-center pt-3">
              <div className="col-md-4">
                <h5 className="text-white-50 text-end">المقر الرئيسي</h5>
                <ul className="list-unstyled text-end m-0">
                  <li className="lh-base">
                    <Link
                      href=" "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light text-decoration-none costo lh-lg"
                    >
                      العين، الإمارات العربية المتحدة
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="mailto:⁠support@muchglow.com"
                      className="text-light lh-base text-decoration-none costo lh-lg"
                    >
                      ⁠support@muchglow.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 ">
                <h5 className="text-white-50 cstPositionZero">
                  احصل على التطبيق
                </h5>
                <div className="clearfix"></div>
                <ul className="list-unstyled cstPositionZero">
                  <li className="lh-base">
                    <Link
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light text-decoration-none lh-lg costo"
                    >
                      App Store
                    </Link>
                  </li>
                  <li className="lh-base">
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light text-decoration-none lh-lg costo"
                    >
                      Google App
                    </Link>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <div className="col-md-4 ">
                <h5 className="text-white-50 cstPositionAr text-start">
                  مركز المساعدة
                </h5>
                <div className="clearfix"></div>
                <ul className="list-unstyled cstPositionAr text-start">
                  <li className="lh-base">
                    <Link
                      href="/ar/terms"
                      className="text-light text-decoration-none lh-lg costo"
                    >
                      الشروط والأحكام
                    </Link>
                  </li>
                  <li className="lh-base">
                    <Link
                      href="/ar/privacy"
                      className="text-light text-decoration-none lh-lg costo"
                    >
                      سياسة الخصوصية
                    </Link>
                  </li>
                  {/* <li className='lh-base'>
                    <Link href="/ar/delete-account" className="text-light text-decoration-none lh-lg costo">
                      حذف حسابي
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <hr className="text-light" />

            <div className="text-center">
              <p className="mb-0">
                <strong className="colored">مَتش غلو - </strong>
                جميع الحقوق محفوظة Ⓒ {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterSectionAr;
