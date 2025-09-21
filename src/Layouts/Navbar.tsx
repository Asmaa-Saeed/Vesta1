import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Close notifications
      if (!target.closest(".notification-popup") && !target.closest(".notification-icon")) {
        setShowNotifications(false);
      }

      // Close profile menu
      if (!target.closest(".profile-popup") && !target.closest(".profile-icon")) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "/contact", text: "اتصل بنا" },
    { to: "/about", text: "عنّا" },
    { to: "/FAQ", text: "الأسئلة الشائعة" },
    { to: "/blog", text: "أحدث الأخبار" },
    { to: "/sell", text: "بيع" },
    { to: "/properties", text: "بحث" },
    { to: "/", text: "الرئيسية" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-red-600">
            Vesta
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <NavLink
              to="/login"
              className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition-colors duration-200"
            >
              تسجيل الدخول
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-200">
              <NavLink
                to="/login"
                className="block w-full text-center px-4 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                تسجيل الدخول
              </NavLink>
              <NavLink
                to="/register"
                className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                إنشاء حساب
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
