import { FaCheckCircle , FaMapMarkerAlt } from "react-icons/fa";
import { MdKingBed, MdOutlineBathtub, MdSquareFoot } from "react-icons/md";

export default function PropertyDetails() {
  return (
    <>
    <div className="flex justify-between px-6 items-start w-full p-4" dir="rtl">
      {/* Right Section */}
      <div className="flex flex-col items-end gap-2">
        <div className="text-xl font-bold">جاردن فيو</div>
        <div className="flex items-center gap-1 border rounded-lg px-3 py-1 text-sm bg-white">
          <FaMapMarkerAlt className="text-red-500" />
          <span>القاهرة</span>
        </div>
      </div>
      {/* Left Section */}
      <div className="flex flex-col items-start gap-2">
        <div className="text-lg ml-10 font-bold">السعر</div>
        <div className="border rounded-lg px-3 py-1 text-lg font-bold flex items-center gap-1 bg-white">
          <span>7,500,000</span>
          <span>ج.م</span>
        </div>
      </div>
    </div>

   {/* features of the property section */}
    <div className="flex flex-col px-6 md:flex-row gap-6 w-full mt-8" dir="rtl">
      {/* Right: Main Features */}
      <div className="flex-1 border rounded-lg p-6 bg-white border-gray-50 border-t-4 border-t-red-600 shadow shadow-lg hover:-translate-y-3 transition-transform duration-300 cursor-pointer">
        <h2 className="text-lg font-bold mb-4 text-right">المميزات الاساسية للعقار</h2>
        <ul className="space-y-4">
          {[
            "شرفة واسعة مطلة على المحيط للترفيه في الهواء الطلق.",
            "تصميم داخلي عصري مع نوافذ بانورامية لإضاءة طبيعية.",
            "مسبح خاص وحديقة خضراء للاسترخاء والاستجمام.",
            "موقع مميز بالقرب من جميع الخدمات والمرافق الحيوية."
          ].map((feature, i) => (
            <li key={i} className="flex items-center bg-white text-right border p-4 border-gray-200 rounded-lg hover:bg-red-50 hover:translate-x-3 transition-transform transition-colors duration-700">
              <FaCheckCircle className="ml-2 text-2xl text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Left: Description and Details */}
      <div className="flex-1 border rounded-lg p-6 bg-white border-gray-50 border-t-4 border-t-red-600 shadow shadow-lg hover:-translate-y-3 transition-transform duration-300 cursor-pointer">
        <h2 className="text-lg font-bold mb-2 text-right">الوصف</h2>
        <p className="mb-6 mt-4 text-right text-gray-700">
          اكتشف عقارك الخاص مع جاردن فيو، حيث التصميم المفتوح والإطلالات الخلابة على المحيط من كل غرفة. والوصول المباشر إلى شاطئ رملي نقي. هذه الفيلا تجسد المعنى الحقيقي للحياة الساحلية الراقية.
        </p>
        <div className="border-t border-gray-200 pt-4 flex justify-between text-center">
          <div className="flex-1">
            <div className="flex justify-center mb-3 mt-3">
              <MdKingBed className="text-3xl ml-1 text-blue-500" />
            </div>
            <div className="text-sm text-gray-500 mb-2">غرف النوم</div>
            <div className="text-xl font-bold">05</div>
          </div>
          <div className="flex-1 border-x border-gray-200">
            <div className="flex justify-center mb-3 mt-3">
              <MdOutlineBathtub className="text-3xl ml-1 text-teal-500" />
            </div>
            <div className="text-sm text-gray-500 mb-2">غرف الحمام</div>
            <div className="text-xl font-bold">03</div>
          </div>
          <div className="flex-1">
            <div className="flex justify-center mb-3 mt-3">
              <MdSquareFoot className="text-3xl ml-1 text-orange-500" />
            </div>
            <div className="text-sm text-gray-500 mb-2">المساحة</div>
            <div className="text-xl font-bold">2500 م<sup>2</sup></div>
          </div>
        </div>
      </div>
    </div>


    </>
  );
}
