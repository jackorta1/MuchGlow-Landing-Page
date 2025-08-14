import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/logo.png";
const LoginPartner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4 m-auto py-5">
        <div className="loginCont">
          <div className="">
            <div className="logo text-center my-4">
              <Link href="/" title="Muchglow">
                <Image src={Logo} width={200} alt="Muchglow" />
              </Link>
            </div>
            <h4 className="fs-4 fw-semibold">Partner Login</h4>
            <p className="fs-5 text-start">Enter your Credential to Login</p>
            <form id="loginForm" method="post">
              <div className="vertical-input-group">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control p-3"
                    id="userName"
                    required
                    placeholder="Username"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control p-3"
                    id="loginPassword"
                    required
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="d-grid my-4">
                <button
                  className="btn btn-primary rounded-3 fs-6 mt-4 px-3 py-3 fw-semibold shadow-none"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPartner;
