import React, { useState } from "react";
import RegisterImg from '../../../public/register.jpg'
import { Link } from "react-router-dom";

export default function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", password: "" };
    if (!values.name.trim()) {
      newErrors.name = "الاسم مطلوب";
      valid = false;
    } else if (values.name.length < 2) {
      newErrors.name = "الاسم يجب أن يكون على الأقل حرفين";
      valid = false;
    }
    if (!values.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "صيغة البريد الإلكتروني غير صحيحة";
      valid = false;
    }
    if (!values.password) {
      newErrors.password = "كلمة المرور مطلوبة";
      valid = false;
    } else if (values.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.type === "text" ? "name" : e.target.type]: e.target.value });
    setErrors({ ...errors, [e.target.type === "text" ? "name" : e.target.type]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Submit logic here
      alert("تم إنشاء الحساب بنجاح!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white mt-8 mb-8 rounded-2xl shadow-lg flex w-full max-w-4xl overflow-hidden">
        {/* Left Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src={RegisterImg}
            alt="Modern house"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-right text-gray-900 mb-2">إنشاء الحساب</h2>
          <p className="text-right text-sm text-gray-500 mb-6">خطوتك الأولى نحو تجربة استثنائية</p>

          <form className="space-y-4 rtl" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              placeholder="ادخل اسمك"
              className={`w-full px-4 py-3 mt-6 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-none text-right ${errors.name ? 'border-red-500' : 'border-gray-500'}`}
              value={values.name}
              onChange={handleChange}
              name="name"
            />
            {errors.name && <p className="text-red-500 text-xs text-right mt-1">{errors.name}</p>}
            <input
              type="email"
              placeholder="ادخل بريدك الإلكتروني"
              className={`w-full px-4 py-3 mt-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-none text-right ${errors.email ? 'border-red-500' : 'border-gray-500'}`}
              value={values.email}
              onChange={handleChange}
              name="email"
            />
            {errors.email && <p className="text-red-500 text-xs text-right mt-1">{errors.email}</p>}
            <input
              type="password"
              placeholder="ادخل كلمة المرور"
              className={`w-full px-4 py-3 mt-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-none text-right ${errors.password ? 'border-red-500' : 'border-gray-500'}`}
              value={values.password}
              onChange={handleChange}
              name="password"
            />
            {errors.password && <p className="text-red-500 text-xs text-right mt-1">{errors.password}</p>}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold cursor-pointer"
            >
              إنشاء حساب
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            لديك حساب بالفعل؟{' '}
            <Link to="/login" className="text-red-600 font-semibold">تسجيل الدخول</Link>
          </p>
          <p className="text-center text-sm mt-2">أو سجل الدخول باستخدام</p>

          <div className="flex justify-center space-x-4 mt-3">
            <button className="border border-gray-300 p-2 rounded-md cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </button>
            <button className="border border-gray-300 p-2 rounded-md cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}