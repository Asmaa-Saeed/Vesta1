import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("البريد الإلكتروني مطلوب");
      return;
    }

    if (!validateEmail(email)) {
      setError("صيغة البريد الإلكتروني غير صحيحة");
      return;
    }

    // Here you would typically send the reset email
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg flex w-full max-w-4xl overflow-hidden">
          {/* Left Image */}
          <div className="w-3/5 hidden md:block">
            <img
              src="/foregetPw2.jpg"
              alt="Modern house"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/5 p-8 flex flex-col justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">تم إرسال رابط إعادة تعيين كلمة المرور</h2>
              <p className="text-gray-600 mb-6">
                تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني. يرجى التحقق من صندوق الوارد الخاص بك.
              </p>
              <Link
                to="/login"
                className="inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-semibold"
              >
                العودة لتسجيل الدخول
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg flex w-full max-w-4xl overflow-hidden">
        {/* Left Image */}
        <div className="w-3/5 hidden md:block">
          <img
            src="/foregetPw2.jpg"
            alt="Modern house"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-2/5 p-8">
          <h2 className="text-3xl font-bold mt-20 text-right text-gray-900 mb-2">نسيت كلمة المرور؟</h2>
          <p className="text-right text-sm text-gray-500 mb-6">
            أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة تعيين كلمة المرور
          </p>

          <form className="space-y-4 rtl" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="ادخل بريدك الإلكتروني"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-none text-right ${
                error ? 'border-red-500' : 'border-gray-500'
              }`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
            {error && <p className="text-red-500 text-xs text-right mt-1">{error}</p>}
            
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold cursor-pointer"
            >
              إرسال رابط إعادة التعيين
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            تذكرت كلمة المرور؟{' '}
            <Link to="/login" className="text-red-600 font-semibold">تسجيل الدخول</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 