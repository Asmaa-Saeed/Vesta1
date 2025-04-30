
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    alert('تم إرسال النموذج! تحقق من وحدة التحكم للتفاصيل.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        <span className="text-red-600 tracking-wide">تواصل معنا الآن</span>
      </h1>
      <p className='text-sm -mt-2 mb-10 tracking-wide'>املأ النموذج أدناه حتى نتمكن من التعرف عليك وعلى احتياجاتك بشكل أفضل</p>
      
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            value={formData.name}
            onChange={handleChange}
            autoComplete='name'
            className="w-full md:w-1/2 p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 text-right"
          />
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            autoComplete='email'
            className="w-full md:w-1/2 p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 text-right"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="subject"
            placeholder="الموضوع"
            value={formData.subject}
            onChange={handleChange}
            autoComplete='off'
            className="w-full md:w-1/2 p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 text-right"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="رقم الجوال"
            value={formData.mobile}
            onChange={handleChange}
            autoComplete='tel'
            className="w-full md:w-1/2 p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 text-right"
          />
        </div>
        <textarea
          name="message"
          placeholder="رسالتك"
          value={formData.message}
          onChange={handleChange}
          autoComplete='off'
          className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 h-32 text-right"
        />
        <button
          onClick={handleSubmit}
          className="w-32 bg-red-600 text-white p-2 rounded hover:bg-red-700 cursor-pointer transition"
        >
          إرسال
        </button>
      </div>
    </div>
  );
};

export default ContactForm;