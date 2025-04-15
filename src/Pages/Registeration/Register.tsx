import React, { useState } from 'react';

const Register: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Furniture Image */}
      <div className="w-full md:w-1/2 bg-gray-100">
        <img
          src="/path/to/furniture.jpg" // Adjust this path to your furniture image
          alt="Furniture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Register Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full" dir="rtl">
          {/* Title and Subtitle */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2">إنشاء الحساب</h2>
          <p className="text-gray-600 mb-6">الخطوة الأولى نحو تجربة استثنائية</p>

          {/* Form Fields */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">الاسم</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="ادخل اسمك"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="ادخل بريدك الإلكتروني"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">كلمة المرور</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="ادخل كلمة المرور"
            />
          </div>

          {/* Register Button */}
          <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition">
            إنشاء حساب
          </button>

          {/* Social Login Options */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">أو سجل الدخول باستخدام</p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Google
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <img
                  src="https://www.facebook.com/favicon.ico"
                  alt="Facebook"
                  className="w-5 h-5 mr-2"
                />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;