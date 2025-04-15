import React from 'react';

const Navbar: React.FC = () => {

  return (
    <nav className="flex items-center justify-between bg-white shadow-md p-4" dir="rtl">

        {/* Logo */}
      <div className="text-xl font-bold text-gray-800">
        Vesta
      </div>
     
     

     {/* Navigation Links */}
     <div className="flex space-x-6 text-gray-700">
        <a href="#" className="relative hover:text-red-600 transition duration-400after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-400 hover:after:w-full">الرئيسية</a>
        <a href="#" className="relative hover:text-red-600 transition duration-400after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-400 hover:after:w-full">بحث</a>
        <a href="#" className="relative hover:text-red-600 transition duration-400after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-400 hover:after:w-full">بيع</a>
        <a href="#" className="relative hover:text-red-600 transition duration-400after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-400 hover:after:w-full">أحدث الاخبار</a>
        <a href="#" className="relative hover:text-red-600 transition duration-400after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-400 hover:after:w-full">عنا</a>
        <a href="#" className="relative hover:text-red-600 transition duration-400after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-400 hover:after:w-full">تواصل معنا</a>
      </div>


       {/* Red Button */}
       <button className="bg-red-600 cursor-pointer text-white font-semibold py-1.5 px-4 rounded-lg hover:bg-red-700 transition">
        سجل الان
      </button>
      
    </nav>
  );
};

export default Navbar;