"use client";

import { useState, useEffect } from "react";

const HeroSection = () => {
    const [typedText, setTypedText] = useState("");

    const fullText = "سوواء كنت تبحث عن أرض احلامك أو فرصة استثمارية ، نحن نرافقك لنحول رؤيتك إلي الواقع  . "

    useEffect(() => {
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setTypedText((prev) => prev + fullText.charAt(currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 40);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section
            id="hero"
            className="hero bg-cover bg-center h-screen relative flex items-center justify-center"
            style={{ backgroundImage: "url('/LandPage.jpg')" , backgroundSize: '1300px' }}
            dir="rtl"
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

            {/* Text container */}
            <div className="relative z-10 text-center text-white w-full sm:w-2/3 lg:w-2/3 px-5">
                <h2
                    className="text-2xl lg:text-4xl font-extrabold mb-6 text-[#B40000]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Vesta
                </h2>

                {/* Typing paragraph */}
                <div className="h-[100px] lg:h-[100px] overflow-hidden mb-6 flex justify-center items-center">
                    <p
                        className="text-xl lg:text-3xl font-bold rtl-animation"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        style={{ wordSpacing: "1px" }}
                    >
                        {typedText}
                    </p>
                </div>

                {/* Call to action button */}
                <div className="flex justify-center">
                    <button
                        className="text-3xl font-extrabold rounded-lg text-white bg-[#B40000] transition transform hover:scale-105 py-3 px-20 lg:py-3 lg:px-20"
                        onClick={() => (window.location.href = "tel:")}
                    >
                        استثمر الان
                    </button>
                </div>
            </div>
        </section>

    );
};

export default HeroSection;
