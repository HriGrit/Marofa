import React from "react";
import logo from "../../assets/marofa-logo-footer.png";
// import stripe from "../../assets/stripeimg.png";
const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] shadow-inner shadow-black shadow-4xl h-auto">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex justify-center items-center text-center">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              className="h-[80px] me-3 md:h-[100px]"
              alt="Footer logo"
            />
            <span className="text-2xl text-theme font-semibold whitespace-nowrap md:text-4xl pt-0">
              MAROFA
            </span>
          </a>
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 justify-center">
            <div>
              {/* <h2 className="mb-6 text-lg font-semibold text-[#2D2D2D] uppercase">
                Support
              </h2> */}
              <ul className="text-[#5D5D5D] font-semibold">
                {/* <li className="mb-2">
                  <a href="/" className="hover:underline">
                    Contact us
                  </a>
                </li> */}
                {/* <li className="mb-2">
                  <a href="/helpers" className="hover:underline">
                    Find helpers
                  </a>
                </li> */}
                {/* <li className="mb-2">
                                    <a href="/#faq" className="hover:underline">FAQs</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="hover:underline">About us</a>
                                </li> */}
              </ul>
            </div>
            <div>
              {/* <h2 className="mb-6 text-lg font-semibold text-[#2D2D2D] uppercase">
                Join us
              </h2> */}
              <ul className="text-[#5D5D5D] font-semibold">
                {/* <li className="mb-2">
                  <a href="/signUp" className="hover:underline">
                    Register
                  </a>
                </li> */}
                {/* <li className="mb-2">
                  <a href="/signIn" className="hover:underline">
                    Log in
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center pt-4">
          <img
            src={stripe}
            className="h-[60px] me-3 md:h-[60px]"
            alt="stripepay"
          />
        </div> */}

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center items-center text-center">
          <span className="text-lg text-theme sm:text-center">
            © 2024{" "}
            <a href="/" className="hover:underline">
              MAROFA
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
