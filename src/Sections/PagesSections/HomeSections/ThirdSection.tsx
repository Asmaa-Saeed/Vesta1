import { useEffect, useState, useRef } from "react";

export default function ThirdSection() {
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

    const cards = [
        {
            title: "بلو لاجون",
            location: "الساحل الشمالي",
            price: "8,500,000 جم",
            image: "/image1.jpg",
        },
        {
            title: "جاردن فيو",
            location: "الشيخ زايد - 6 أكتوبر",
            price: "4,000,000 جم",
            image: "/image2.jpg",
        },
        {
            title: "رويال ريزيدنس",
            location: "التجمع الخامس - القاهرة الجديدة",
            price: "5,000,000 جم",
            image: "/image3.jpg",
        },
        {
            title: "صن ست فيو",
            location: "مرسى علم",
            price: "3,200,000 جم",
            image: "/image4.jpg",
        },
        {
            title: "جرين بارك",
            location: "مدينة نصر",
            price: "6,000,000 جم",
            image: "/image5.jpg",
        },
        {
            title: "سي فيو",
            location: "العين السخنة",
            price: "7,500,000 جم",
            image: "/image6.jpg",
        },
    ];

    return (
        <div className="bg-gray-50 py-10" id="thirdSection">
            <h2 className="text-center text-4xl font-extrabold mb-8">عقارات مميزة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {cards.map((card, index) => (
                    <div
                    key={index}
                    ref={(el) => {
                      cardRefs.current[index] = el!;
                    }}
                    className={`bg-white shadow-md rounded-lg p-4 text-center transition-all duration-1000 ease-in-out transform ${
                      visibleCards.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                  >
                  
                        <div className="mb-4">
                            <div
                                className="w-full h-[240px] mx-auto bg-gray-200 rounded-[3px]"
                                style={{
                                    backgroundImage: `url('${card.image}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                        </div>
                        <h3 className="text-lg font-bold">{card.title}</h3>
                        <p className="text-gray-500 text-sm">{card.location}</p>
                        <div className="flex justify-between items-center mt-4">
                            <button className="text-sm font-bold text-blue-600 border border-blue-600 px-4 py-1 rounded-lg hover:bg-blue-500 hover:text-white">
                                عرض التفاصيل
                            </button>
                            <span className="text-blue-600 font-bold">{card.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
