"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">عن فيستا</h3>
            <p className="leading-7">
              فيستا هي شركتك نحو المستقبل. نقدم حلول عقارية ذكية
              تساعدك في إدارة ممتلكاتك واستثماراتك بثقة وسهولة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-white" />
                <span>123 شارع العقارات، العاصمة، NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-white" />
                <span>(+20) 1127010200</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-white" />
                <span>info@vesta.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">تابعنا</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>© 2025 Vesta. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
