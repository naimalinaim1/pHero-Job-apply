import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1919] py-32 text-center sm:text-left">
      <div className="text-gray-500 w-[96%] max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20">
        {/* logo */}
        <div>
          <h3 className="text-2xl mb-3 text-white font-bold">pHero</h3>
          <p className="leading-8">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
        </div>
        {/* company */}
        <div>
          <h1 className="text-xl text-white font-bold">Company</h1>
          <ul>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Work</a>
            </li>
            <li>
              <a>Latest News</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
          </ul>
        </div>
        {/* product */}
        <div>
          <h1 className="text-xl text-white font-bold">Product</h1>
          <ul>
            <li>
              <a>Prototype</a>
            </li>
            <li>
              <a>Plans & pricing</a>
            </li>
            <li>
              <a>Customers</a>
            </li>
            <li>
              <a>Integrations</a>
            </li>
          </ul>
        </div>
        {/* support */}
        <div>
          <h1 className="text-xl text-white font-bold">Support</h1>
          <ul>
            <li>
              <a>Help Desk</a>
            </li>
            <li>
              <a>Sales</a>
            </li>
            <li>
              <a>Become a Partner</a>
            </li>
            <li>
              <a>Developers</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
