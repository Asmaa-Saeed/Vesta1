import React from 'react';
    // import { createRoot } from 'react - dom / client';

    const Footer: React.FC = () => {
      return (
        <footer className="bg-black text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              {/* Left Section: Social Media Icons */}
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-bold mb-4">تابعنا</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4zQ2mgB1Xh.ico"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://instagram.com/favicon.ico"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://linkedin.com/favicon.ico"
                      alt="LinkedIn"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://abs.twimg.com/favicons/twitter.ico"
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>

              {/* Center Section: Contact Information */}
              <div className="flex-1 text-right text-xl">
                <h3 className="text-lg font-medium mb-4">ربط البيانات</h3>
                <p className="mb-3">123 Real Estate AVE</p>
                <p className="mb-3">NY 10001, العاصمة</p>
                <p className="mb-3">1127010200 (20+) :الهاتف</p>
                <p className="mb-3">البريد: info@vesta.com</p>
              </div>

              {/* Right Section: Additional Info */}
              <div className="text-right">
                <p className="mb-2">شركتك في طور الإزدهار، إذا كنت بحاجة إلى المساعدة،</p>
                <p className="mb-2">إستمر في أملك go Vesta.</p>
                <p>ملومات عن</p>
              </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="text-center mt-8 text-sm">
              <p>جميع الحقوق محفوظة &copy; Vesta 2025</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;