import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import DefaultProfile from "../../public/mohamed.png";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);

  // بيانات المستخدم
  const [userData, setUserData] = useState({
    fullName: "أسماء سعيد",
    email: "asmaa.saeed@gmail.com",
    gender: "female",
    currentPassword: "",
    newPassword: "",
  });

  // صورة البروفايل
  const [profileImage, setProfileImage] = useState<string>(DefaultProfile);

  // تحديث البيانات
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // تحديث الصورة
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // تبديل حالة التعديل
  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6" dir="rtl">
      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-wrap items-center justify-between mb-6">
          {/* User Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={profileImage}
                alt="User"
                className="w-32 h-32 rounded-full object-cover border"
              />
              {isEditable && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute bottom-0 right-0 opacity-0 cursor-pointer w-full h-full"
                />
              )}
            </div>
            <div className="text-right">
              <h2 className="text-xl font-bold text-gray-800">
                {userData.fullName}
              </h2>
              <p className="text-gray-500">{userData.email}</p>
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={toggleEdit}
            className="bg-red-600 cursor-pointer text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#B40000] transition"
          >
            {isEditable ? "حفظ" : "تعديل"}
          </button>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 mb-2 text-right">
              الاسم الكامل
            </label>
            <input
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleInputChange}
              disabled={!isEditable}
              className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right ${
                !isEditable
                  ? "bg-gray-100 cursor-not-allowed"
                  : "bg-white"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-2 text-right">
              البريد الالكتروني
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              disabled={!isEditable}
              className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right ${
                !isEditable
                  ? "bg-gray-100 cursor-not-allowed"
                  : "bg-white"
              }`}
            />
          </div>

          {/* Gender */}
          <div className="relative">
            <label className="block text-gray-600 mb-2 text-right">
              الجنس
            </label>
            <select
              name="gender"
              value={userData.gender}
              onChange={handleInputChange}
              disabled={!isEditable}
              className={`appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right ${
                !isEditable
                  ? "bg-gray-100 cursor-not-allowed"
                  : "bg-white"
              }`}
            >
              <option value="">اختر الجنس</option>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
          </div>
        </div>

        {/* Change Password Section */}
        <div className="col-span-2 mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-right">
            تغيير كلمة المرور
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Password */}
            <div>
              <label className="block text-gray-600 mb-2 text-right">
                كلمة المرور الحالية
              </label>
              <input
                type="password"
                name="currentPassword"
                value={userData.currentPassword || ""}
                onChange={handleInputChange}
                disabled={!isEditable}
                placeholder="كلمة المرور الحالية"
                className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right ${
                  !isEditable
                    ? "bg-gray-100 cursor-not-allowed"
                    : "bg-white"
                }`}
              />
            </div>

            {/* New Password */}
            <div>
              <label className="block text-gray-600 mb-2 text-right">
                كلمة المرور الجديدة
              </label>
              <input
                type="password"
                name="newPassword"
                value={userData.newPassword || ""}
                onChange={handleInputChange}
                disabled={!isEditable}
                placeholder="كلمة المرور الجديدة"
                className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right ${
                  !isEditable
                    ? "bg-gray-100 cursor-not-allowed"
                    : "bg-white"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* User Shares Section */}
      <h3 className="text-2xl font-bold text-gray-800 my-10 text-center">
        تفاصيل الأسهم والارباح الخاصة بك
      </h3>

      <div className="bg-white shadow-lg rounded-lg p-6 my-10">
        <table className="table-auto text-center w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-gray-600">
                عدد الأسهم الخاصة بي
              </th>
              <th className="border border-gray-300 px-4 py-2 text-gray-600">
                الأرباح المستحقة
              </th>
              <th className="border border-gray-300 px-4 py-2 text-gray-600">
                سعر السهم الثابت
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-gray-800">
                500 سهم
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-800">
                800,000 جنيه مصري
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-800">
                5,000 جنيه مصري
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Properties Section */}
      <div className="my-10">
        <h3 className="text-4xl font-extrabold text-gray-800 my-15 text-center">
          المشاريع التي تشارك بها
        </h3>
        <Swiper
          navigation={true}
          autoplay={{ delay: 2000 }}
          loop={true}
          speed={1000}
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {[...Array(6)].map((_, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={`image${idx + 1}.jpg`}
                  alt={`Property ${idx + 1}`}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4 ring-1 shadow-lg"
                />
                <h4 className="text-lg font-bold text-gray-800 text-center">
                  مشروع رقم {idx + 1}
                </h4>
                <p className="text-gray-600 text-center">
                  عدد الأسهم: {10 + idx * 5}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Profile;
