import React from "react";

const Nav = () => {
  return (
    <header className="flex w-full p-5 justify-end text-sm text-gray-800">
      <div className="flex space-x-4 font-Ubuntu items-center">
        <a>
          <p>Gmail</p>
        </a>
        <a>
          <p>Images</p>
        </a>
      </div>
    </header>
  );
};

export default Nav;
