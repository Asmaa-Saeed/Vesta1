export default function FinalSection() {
    return (
        <section className="py-16 bg-[#4166F5] text-center mt-50 md:mt-130 lg:mt-50">
            <div className="container mx-auto px-6">
                {/* Title */}
                <h2 className="text-4xl font-extrabold text-white mb-4">
                    جاهز لبدء رحلتك ؟
                </h2>
                {/* Subtitle */}
                <p className="text-lg text-white mb-8">
                    <span className="font-bold">. Vesta </span>
                    انضم إلى آلاف العملاء الراضين الذين وجدوا عقارهم المثالي مع
                </p>
                {/* Buttons */}
                <div className="flex justify-center space-x-4">
                    <button className="bg-white text-[#4166F5] font-bold py-4 px-15 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer">
                        ابدأ البيع
                    </button>
                    <button className="border border-white text-white font-bold py-4 px-15 rounded-lg hover:bg-white hover:text-[#4166F5] transition cursor-pointer">
                        ابدأ الاستثمار
                    </button>
                </div>
            </div>
        </section>
    );
}