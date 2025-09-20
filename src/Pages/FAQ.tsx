// src/pages/FAQ.tsx
import React, { useState } from 'react';

const faqQuestions = [
  {
    question: 'ما هي مراحل التقدم والقبول ؟',
    answer: 'مراحل التقدم تشمل التسجيل، ثم اجتياز اختبارات القبول، ثم المقابلات الشخصية، ثم إعلان النتائج النهائية.',
  },
  {
    question: 'ما هي شروط التقدم ومعايير القبول ؟',
    answer: 'يجب أن يكون المتقدم حاصلًا على شهادة جامعية وأن يجتاز اختبارات القبول والمعايير المحددة.',
  },
  {
    question: 'ما هو نظام الدراسة داخل المنحة؟',
    answer: 'نظام الدراسة يعتمد على التدريب النظري والعملي ويشمل مساراً تدريبياً متكاملاً.',
  },
  {
    question: 'ماذا يحدث للمتقدم عند عدم اجتياز اختبارات القبول؟',
    answer: 'يُستبعد المتقدم من المنحة ولا يمكنه استكمال باقي المراحل.',
  },
  {
    question: 'هل يجوز للطالب الانسحاب من المنحة في أي وقت؟',
    answer: 'يمكن للطالب الانسحاب ولكن يفقد كافة المزايا المقدمة له من المنحة.',
  },
];

const initiativeBenefits = [
  'شهادة معتمدة مشتركة من وزارة الاتصالات وتكنولوجيا المعلومات والأكاديمية العسكرية.',
  'شهادات معتمدة لكافة المهارات التي يتم التدريب عليها.',
  'شهادة الماجستير من إحدى الجامعات الأجنبية المرموقة لبرامج الماجستير.',
  'توفير مسار تدريبي متكامل على مدار مدة التنفيذ ومكون من العديد من الأنشطة والفعاليات.',
  'المشاركة في مسابقات تكنولوجية محلية وعالمية.',
  'جوائز عينية للمتفوقين.',
  'التدريب الميداني للتأهيل لمستقبل عملي في مجالات تكنولوجيا حديثة.',
  'إقامة مجانية بالكامل شاملة كافة الوجبات.',
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-right font-sans">
      <h1 className="text-3xl font-bold text-center mb-10">الأسئلة الشائعة</h1>

      {/* الأسئلة الشائعة */}
      <div className="space-y-4">
        {faqQuestions.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg transition-all duration-300 ${
              openIndex === index ? 'bg-green-100 border border-green-500' : 'bg-gray-100'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-right px-5 py-4 font-medium text-lg cursor-pointer"
            >
              {item.question}
            </button>
            <div
              className={`px-5 text-gray-800 text-base overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>

      {/* مزايا المبادرة */}
      <div className="mt-12">
        <div className="bg-green-700 text-white rounded-t-lg px-6 py-4 text-lg font-semibold">
          ما هي مزايا المبادرة ؟
        </div>
        <div className="border border-dashed border-gray-300 border-t-0 rounded-b-lg px-6 py-4 bg-white text-gray-800 leading-relaxed space-y-2">
          {initiativeBenefits.map((benefit, i) => (
            <li key={i} className="list-disc list-inside">{benefit}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
