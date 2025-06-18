import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import ProfileImage from "../../public/mohamed.png"

const Profile = () => {
    // حالة لتحديد ما إذا كانت الحقول قابلة للتعديل أم لا
    const [isEditable, setIsEditable] = useState(false);

    // بيانات المستخدم
    const [userData, setUserData] = useState({
        fullName: "محمد رمضان",
        email: "Moahmed Ramadan@gmail.com",
        gender: "male",
        currentPassword: "",
        newPassword: "",
    });

    // تحديث بيانات المستخدم
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // تبديل حالة التعديل
    const toggleEdit = () => {
        setIsEditable(!isEditable);
    };

    // الحصول على التاريخ الحالي
    const today = new Date();
    const formattedDate = today.toLocaleDateString("ar-EG", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="bg-gray-50 min-h-screen p-6" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-300 to-red-500 rounded-lg p-6 mb-6">
                <h1 className="text-2xl font-bold text-white">محمد رمضان</h1>
                <p className="text-blue-100">{formattedDate}</p>
            </div>

            {/* Profile Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-wrap items-center justify-between mb-6">
                    {/* User Info */}
                    <div className="flex items-center gap-4">
                        <img
                            src={ProfileImage}
                            alt="User"
                            className="w-30 h-30 rounded-full"
                        />
                        <div className="text-right">
                            <h2 className="text-xl font-bold text-gray-800">{userData.fullName}</h2>
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
                        <label className="block text-gray-600 mb-2 text-right">الاسم الكامل</label>
                        <input
                            type="text"
                            name="fullName"
                            value={userData.fullName}
                            onChange={handleInputChange}
                            disabled={!isEditable}
                            className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right ${!isEditable ? "bg-gray-100 cursor-not-allowed" : "bg-white"
                                }`}
                        />
                    </div>


{/* Email */}
                    <div>
                        <label className="block text-gray-600 mb-2 text-right">البريد الالكتروني</label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            disabled={!isEditable}
                            className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right ${!isEditable ? "bg-gray-100 cursor-not-allowed" : "bg-white"
                                }`}
                        />
                    </div>

                    {/* Gender */}
                    <div className="relative">
                        <label className="block text-gray-600 mb-2 text-right">الجنس</label>
                        <select
                            name="gender"
                            value={userData.gender}
                            onChange={handleInputChange}
                            disabled={!isEditable}
                            className={`appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right ${!isEditable ? "bg-gray-100 cursor-not-allowed" : "bg-white"
                                }`}
                        >
                            <option value="">اختر الجنس</option>
                            <option value="male">ذكر</option>
                            <option value="female">أنثى</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 pt-8 left-3 flex items-center text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.936a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                            </svg>
                        </div>
                    </div>


{/* Change Password Section */}
                    <div className="col-span-2">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 text-right">تغيير كلمة المرور</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Current Password */}
                            <div>
                                <label className="block text-gray-600 mb-2 text-right">كلمة المرور الحالية</label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={userData.currentPassword || ""}
                                    onChange={handleInputChange}
                                    disabled={!isEditable}
                                    placeholder="كلمة المرور الحالية"
                                    className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right ${!isEditable ? "bg-gray-100 cursor-not-allowed" : "bg-white"
                                        }`}
                                />
                            </div>

                            {/* New Password */}
                            <div>
                                <label className="block text-gray-600 mb-2 text-right">كلمة المرور الجديدة</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={userData.newPassword || ""}
                                    onChange={handleInputChange}
                                    disabled={!isEditable}
                                    placeholder="كلمة المرور الجديدة"
                                    className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right ${!isEditable ? "bg-gray-100 cursor-not-allowed" : "bg-white"
                                        }`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* User Shares Section */}
            <h3 className="text-2xl font-bold text-gray-800 my-10 text-center">تفاصيل الأسهم والارباح الخاصة بك</h3>

            <div className="bg-white shadow-lg rounded-lg p-6 my-10">
                <table className="table-auto text-center w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="  bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-gray-600 ">عدد الأسهم الخاصة بي</th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-600 ">الأرباح المستحقة</th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-600 ">سعر السهم الثابت</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 text-gray-800 ">500 سهم</td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-800 ">800,000 جنيه مصري</td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-800 ">5,000 جنيه مصري</td>
                        </tr>
                    </tbody>
                </table>
            </div>

{/* Properties Section */}
            <div className="my-10">
                <h3 className="text-4xl font-extrabold text-gray-800 my-15 text-center">المشاريع التي تشارك بها</h3>
                <Swiper
                    navigation={true}
                    autoplay={{ delay: 500 }}
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
                                <h4 className="text-lg font-bold text-gray-800 text-center">مشروع رقم {idx + 1}</h4>
                                <p className="text-gray-600 text-center">عدد الأسهم: {10 + idx * 5}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Profile;