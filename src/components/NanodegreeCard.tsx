import { FaGraduationCap } from "react-icons/fa";

export default function NanodegreeCard() {
  return (
    <div className="relative bg-white rounded-xl shadow p-6 w-full max-w-md mx-auto border-t-4 border-blue-300" dir="rtl">
      {/* Icon */}
      <div className="absolute top-4 left-4 text-blue-700 text-4xl">
        <FaGraduationCap />
        <div className="w-8 h-1 bg-blue-300 rounded-full mt-1 ml-2"></div>
      </div>
      {/* Title */}
      <div className="flex flex-col items-end mt-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          برنامج الدبلوم المكثف <span className="font-normal">(Nanodegree)</span>
        </h2>
      </div>
      {/* Details Row */}
      <div className="flex items-center justify-between mt-8">
        <span className="text-lg font-bold text-gray-800">
          590 <span className="font-normal text-black text-base">ساعة</span>
        </span>
        <span className="px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold text-lg shadow">
          4 أشهر
        </span>
      </div>
    </div>
  );
} 