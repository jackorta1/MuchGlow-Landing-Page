import React from "react";
import Image from "next/image";
import oval1 from "../../../public/oval1.jpg";
import oval2 from "../../../public/oval2.jpg";
import oval3 from "../../../public/oval3.jpg";

const OvalImage = () => {
  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 col-12">
          <div className="text-center">
            <div className="d-flex justify-content-around align-items-center gap-3">
              <div className="d-flex flex-column justify-content-center mt-4 text-center">
                <div className="d-flex justify-content-center align-items-center mb-3 p-4">
                  <Image
                    alt=""
                    className="ovalImage img-fluid"
                    width={300}
                    height={517}
                    src={oval1}
                  />
                </div>
              </div>
            </div>
            <h4>Simplify Appointments</h4>
            <p className="texPara">
              Our innovative booking system automates and streamlines scheduling with an easy-to-use interface.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-12">
          <div className="text-center">
            <div className="d-flex justify-content-around align-items-center gap-3">
              <div className="d-flex flex-column justify-content-center mt-4 text-center">
                <div className="d-flex justify-content-center align-items-center mb-3 p-4">
                  <Image
                    alt=""
                    className="ovalImage img-fluid"
                    width={300}
                    height={517}
                    src={oval2}
                  />
                </div>
              </div>
            </div>
            <h4>Style in No Time</h4>
            <p className="texPara">
              No more delays&mdash;your saloon can focus on delivering great service without the hassle of manual bookings.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-12">
          <div className="text-center">
            <div className="d-flex justify-content-around align-items-center gap-3">
              <div className="d-flex flex-column justify-content-center mt-4 text-center">
                <div className="d-flex justify-content-center align-items-center mb-3 p-4">
                  <Image
                    alt=""
                    className="ovalImage img-fluid"
                    width={300}
                    height={517}
                    src={oval3}
                  />
                </div>
              </div>
            </div>
            <h4>Grow with Insights</h4>
            <p className="texPara">
              With advanced data analytics, understand your clients better and enhance your saloon&apos;s performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OvalImage;
