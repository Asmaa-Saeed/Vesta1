import { FaBed, FaBath, FaBolt, FaRulerCombined } from "react-icons/fa";

export default function PropertyDetailsSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full mt-8" dir="rtl">
      {/* Right: Main Features */}
      <div className="flex-1 border rounded-lg p-6 bg-white">
        <h2 className="text-lg font-bold mb-4 text-right">المميزات الاساسية للعقار</h2>
        <ul className="space-y-4">
          {Array(4).fill(0).map((_, i) => (
            <li key={i} className="flex items-center text-right border-b last:border-b-0 pb-2">
              <FaBolt className="ml-2 text-xl text-black" />
              <span>شرفة واسعة مطلة على المحيط للترفيه في الهواء الطلق.</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Left: Description and Details */}
      <div className="flex-1 border rounded-lg p-6 bg-white">
        <h2 className="text-lg font-bold mb-2 text-right">الوصف</h2>
        <p className="mb-4 text-right text-gray-700">
          اكتشف عقارك الخاص مع جاردن فيو، حيث التصميم المفتوح والإطلالات الخلابة على المحيط من كل غرفة. والوصول المباشر إلى شاطئ رملي نقي. هذه الفيلا تجسد المعنى الحقيقي للحياة الساحلية الراقية.
        </p>
        <div className="border-t pt-4 flex justify-between text-center">
          <div className="flex-1">
            <div className="flex justify-center mb-1">
              <FaBed className="text-2xl ml-1" />
            </div>
            <div className="text-sm text-gray-500">غرف النوم</div>
            <div className="text-xl font-bold">04</div>
          </div>
          <div className="flex-1 border-x">
            <div className="flex justify-center mb-1">
              <FaBath className="text-2xl ml-1" />
            </div>
            <div className="text-sm text-gray-500">غرف الحمام</div>
            <div className="text-xl font-bold">03</div>
          </div>
          <div className="flex-1">
            <div className="flex justify-center mb-1">
              <FaRulerCombined className="text-2xl ml-1" />
            </div>
            <div className="text-sm text-gray-500">المساحة</div>
            <div className="text-xl font-bold">2500 م<sup>2</sup></div>
          </div>
        </div>
      </div>
    </div>
  );
} 