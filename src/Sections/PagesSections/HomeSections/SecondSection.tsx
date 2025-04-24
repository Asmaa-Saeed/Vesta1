"use client";
import { useEffect, useState, useRef } from "react";

export default function SecondSection() {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const cardRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
                    if (entry.isIntersecting && index !== -1) {
                        setVisibleCards((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            {
                threshold: 0.1, // Adjust the threshold as needed
            }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div className="bg-gray-50 py-10" id="fourthSection">
            <h1
                className={`col-span-1 sm:col-span-2 lg:col-span-2 text-5xl p-4 font-extrabold text-dark-600 mt-5 text-center transition-all duration-1000 ease-in-out transform ${visibleCards.length > 0 ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
            >
                لماذا يجب ان تعمل معنا
            </h1>
            <div
                className={`text-center mb-10 text-gray-600 text-lg transition-all duration-1000 ease-in-out transform ${visibleCards.length > 0 ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
            >
                فيستا تجعل الاستثمار العقاري بسيطًا وآمنًا ومتاحًا
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-5">
                {[
                    {
                        img: "/Vector.png",
                        alt: "Automatic Returns",
                        title: "عوائد تلقائية",
                        description: "يتم إضافة أرباحك تلقائيًا إلى حسابك بدون أي متاعب",
                    },
                    {
                        img: "/Vector (2).png",
                        alt: "Invest with Small Budget",
                        title: "استثمر بميزانية صغيرة",
                        description: "ابدأ رحلتك الاستثمارية بمبلغ يبدأ من ٥٠٠٠",
                    },
                    {
                        img: "/Vector (1).png",
                        alt: "Wide Range of Properties",
                        title: "مجموعة واسعة من العقارات",
                        description: "اختر من بين العقارات السكنية والتجارية والصناعية",
                    },
                ].map((card, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            cardRefs.current[index] = el!;
                        }}
                        className={`text-center transition-all duration-1000 ease-in-out transform ${visibleCards.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-75"
                            }`}
                    >
                        <div className="mb-4">
                            <img
                                src={card.img}
                                alt={card.alt}
                                className="w-[27px] h-[32.43px] mx-auto"
                            />
                        </div>
                        <h3 className="text-2xl font-extrabold mb-2">{card.title}</h3>
                        <p className="text-gray-600">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
