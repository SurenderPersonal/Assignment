import React from "react";
import googleImg from "../assets/Images/google.jpg";

const MainPage = () => {
  return (
    <>
      <form className="flex flex-col items-center pt-3 flex-grow w-4/5">
        <img src={googleImg} className="w-96 h-56" />
        <div
          className="flex w-full mt-0 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full
      border border-gray-200 px-5 py-3 items-center"
        >
          <input type="text" className="flex-grow focus:outline-none" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 font-Ubuntu">
          <button className="bg-gray-200 bg-opacity-50 p-2">
            Google Search
          </button>

          <button className="bg-gray-200 bg-opacity-50 p-2">
            <a> I&apos;m Feeling Lucky</a>
          </button>
        </div>

        <div className="flex link justify-center text-sm mt-7 pr-1 text-blue-700 items-center md:col-span-2 font-Ubuntu">
          <a>
            Google offered in: हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ
            മലയാളം ਪੰਜਾਬੀ
          </a>
        </div>
      </form>
    </>
  );
};

export default MainPage;
