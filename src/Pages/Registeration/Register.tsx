import React, { useState, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link, useNavigate } from 'react-router-dom';

// Types and Interfaces
interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  createdAt: Date;
}

// Constants
const VALIDATION_RULES = {
  name: {
    minLength: 3,
    required: 'الاسم مطلوب',
    minLengthError: 'الاسم يجب أن يكون أطول من 3 أحرف',
  },
  email: {
    required: 'البريد الإلكتروني مطلوب',
    invalid: 'البريد الإلكتروني غير صالح',
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    required: 'رقم الهاتف مطلوب',
    invalid: 'رقم الهاتف غير صالح',
    minLength: 10,
  },
  password: {
    minLength: 6,
    required: 'كلمة المرور مطلوبة',
    minLengthError: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
  },
  confirmPassword: {
    required: 'تأكيد كلمة المرور مطلوب',
    mismatch: 'كلمة المرور غير متطابقة',
  },
};

// Social Login Button Component
interface SocialLoginButtonProps {
  platform: string;
  icon: React.ReactNode;
  onClick: (platform: string) => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ platform, icon, onClick }) => (
  <button
    onClick={() => onClick(platform)}
    className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
  >
    <span className="w-5 h-5 ml-2">{icon}</span>
    {platform}
  </button>
);

// Form Input Component
interface FormInputProps {
  id: keyof FormData;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({ id, type, value, onChange, placeholder, error }) => (
  <div className="mb-4">
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
      placeholder={placeholder}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Social Icons
const SocialIcons = {
  Google: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  Facebook: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
    </svg>
  ),
};

// Custom Hooks
const useFormValidation = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = useCallback((name: keyof FormData, value: string, formData?: FormData): string | undefined => {
    const rules = VALIDATION_RULES[name];
    
    if (!value.trim()) return rules.required;
    
    switch (name) {
      case 'name':
        if ('minLength' in rules && 'minLengthError' in rules && value.length < rules.minLength) return rules.minLengthError;
        break;
      case 'email':
        if ('pattern' in rules && 'invalid' in rules && !rules.pattern.test(value)) return rules.invalid;
        break;
      case 'phone':
        if ('minLength' in rules && 'invalid' in rules && value.length < rules.minLength) return rules.invalid;
        break;
      case 'password':
        if ('minLength' in rules && 'minLengthError' in rules && value.length < rules.minLength) return rules.minLengthError;
        break;
      case 'confirmPassword':
        if ('mismatch' in rules && formData && value !== formData.password) return rules.mismatch;
        break;
    }
    
    return undefined;
  }, []);

  const validateForm = useCallback((formData: FormData): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormData;
      const error = validateField(fieldName, formData[fieldName], formData);
      if (error) newErrors[fieldName] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [validateField]);

  const clearFieldError = useCallback((fieldName: keyof FormErrors) => {
    setErrors(prev => ({ ...prev, [fieldName]: undefined }));
  }, []);

  return { errors, validateForm, clearFieldError };
};

const useRegistration = () => {
  const navigate = useNavigate();

  const registerUser = useCallback(async (userData: Omit<FormData, 'confirmPassword'>): Promise<{ success: boolean; error?: string }> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists (in real app, this would be a database check)
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = existingUsers.find((user: User) => user.email === userData.email);
      
      if (userExists) {
        return { success: false, error: 'البريد الإلكتروني مسجل بالفعل' };
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password, // In real app, this should be hashed
        createdAt: new Date(),
      };

      // Save to localStorage (in real app, this would be a database save)
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      // Save current user session
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'حدث خطأ أثناء التسجيل' };
    }
  }, [navigate]);

  return { registerUser };
};

// Main Component
const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState<string>('');

  const { errors, validateForm, clearFieldError } = useFormValidation();
  const { registerUser } = useRegistration();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear field error when user starts typing
    if (errors[id as keyof FormErrors]) {
      clearFieldError(id as keyof FormErrors);
    }
    setRegistrationError('');
  }, [errors, clearFieldError]);

  const handlePhoneChange = useCallback((phone: string) => {
    setFormData(prev => ({ ...prev, phone }));
    if (errors.phone) {
      clearFieldError('phone');
    }
    setRegistrationError('');
  }, [errors.phone, clearFieldError]);

  const handleSubmit = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRegistrationError('');
    setIsLoading(true);

    try {
      if (!validateForm(formData)) {
        setIsLoading(false);
        return;
      }

      const { confirmPassword, ...registrationData } = formData;
      const result = await registerUser(registrationData);
      
      if (result.success) {
        console.log('Registration successful:', registrationData);
        alert('تم إنشاء الحساب بنجاح!');
        // Redirect to dashboard or home page
        window.location.href = '/';
      } else {
        setRegistrationError(result.error || 'حدث خطأ غير متوقع');
      }
    } catch (error) {
      setRegistrationError('حدث خطأ أثناء التسجيل');
    } finally {
      setIsLoading(false);
    }
  }, [formData, validateForm, registerUser]);

  const handleSocialLogin = useCallback((platform: string) => {
    console.log(`Registering with ${platform}`);
    // Implement social registration logic here
  }, []);

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl mt-10">
        {/* Left Side: Furniture Image */}
        <div className="w-full md:w-1/2 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Furniture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Register Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="max-w-md w-full" dir="rtl">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">إنشاء الحساب</h2>
            <p className="text-gray-600 text-sm mb-6">خطوة الأولى نحو تجربة استثنائية</p>

            {/* Form Fields */}
            <FormInput
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="ادخل اسمك"
              error={errors.name}
            />

            <FormInput
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ادخل بريدك الإلكتروني"
              error={errors.email}
            />

            <div className="mb-4">
              <PhoneInput
                country={'eg'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  required: true,
                  className: `w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`
                }}
                containerClass="w-full"
                buttonClass="border-gray-300 rounded-l-lg"
                dropdownClass="border-gray-300 rounded-lg shadow-lg"
                searchClass="border-gray-300 rounded-lg p-2"
                countryCodeEditable={false}
                enableSearch={true}
                searchPlaceholder="ابحث عن الدولة..."
                buttonStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #D1D5DB',
                  borderRight: 'none',
                  borderRadius: '0.5rem 0 0 0.5rem',
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  bottom: '0',
                  zIndex: '1'
                }}
                inputStyle={{
                  width: '100%',
                  height: '100%',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.5rem',
                  paddingLeft: '60px',
                  fontSize: '1rem'
                }}
                containerStyle={{
                  position: 'relative'
                }}
                placeholder="ادخل رقم هاتفك"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <FormInput
              id="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="ادخل كلمة المرور"
              error={errors.password}
            />

            <FormInput
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="تأكيد كلمة المرور"
              error={errors.confirmPassword}
            />

            {/* Display registration error */}
            {registrationError && (
              <p className="text-red-500 text-sm mb-4 text-center">{registrationError}</p>
            )}

            {/* Register Button */}     
            <button
              onClick={handleSubmit}
              disabled={!isFormValid || isLoading}
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300 cursor-pointer disabled:bg-red-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'جاري التسجيل...' : 'إنشاء حساب'}
            </button>

            {/* Login Link */}
            <div className="text-center mt-4">
              <p className="text-gray-600">
                لديك حساب بالفعل؟{' '}
                <Link to="/login" className="text-red-600 hover:text-red-700 font-semibold">
                  تسجيل الدخول
                </Link>
              </p>
            </div>

            {/* Social Login Options */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">أو سجل الدخول باستخدام</p>
              <div className="flex justify-center space-x-4 space-x-reverse">
                <SocialLoginButton
                  platform="Google"
                  icon={SocialIcons.Google}
                  onClick={handleSocialLogin}
                />
                <SocialLoginButton
                  platform="Facebook"
                  icon={SocialIcons.Facebook}
                  onClick={handleSocialLogin}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
    