export default function Hero() {
    return (
        <section className="mt-5">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-x-8">
                {/* Text Section */}
                <div className="lg:w-1/2 w-full text-right">
                    <div className="space-y-4 flex flex-col items-start">
                        {/* First Item */}
                        <div className="flex items-center w-full my-20">
                            <div className="w-full">
                                <h1 className="text-center font-sarala font-extrabold text-5xl leading-custom my-20">
                                    هنا ستجد استثمارك الأمثل
                                </h1>
                                <p className="text-gray-700 text-3xl font-bold">
                                    استكشف مجموعتنا المختارة بعناية من العقارات والاراضي الفاخرة المصممة خصيصًا لتلائم رؤيتك الفريدة لاستثمار أحلامك </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 w-full lg:mt-0 flex flex-col">
                    <div className="w-full h-[120px] lg:h-[120px] bg-gray-200 rounded-lg">
                        <img src="/PorepertyHero.jpg" alt="" className="object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}
