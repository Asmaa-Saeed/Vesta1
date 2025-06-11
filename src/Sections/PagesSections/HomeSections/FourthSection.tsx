import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./FourthSection.css";

export default function FourthSection() {
    useEffect(() => {
        document.documentElement.style.setProperty("--contrast-color", "#fff");
        document.documentElement.style.setProperty("--background-color", "#000");
        document.documentElement.style.setProperty("--accent-color", "#ff4500");
    }, []);

    const services = [
        { id: 1, img: "/slider1.jpg", name: "الغردقة" },
        { id: 2, img: "/slider2.jpg", name: "أسيوط" },
        { id: 3, img: "/slider3.jpg", name: "المنيا" },
        { id: 4, img: "/slider4.jpg", name: "بني سويف" },
        { id: 5, img: "/slider1.jpg", name: "الغردقة" },
        { id: 6, img: "/slider2.jpg", name: "أسيوط" },
        { id: 7, img: "/slider3.jpg", name: "المنيا" },
    ];

    return (
        <section id="services-2" className="services-2 section py-16 relative">
            {/* Section Title */}
            <div className="container text-center px-6">
                <p className="text-custom font-sarala font-extrabold text-3xl leading-custom text-dark">
                    استكشف العقارات المتاحة في هذه المحافظات
                </p>
            </div>

            {/* Swiper Carousel */}
            <div className="container mx-auto relative px-6 pt-12">
                {/* Navigation Buttons */}
                <div className="relative z-50 group">
                    <button className="navigation-prev js-custom-prev absolute top-50 right-4 bg-white w-10 h-10 flex items-center justify-center shadow-lg rounded-full transition group-hover:bg-blue-500 z-50">
                        <BiChevronRight className="text-3xl text-black group-hover:text-white" />
                    </button>
                    <button className="navigation-next js-custom-next absolute top-50 left-4 bg-white w-10 h-10 flex items-center justify-center shadow-lg rounded-full transition group-hover:bg-blue-500 z-50">
                        <BiChevronLeft className="text-3xl text-black group-hover:text-white" />
                    </button>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    dir="rtl"
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 30 },
                        1200: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    pagination={{ clickable: true, el: ".swiper-pagination" }}
                    navigation={{ nextEl: ".js-custom-next", prevEl: ".js-custom-prev" }}
                    className="swiper relative z-40"
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.id} className="swiper-slide">
                            <div className="service-item relative overflow-hidden group">
                                {/* City Name */}
                                <span className="absolute top-4 left-4 bg-gray-200 text-gray-700 text-sm font-bold px-3 py-1 rounded-lg shadow-md z-10">
                                    {service.name}
                                </span>
                                {/* Image Container */}
                                <div className="w-[450px] h-[460px] mx-auto relative">
                                    <img
                                        src={service.img}
                                        alt={service.name}
                                        className="rounded-[15px] transition-transform duration-500 transform scale-100 group-hover:scale-110 w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="swiper-pagination mt-5 flex justify-center z-50 opacity-80 group-hover:opacity-100 transition-opacity"></div>
        </section>
    );
}