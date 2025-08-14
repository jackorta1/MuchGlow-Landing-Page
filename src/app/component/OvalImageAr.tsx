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
            <h4>تبسيط المواعيد</h4>
            <p className="texPara">
              نظام الحجز المبتكر لدينا يتيح أتمتة وتنظيم الجدولة بسهولة وسرعة باستخدام واجهة سهلة الاستخدام.
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
            <h4>الأناقة في وقت قصير</h4>
            <p className="texPara">
              لا مزيد من التأخيرات&mdash;يمكن لصالونك التركيز على تقديم خدمة رائعة دون عناء الحجوزات اليدوية.
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
            <h4>النمو مع البيانات</h4>
            <p className="texPara">
              باستخدام تحليلات البيانات المتقدمة، افهم عملاءك بشكل أفضل وحسن أداء صالونك.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OvalImage;
