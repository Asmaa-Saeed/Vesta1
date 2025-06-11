export default function FifthSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start space-x-8">
                {/* Text Section */}
                <div className="lg:w-1/2 w-full text-right space-y-8">
                    <h2 className="text-4xl font-extrabold text-black mb-15 mr-10">
                        كيف تبدأ رحلتك الاستثمارية معنا
                    </h2>
                    <div className="space-y-4 flex flex-col items-start">
                        {/* First Item */}
                        <div className="flex items-center w-full mb-20">
                            <div className="w-4/5">
                                <h3 className="text-custom font-sarala font-extrabold text-2xl leading-custom mb-2">
                                    اعثر على عقارك المناسب
                                </h3>
                                <p className="text-gray-600">
                                    استعرض مجموعة واسعة من العقارات والأراضي المتاحة في مختلف المدن، واختر ما يناسب احتياجاتك وموقعك المفضل بسهولة تامة.
                                </p>
                            </div>
                            <div className="w-1/5 flex justify-center">
                                <img src="/Icon (1).png" alt="" className="w-10 h-10" />
                            </div>
                        </div>

                        {/* Second Item */}
                        <div className="flex items-center w-full mb-20">

                            <div className="w-4/5">
                                <h3 className="text-custom font-sarala font-extrabold text-2xl leading-custom mb-2">
                                    احجز حصتك في المشروع
                                </h3>
                                <p className="text-gray-600">
                                    اختر العقار أو الأرض المناسبة، وامتلك حصتك بكل سهولة وشفافية، مع خيارات مرنة تناسب احتياجاتك واستثمارك.
                                </p>
                            </div>
                            <div className="w-1/5 flex justify-center">
                                <img src="/icon (2).png" alt="" className="w-10 h-10" />
                            </div>
                        </div>

                        {/* Third Item */}
                        <div className="flex items-center w-full ">
                            <div className="w-4/5">
                                <h3 className="text-custom font-sarala font-extrabold text-2xl leading-custom mb-2">
                                    احصل على عوائد استثمارك
                                </h3>
                                <p className="text-gray-600">
                                    تابع عوائد استثمارك العقاري بشكل دوري، واستمتع بتحصيل الأرباح التي حققتها من استثماراتك بسهولة وشفافية.
                                </p>
                            </div>
                            <div className="w-1/5 flex justify-center">
                                <img src="/Icon.png" alt="" className="w-10 h-10" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex flex-col space-y-6">
                    <div className="w-full h-[200px] lg:h-[200px] bg-gray-200 rounded-lg">
                        <img src="/FifthSection.jpg" alt="" className="object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}