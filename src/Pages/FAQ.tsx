// src/pages/FAQ.tsx
import React, { useState } from 'react';

const faqQuestions = [
  {
    question: 'كيف يمكنني البحث عن عقار يناسب احتياجاتي؟',
    answer: 'يمكنك استخدام خاصية البحث المتقدم في موقعنا لتصفية النتائج حسب الموقع، السعر، المساحة، وعدد الغرف. كما يمكنك التواصل مع أحد وكلائنا العقاريين للحصول على استشارة مجانية.',
  },
  {
    question: 'ما هي خطوات شراء عقار من خلال فيستا؟',
    answer: 'تتضمن العملية: 1) تحديد احتياجاتك مع مستشار عقاري 2) اختيار العقار المناسب 3) حجز العقار 4) استكمال الأوراق القانونية 5) استلام العقار.',
  },
  {
    question: 'هل تقدمون تمويلاً عقارياً؟',
    answer: 'نعم، نتعاون مع أفضل البنوك وشركات التمويل العقاري لتقديم عروض تمويلية تناسب احتياجاتك، مع أسعار فائدة تنافسية وسداد على فترات تصل إلى 30 عاماً.',
  },
  {
    question: 'ما هي الضرائب والرسوم المترتبة على شراء عقار؟',
    answer: 'تختلف الضرائب والرسوم حسب نوع العقار وقيمته والمنطقة. تشمل عادةً: رسوم التسجيل، ضريبة القيمة المضافة، ورسوم السمسرة. يمكن لمستشارينا تقديم تفاصيل دقيقة حسب كل حالة.',
  },
  {
    question: 'هل يمكنني بيع عقاري الحالي من خلال فيستا؟',
    answer: 'بالتأكيد، نقدم خدمة تقييم وبيع العقارات باحترافية عالية، مع تسويق متميز وضمان أفضل سعر ممكن لعقارك.',
  },
];

const servicesBenefits = [
  'تقييم عقاري دقيق من خلال خبراء معتمدين',
  'خدمة قانونية متكاملة لضمان صفقة آمنة',
  'شبكة واسعة من العقارات الحصرية',
  'دعم فني واستشاري على مدار الساعة',
  'حلول تمويلية ميسرة',
  'متابعة ما بعد البيع وخدمة عملاء متميزة',
  'تسويق احترافي للعقارات المعروضة للبيع',
  'إدارة عقارية متكاملة للمستثمرين',
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 text-right font-sans bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h1>
        <p className="text-gray-600">إجابات على أكثر الأسئلة شيوعاً في مجال العقارات</p>
      </div>

      {/* الأسئلة الشائعة */}
      <div className="space-y-4 mb-16">
        {faqQuestions.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
              openIndex === index ? 'ring-2 ring-red-500' : 'hover:shadow-lg'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full text-right px-6 py-4 font-medium text-lg flex justify-between items-center ${
                openIndex === index ? 'bg-red-500 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <span>{item.question}</span>
              <span className={`transform transition-transform ${openIndex === index ? 'rotate-180 text-white' : 'text-red-500'}`}>
                ▼
              </span>
            </button>
            <div
              className={`px-6 text-gray-700 text-base overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100 py-4 bg-white' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-gray-100 pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* مميزات الخدمة */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-5 text-xl font-bold">
          مميزات خدماتنا العقارية
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicesBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-3 hover:bg-red-500 rounded-lg transition-colors">
                <span className="text-red-600 mt-1">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              تواصل مع مستشار عقاري
            </button>
          </div>
        </div>
      </div>

      {/* معلومات الاتصال */}
      <div className="mt-12 bg-white p-6 rounded-xl shadow-md text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-4">للاستفسارات الإضافية</h3>
        <p className="text-gray-600 mb-4">يمكنك التواصل مع فريق خدمة العملاء على الرقم: <span className="text-red-500 font-medium">+20 112 701 0200</span></p>
        <p className="text-gray-600">أو عبر البريد الإلكتروني: <span className="text-red-500">info@vesta.com</span></p>
      </div>
    </div>
  );
};

export default FAQ;
