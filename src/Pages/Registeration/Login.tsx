import React from 'react';
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  password: string;
}

interface FormErrors {
  name?: string;
  password?: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    password: ''
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [loginError, setLoginError] = React.useState<string>('');

  // Mock database of users
  const mockDatabase = [
    { name: 'أحمد', password: 'password123' },
    { name: 'محمد', password: 'securepass456' },
  ];

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب';
    else if (formData.name.length < 3) newErrors.name = 'الاسم يجب أن يكون أطول من 3 أحرف';
    if (!formData.password) newErrors.password = 'كلمة المرور مطلوبة';
    else if (formData.password.length < 6) newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoginError(''); // Reset login error

    if (!validateForm()) return;

    // Simulate database check
    if (mockDatabase.length === 0) {
      setLoginError('لا توجد بيانات في قاعدة البيانات');
      return;
    }

    const user = mockDatabase.find(user => user.name === formData.name);
    if (!user) {
      setLoginError('المستخدم غير موجود');
      return;
    }

    if (user.password !== formData.password) {
      setLoginError('كلمة المرور غير صحيحة');
      return;
    }

    console.log('Login successful:', formData);
    alert('تم تسجيل الدخول بنجاح!');
  };

  const handleSocialLogin = (platform: string) => {
    console.log(`Logging in with ${platform}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
    setLoginError(''); // Reset login error on input change
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl mt-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Living Room"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="max-w-md w-full" dir="rtl">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">مرحبا بعودتك</h2>
            <p className="text-gray-600 text-sm mb-6">الآن يمكنك تسجيل الدخول بسهولة</p>

            {/* Form Fields */}
            <div className="mb-4">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="ادخل اسمك"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-6">
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="ادخل كلمة المرور"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              <a href="#" className="text-orange-500 text-sm mt-2 inline-block">
                نسيت كلمة المرور؟
              </a>
            </div>

            {/* Display login error */}
            {loginError && <p className="text-red-500 text-sm mb-4 text-center">{loginError}</p>}

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300 cursor-pointer disabled:bg-red-400"
              disabled={Object.keys(errors).length > 0}
            >
              تسجيل الدخول
            </button>

            {/* Register Link */}
            <div className="text-center mt-4">
              <p className="text-gray-600">
                ليس لديك حساب؟{' '}
                <Link to="/register" className="text-red-600 hover:text-red-700 font-semibold">
                  إنشاء حساب
                </Link>
              </p>
            </div>

            {/* Social Login Options */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">أو سجل الدخول باستخدام</p>
              <div className="flex justify-center space-x-4 space-x-reverse">
                <button
                  onClick={() => handleSocialLogin('Google')}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
                >
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>
                <button
                  onClick={() => handleSocialLogin('Facebook')}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
                >
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                  </svg>
                  Facebook
                </button>
                <button
                  onClick={() => handleSocialLogin('X')}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
                >
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#000000"/>
                  </svg>
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;