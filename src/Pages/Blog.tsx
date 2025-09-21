import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Import the arrow icon
import Footer from '../Layouts/Footer';

const Blog: React.FC = () => {
  return (
    <div>
    <div className="flex flex-col items-center py-16 px-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
        أحدث أخبار واستشارات العقارات
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
        تابع معنا آخر تطورات سوق العقارات، نصائح الاستثمار، وتحليلات الخبراء لمساعدتك في اتخاذ
        قرارات ذكية.
      </p>
      <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg mb-16 shadow-lg">
        استعراض المقالات
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full" dir="rtl">
        {/* Blog Post Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Home keys"
            className="w-full h-auto object-cover"
          />
          <div className="p-6">
            <span className="text-gray-500 text-sm font-semibold mb-2 block">العقارات</span>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
              كيف تختار العقار المناسب لاحتياجاتك؟
              <FaArrowLeft className="text-gray-500 text-lg" />
            </h2>
            <p className="text-gray-600 text-base mb-6">
              نصائح عملية لمساعدتك في تحديد العقار الأنسب من حيث الموقع، السعر، والخدمات
              المحيطة.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md">
              اقرأ المزيد
            </button>
          </div>
        </div>

        {/* Blog Post Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Modern house with pool"
            className="w-full h-auto object-cover"
          />
          <div className="p-6">
            <span className="text-gray-500 text-sm font-semibold mb-2 block">العقارات</span>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
              أفضل المناطق للاستثمار العقاري في 2025
              <FaArrowLeft className="text-gray-500 text-lg" />
            </h2>
            <p className="text-gray-600 text-base mb-6">
              تعرف على أهم المدن والأحياء التي يُنصح بالاستثمار فيها بناءً على معدلات النمو والطلب
              في السوق.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md">
              اقرأ المزيد
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Blog Post Card */}
      <div className="w-full mt-8" dir="rtl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          <img
            src="https://via.placeholder.com/600x400" // Larger image for full-width card
            alt="House model on blueprints"
            className="w-full md:w-1/2 h-64 md:h-auto object-cover"
          />
          <div className="p-6 flex flex-col justify-center">
            <span className="text-gray-500 text-sm font-semibold mb-2 block">العقارات</span>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
              5 أخطاء شائعة عند شراء عقار لأول مرة
              <FaArrowLeft className="text-gray-500 text-lg" />
            </h2>
            <p className="text-gray-600 text-base mb-6">
              تعرف على الأخطاء التي يقع فيها المشترون الجدد وتعلم كيف تتجنبها لضمان صفقة ناجحة
              وآمنة.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md">
              اقرأ المزيد
            </button>
          </div>
        </div>
      </div>

      {/* New Grid for additional blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8" dir="rtl">
        {/* Blog Post Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250"
            alt="House made of money"
            className="w-full h-auto object-cover"
          />
          <div className="p-6">
            <span className="text-gray-500 text-sm font-semibold mb-2 block">العقارات</span>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
              أهم مشاريع جديدة في العاصمة الإدارية 2025
              <FaArrowLeft className="text-gray-500 text-lg" />
            </h2>
            <p className="text-gray-600 text-base mb-6">
              تعرف على أهم المشاريع العقارية التي تم الإعلان عنها حديثًا.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md">
              اقرأ المزيد
            </button>
          </div>
        </div>

        {/* Blog Post Card 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250"
            alt="People signing documents"
            className="w-full h-auto object-cover"
          />
          <div className="p-6">
            <span className="text-gray-500 text-sm font-semibold mb-2 block">العقارات</span>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
              أهم المشاريع العقارية الجديدة في 2025
              <FaArrowLeft className="text-gray-500 text-lg" />
            </h2>
            <p className="text-gray-600 text-base mb-6">
              قائمة بأهم المشاريع السكنية والتجارية التي تم إطلاقها في بداية العام وفرص الاستثمار بها.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md">
              اقرأ المزيد
            </button>
          </div>
        </div>

        {/* Blog Post Card 6 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Cityscape at dusk"
            className="w-full h-auto object-cover"
          />
          <div className="p-6">
            <span className="text-gray-500 text-sm font-semibold mb-2 block">العقارات</span>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
              كل ما تريد معرفته عن التمويل العقاري الإسلامي
              <FaArrowLeft className="text-gray-500 text-lg" />
            </h2>
            <p className="text-gray-600 text-base mb-6">
              شرح مبسط لأنواع التمويل الإسلامي ومزاياه للمستثمرين.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md">
              اقرأ المزيد
            </button>
          </div>
        </div>

        {/* Blog Post Card 7 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Hand holding house keys"
            className="w-full h-auto object-cover"
          />
          <div className="p-6">
            <span className="text-gray-500 text-sm font-semibold mb-2 block">العقارات</span>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
              تحليل سوق العقارات في الوطن العربي
              <FaArrowLeft className="text-gray-500 text-lg" />
            </h2>
            <p className="text-gray-600 text-base mb-6">
              نظرة معمقة على حركة البيع والشراء في بعض الدول العربية وأثر التضخم على أسعار العقارات.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md">
              اقرأ المزيد
            </button>
          </div>
        </div>
      </div>

      <button className="mt-12 py-3 px-6 bg-gray-100 text-gray-600 rounded-lg shadow-md flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-200 transition">
        <FaArrowLeft className="text-gray-600 text-sm" />
        <span>عرض المزيد</span>
      </button>
      </div>
      <Footer />
    </div>

  );
};

export default Blog;
