import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // notifications
      if (
        !target.closest(".notification-popup") &&
        !target.closest(".notification-icon") &&
        !target.closest("a") // استثناء اللينكات
      ) {
        setShowNotifications(false);
      }

      // profile
      if (
        !target.closest(".profile-popup") &&
        !target.closest(".profile-icon") &&
        !target.closest("a") // استثناء اللينكات
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50"> 
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-red-600">
          Vesta
        </NavLink>

        {/* Links */}
        <div className="flex gap-6">
          <NavLink to="/contact" className="hover:text-red-600">
            اتصل بنا
          </NavLink>
          <NavLink to="/about" className="hover:text-red-600">
            عنا
          </NavLink>
          <NavLink to="/blog" className="hover:text-red-600">
            أحدث الأخبار
          </NavLink>
          
          <NavLink to="/FAQ" className="hover:text-red-600">
            الأسئلة الشائعة
          </NavLink>
          <NavLink to="/sell" className="hover:text-red-600">
            بيع
          </NavLink>
          
          <NavLink to="/properties" className="hover:text-red-600">
            بحث
            </NavLink>
          <NavLink to="/" className="hover:text-red-600">
            الرئيسية
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              className="notification-icon"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              🔔
            </button>
            {showNotifications && (
              <div className="notification-popup absolute top-10 right-0 bg-white shadow-md rounded-lg p-4 w-64 z-40">
                <p className="text-sm">لا توجد إشعارات جديدة</p>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              className="profile-icon"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              👤
            </button>
            {showProfileMenu && (
              <div className="profile-popup absolute top-10 right-0 bg-white shadow-md rounded-lg p-4 w-48 z-40">
                <button
                  className="w-full text-left hover:text-red-600"
                  onClick={() => navigate("/profile")}
                >
                  الملف الشخصي
                </button>
                <button
                  className="w-full text-left hover:text-red-600"
                  onClick={() => navigate("/logout")}
                >
                  تسجيل خروج
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
