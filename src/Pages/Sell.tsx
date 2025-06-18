import React, { useState, FormEvent } from "react";

interface FormData {
    propertyName: string;
    location: string;
    propertyType: string;
    unitType: string;
    description: string;
    visitTime: string;
    visitDate: string;
}

const Sell = () => {
    const [propertyType, setPropertyType] = useState(""); // لتحديد نوع العقار
    const [formData, setFormData] = useState<FormData>({
        propertyName: "",
        location: "",
        propertyType: "",
        unitType: "",
        description: "",
        visitTime: "",
        visitDate: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePropertyTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setPropertyType(value);
        setFormData(prev => ({
            ...prev,
            propertyType: value,
            unitType: value === "أرض" ? "" : prev.unitType
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you would typically send the data to your backend
        alert("تم إرسال النموذج بنجاح! سنتواصل معك قريباً.");
    };

    return (
        <>
            <section className="py-16" dir="rtl">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-3xl font-bold mb-12">
                        خطوات عرض وحدتك بسهولة
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Step 1 */}
                        <div className="bg-[#E4EBF299] shadow-md rounded-lg p-6 text-center">
                            <div className="w-20 h-20 mx-auto bg-white font-bold rounded-full flex items-center justify-center mb-4">
                                <span className="text-base">
                                    1 <br /> الخطوة
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                سجل وحدتك بسهولة
                            </h3>
                            <p className="text-gray-600">
                                أضف جميع المعلومات الخاصة بوحدتك
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-[#E4EBF299] shadow-md rounded-lg p-6 text-center">
                            <div className="w-20 h-20 mx-auto bg-white font-bold rounded-full flex items-center justify-center mb-4">
                                <span className="text-base">
                                    2 <br /> الخطوة
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                سيتواصل فريقنا معك
                            </h3>
                            <p className="text-gray-600">
                                سنساعدك في كل التفاصيل لعرض وحدتك
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-[#E4EBF299] shadow-md rounded-lg p-6 text-center">
                            <div className="w-20 h-20 mx-auto bg-white font-bold rounded-full flex items-center justify-center mb-4">
                                <span className="text-base">
                                    3 <br /> الخطوة
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                ابدأ في جني الأرباح
                            </h3>
                            <p className="text-gray-600">
                                بعد مراجعة بياناتك، سننشر وحدتك على منصتنا ويبدأ المستثمرين في مشاركتها.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Form Section */}
            <section className="py-16" dir="rtl">
                <div className="container mx-auto px-6">
                    <div className="bg-[#E4EBF299] shadow-lg rounded-lg p-8">
                        <h2 className="text-center text-2xl font-bold mb-6">
                            املأ النموذج لتسجيل وحدتك
                        </h2>
                        <p className="text-center text-gray-800 mb-8">
                            خصوصيتك مهمة بالنسبة لنا لن ننشر أو نشارك معلوماتك مع أي شخص
                        </p>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Property Name */}
                            <input
                                type="text"
                                name="propertyName"
                                value={formData.propertyName}
                                onChange={handleInputChange}
                                placeholder="اسم العقار"
                                required
                                className="border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2 placeholder:text-black"
                            />

                            {/* Location */}
                            <div className="relative w-full mb-4">
                                <select 
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    required
                                    className="appearance-none w-full text-right border bg-white border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">الموقع</option>
                                    <option value="القاهرة">القاهرة</option>
                                    <option value="الإسكندرية">الإسكندرية</option>
                                    <option value="الجيزة">الجيزة</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.936a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Type */}
                            <div className="relative w-full mb-4">
                                <select
                                    name="propertyType"
                                    value={formData.propertyType}
                                    onChange={handlePropertyTypeChange}
                                    required
                                    className="appearance-none w-full text-right border bg-white border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">نوع العقار</option>
                                    <option value="عقار">عقار</option>
                                    <option value="أرض">أرض</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.936a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                                    </svg>
                                </div>
                            </div>
                            
                            {propertyType !== "أرض" && (
                                <div className="relative w-full sm:col-span-2">
                                    <select 
                                        name="unitType"
                                        value={formData.unitType}
                                        onChange={handleInputChange}
                                        required
                                        className="appearance-none w-full text-right border bg-white border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">نوع الوحدة</option>
                                        <option value="سكني">عقار سكني</option>
                                        <option value="تجاري">عقار تجاري</option>
                                        <option value="صناعي">عقار صناعي</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.936a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                            
                            {/* Textarea */}
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="الوصف"
                                required
                                className="border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2 placeholder:text-black"
                                rows={4}
                            />
                            
                            {/* Visit Date */}
                            <div className="relative w-full sm:col-span-2">
                                <label className="block text-gray-600 mb-2 text-right">حدد موعد الزيارة</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="time"
                                        name="visitTime"
                                        value={formData.visitTime}
                                        onChange={handleInputChange}
                                        required
                                        className="border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="date"
                                        name="visitDate"
                                        value={formData.visitDate}
                                        onChange={handleInputChange}
                                        required
                                        className="border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                {/* Important Notes */}
                                <p className="text-sm text-gray-600 mt-2">
                                    <strong>ملاحظات هامة:</strong> يجب إحضار صورة البطاقة الشخصية وعقد ملكية العقار أو الوحدة (الأرض - العقار).
                                </p>
                            </div>

                            {/* Submit Button */}
                            <div className="sm:col-span-2 flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-red-600 text-white font-bold py-2 px-20 rounded-lg hover:bg-[#B40000] transition duration-300"
                                >
                                    إرسال
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sell;