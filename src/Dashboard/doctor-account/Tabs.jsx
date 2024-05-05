import React from "react";
import { BiMenu } from "react-icons/bi";

const Tabs = ({ tab, setTab }) => {
  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          className={`${
            tab === "overview" 
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
          onClick={() => setTab("overview")} // Remove the comment from here
        >
          Overview
        </button>
        <button
          className={`${
            tab === "appointments" 
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
          onClick={() => setTab("appointments")} // Remove the comment from here
        >
          Appointments
        </button>
        <button
          className={`${
            tab === "settings" 
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
          onClick={() => setTab("settings")} // Remove the comment from here
        >
          Profile
        </button>
        {/* Add more buttons for other tabs if needed */}
      </div>
    </div>
  );
};

export default Tabs;
