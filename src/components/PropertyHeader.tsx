import { FaMapMarkerAlt } from "react-icons/fa";

export default function PropertyHeader() {
  return (
    <div className="flex justify-between items-start w-full p-4" dir="rtl">
      {/* Right Section */}
      <div className="flex flex-col items-end gap-2">
        <div className="text-xl font-bold">جاردن فيو</div>
        <div className="flex items-center gap-1 border rounded-lg px-3 py-1 text-sm bg-white">
          <FaMapMarkerAlt className="text-black" />
          <span>القاهرة</span>
        </div>
      </div>
      {/* Left Section */}
      <div className="flex flex-col items-start gap-2">
        <div className="text-lg font-bold">السعر</div>
        <div className="border rounded-lg px-3 py-1 text-lg font-bold flex items-center gap-1 bg-white">
          <span>ج.م</span>
          <span>7,500,000</span>
        </div>
      </div>
    </div>
  );
} 