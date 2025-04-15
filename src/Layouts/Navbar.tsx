import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <nav className="flex items-center justify-between bg-white shadow-md p-4" dir="rtl">

        {/* Logo */}
      <div className="text-xl font-bold text-gray-800">
        Vesta
      </div>
     
       {/* Navigation Links */}
       <div className="flex space-x-6 text-gray-700">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${
              isActive ? 'text-red-600 after:w-0' : 'after:w-0'
            }`
          }
        >
          الرئيسية
        </NavLink>
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${
              isActive ? 'text-red-600 after:w-0' : 'after:w-0'
            }`
          }
        >
          بحث
        </NavLink>
        <NavLink
          to="/sell"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${
              isActive ? 'text-red-600 after:w-0' : 'after:w-0'
            }`
          }
        >
          بيع
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${
              isActive ? 'text-red-600 after:w-0' : 'after:w-0'
            }`
          }
        >
          أحدث الاخبار
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${
              isActive ? 'text-red-600 after:w-0' : 'after:w-0'
            }`
          }
        >
          عنا
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${
              isActive ? 'text-red-600 after:w-0' : 'after:w-0'
            }`
          }
        >
          تواصل معنا
        </NavLink>
      </div>


       {/* Red Button */}
       <button className="bg-red-600 cursor-pointer text-white font-semibold py-1.5 px-4 rounded-lg hover:bg-red-700 transition">
        سجل الان
      </button>
      
    </nav>
  );
};

export default Navbar;