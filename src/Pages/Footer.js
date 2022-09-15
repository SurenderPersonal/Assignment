import React from "react";

const Footer = () => {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-400 bg-gray-100 text-gray-500 font-OpenSans">
      <div className="px-8 py-3">
        <p>India</p>
      </div>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center text-sm space-x-5 whitespace-nowrap md:justify-self-start">
          <a>
            <p>About</p>
          </a>
          <a>
            <p>Advertising</p>
          </a>
          <a>
            <p>Business</p>
          </a>
          <a>
            <p>How Search Works</p>
          </a>
        </div>
        <div className="flex justify-end text-sm space-x-5 md:ml-auto">
          <a>
            <p>Privacy</p>
          </a>
          <a>
            <p>Terms</p>
          </a>
          <a>
            <p>Settings</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
