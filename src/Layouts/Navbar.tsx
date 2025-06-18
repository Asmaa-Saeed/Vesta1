
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBell, FaUserCircle, FaCog, FaUser, FaDoorOpen } from 'react-icons/fa';


const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const notificationCount = 2;

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleProfileClick = () => {
    navigate('/profile'); // التنقل إلى صفحة البروفايل
  };

  // Close popups when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Close notifications if clicking outside
      if (!target.closest('.notification-popup') && !target.closest('.notification-icon')) {
        setShowNotifications(false);
      }

      // Close profile menu if clicking outside
      if (!target.closest('.profile-popup') && !target.closest('.profile-icon')) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between bg-white shadow-md p-4" dir="rtl">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800">
        <img src="logo.jpg" className='w-[180px] h-[40px]' alt="" />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-x-7 text-gray-700">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${isActive ? 'text-red-600 after:w-full' : 'after:w-0'
            }`
          }
        >
          الرئيسية
        </NavLink>

        <NavLink
          to="/properties"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${isActive ? 'text-red-600 after:w-full' : 'after:w-0'
            }`
          }
        >
          بحث
        </NavLink>

        <NavLink
          to="/sell"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${isActive ? 'text-red-600 after:w-full' : 'after:w-0'
            }`
          }
        >
          بيع
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${isActive ? 'text-red-600 after:w-full' : 'after:w-0'
            }`
          }
        >
          أحدث الأخبار
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${isActive ? 'text-red-600 after:w-full' : 'after:w-0'
            }`
          }
        >
          عنا
        </NavLink>


<NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative transition duration-300 after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full focus:text-red-600 focus:after:w-full ${isActive ? 'text-red-600 after:w-full' : 'after:w-0'
            }`
          }
        >
          تواصل معنا
        </NavLink>
      </div>

      {/* Right Section (Register + Notifications + Profile) */}
      <div className="flex items-center gap-x-4 relative">
        {/* Notification Icon */}
        <div className="relative notification-icon ml-15">
          <FaBell
            className="text-2xl text-gray-600 hover:text-black transition cursor-pointer"
            onClick={() => setShowNotifications(!showNotifications)}
          />
          {notificationCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </div>

        {/* Notification Popup */}
        {showNotifications && (
          <div className="absolute top-13 right-0 bg-white shadow-lg rounded-lg w-90 p-4 z-50 notification-popup">
            <h3 className="text-lg font-bold text-gray-800 mb-2">الإشعارات</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 border-b pb-2">إشعار 1: تم تحديث بياناتك بنجاح.</li>
              <li className="text-gray-700">إشعار 2: لديك رسالة جديدة من الدعم الفني.</li>
            </ul>
          </div>
        )}

        {/* Profile Icon */}
        <div className="relative profile-icon ml-30">
          <FaUserCircle
            className="text-2xl text-gray-600 hover:text-black transition cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          />
        </div>

        {/* Profile Menu */}
        {showProfileMenu && (
          <div className="absolute top-10 right-16 bg-white shadow-lg rounded-lg w-48 p-4 z-50 profile-popup">
            <ul className="space-y-2">
              <li
                className="text-gray-700 flex hover:text-red-600 cursor-pointer"
                onClick={handleProfileClick} // استدعاء التنقل عند النقر
              >
                الملف الشخصي <FaUser className='mr-4 mt-1' size={20} />
              </li>
              <li className="text-gray-700 flex hover:text-red-600 cursor-pointer">
                الإعدادات <FaCog size={20} className="animate-spin-slow mr-4 mt-1" />
              </li>
              <li className="text-gray-700 flex hover:text-red-600 cursor-pointer">
                تسجيل الخروج <FaDoorOpen className='mr-4 mt-1' size={24} />
              </li>
            </ul>
          </div>
        )}

        {/* Register Button */}
        <button
          onClick={handleRegisterClick}
          className="bg-red-600 cursor-pointer text-white font-semibold py-1.5 px-4 rounded-lg hover:bg-red-700 transition"
        >
          سجل الآن
        </button>
      </div>
    </nav>
  );
};

export default Navbar;