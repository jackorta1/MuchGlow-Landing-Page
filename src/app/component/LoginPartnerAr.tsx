import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from "../../../public/logo.png";

const LoginPartnerAr = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4 m-auto py-5'>
        <div className='loginCont'>
          <div className="">
            <div className="logo text-center my-4">
              <Link href="/" title="Much Glow">
                <Image src={Logo} width={200} height={24} alt="Much Glow" />
              </Link>
            </div>
            <h4 className='fs-4 fw-semibold'>تسجيل دخول الشريك</h4>
            <p className="fs-5 text-start">أدخل بياناتك لتسجيل الدخول</p>
            <form id="loginForm" method="post">
              <div className="vertical-input-group">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control p-3"
                    id="userName"
                    required
                    placeholder="اسم المستخدم"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control p-3"
                    id="loginPassword"
                    required
                    placeholder="كلمة المرور"
                  />
                </div>
              </div>
              <div className="d-grid my-4">
                <button className="btn btn-primary rounded-3 fs-6 mt-4 px-3 py-3 fw-semibold shadow-none" type="submit">
                  تسجيل الدخول
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPartnerAr;
