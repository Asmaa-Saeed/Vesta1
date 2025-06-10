import { useEffect, useState, useRef } from "react";

export default function SecondSectionProp() {
    const cards = [
        {
            title: "بلو لاجون",
            location: "الساحل الشمالي",
            price: 8500000,
            image: "/image1.jpg",
            type: "عقار",
        },
        {
            title: "جاردن فيو",
            location: "الشيخ زايد - 6 أكتوبر",
            price: 4000000,
            image: "/image2.jpg",
            type: "عقار",
        },
        {
            title: "رويال ريزيدنس",
            location: "التجمع الخامس - القاهرة الجديدة",
            price: 5000000,
            image: "/image3.jpg",
            type: "عقار",
        },
        {
            title: "صن ست فيو",
            location: "مرسى علم",
            price: 3200000,
            image: "/image4.jpg",
            type: "عقار",
        },
        {
            title: "جرين بارك",
            location: "مدينة نصر",
            price: 6000000,
            image: "/image5.jpg",
            type: "عقار",
        },
        {
            title: "سي فيو",
            location: "العين السخنة",
            price: 7500000,
            image: "/image6.jpg",
            type: "عقار",
        },
        {
            title: "أرض الجيزة",
            location: "الجيزة",
            price: 11000000,
            image: "/image2.jpg",
            type: "أرض",
        },
        {
            title: "أرض دهب",
            location: "دهب",
            price: 200000,
            image: "/image1.jpg",
            type: "أرض",
        },
        {
            title: "أرض مدينة نصر",
            location: "مدينة نصر",
            price: 2000000,
            image: "/image5.jpg",
            type: "أرض",
        },
        {
            title: "أرض بني سويف",
            location: "بني سويف",
            price: 7500000,
            image: "/image6.jpg",
            type: "أرض",
        },
        {
            title: "أرض الغردقة",
            location: "الغردقة",
            price: 700000,
            image: "/image2.jpg",
            type: "أرض",
        },
    ];

    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState<string>(""); // State for selected price range
    const [selectedLocation, setSelectedLocation] = useState<string>(""); // State for selected location
    const [searchQuery, setSearchQuery] = useState<string>(""); // حالة البحث العام
    const [selectedType, setSelectedType] = useState<string>("الكل"); // حالة التصنيف
    const [filteredCards, setFilteredCards] = useState(cards); // State for filtered cards

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
            // eslint-disable-next-line react-hooks/exhaustive-deps
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSearch = () => {
        let minPrice = 0;
        let maxPrice = Infinity;

        switch (selectedPriceRange) {
            case "lessThan500k":
                maxPrice = 500000;
                break;
            case "500kTo1.5m":
                minPrice = 500000;
                maxPrice = 1500000;
                break;
            case "1.5mTo3m":
                minPrice = 1500000;
                maxPrice = 3000000;
                break;
            case "3mTo5m":
                minPrice = 3000000;
                maxPrice = 5000000;
                break;
            case "5mTo10m":
                minPrice = 5000000;
                maxPrice = 10000000;
                break;
            case "moreThan10m":
                minPrice = 10000000;
                break;
            default:
                break;
        }

        const filtered = cards.filter(
            (card) =>
                card.price >= minPrice &&
                card.price <= maxPrice &&
                (selectedLocation === "" || card.location.includes(selectedLocation)) &&
                (searchQuery === "" || card.title.includes(searchQuery)) &&
                (selectedType === "الكل" || card.type === selectedType)
        );
        setFilteredCards(filtered);
    };

    useEffect(() => {
        handleSearch();
    }, [searchQuery, selectedPriceRange, selectedLocation, selectedType, handleSearch]);

    return (
        <div className="bg-gray-50 py-50" id="thirdSection">
            {/* Filter Section */}
            <div className="bg-white shadow-md rounded-lg px-6">
                <div className="gap-4 text-right">
                    {/* Tabs */}
                    <div className="space-x-4 inline-block">
                        <button
                            onClick={() => setSelectedType("عقار")}
                            className={`font-bold px-4 cursor-pointer transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-b-2 py-2 ${selectedType === "عقار" ? "text-black border-b-2 border-black" : "text-gray-500"
                                }`}
                        >
                            عقارات
                        </button>
                        <button
                            onClick={() => setSelectedType("أرض")}
                            className={`font-bold px-4 cursor-pointer transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-b-2 py-2 ${selectedType === "أرض" ? "text-black border-b-2 border-black" : "text-gray-500"
                                }`}
                        >
                            أراضي
                        </button>
                        <button
                            onClick={() => setSelectedType("الكل")}
                            className={`font-bold cursor-pointer transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-b-2 px-4 py-2 ${selectedType === "الكل" ? "text-black border-b-2 border-black" : "text-gray-500"
                                }`}
                        >
                            الكل
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mb-8">
                <div className="flex flex-wrap items-center justify-end gap-4 w-full">
                    {/* Price Select */}
                    <div className="relative w-1/3">
                        <select
                            value={selectedPriceRange}
                            onChange={(e) => setSelectedPriceRange(e.target.value)}
                            className="border border-gray-300 w-full text-right text-gray-700 font-bold pr-4 pl-4 py-2 rounded-lg placeholder-gray-500 focus:outline-none"
                        >
                            <option value="">جميع فئات الاسعار</option>
                            <option value="lessThan500k">أقل من 500 ألف</option>
                            <option value="500kTo1.5m">من 500 ألف إلى مليون ونصف</option>
                            <option value="1.5mTo3m">من مليون ونصف إلى 3 مليون</option>
                            <option value="3mTo5m">من 3 مليون إلى 5 مليون</option>
                            <option value="5mTo10m">من 5 إلى 10 مليون</option>
                            <option value="moreThan10m">أكثر من 10 مليون</option>
                        </select>
                    </div>

                    {/* Location Select */}
                    <div className="relative w-1/3">
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="border border-gray-300 text-right w-full text-gray-700 font-bold pr-4 pl-4 py-2 rounded-lg placeholder-gray-500 focus:outline-none"
                        >
                            <option value="">جميع المناطق </option>
                            {[...new Set(cards.map((card) => card.location))].map((location, index) => (
                                <option key={index} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* General Search Input */}
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="...ابحث عن"
                        className="border border-gray-300 text-right w-1/4 text-gray-700 font-bold px-4 py-2 rounded-lg placeholder-gray-500 focus:outline-none"
                    />
                </div>
            </div>

            {/* Cards Section */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
                style={{ direction: "rtl" }}
            >
                {filteredCards.map((card, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            cardRefs.current[index] = el!;
                        }}
                        className={`bg-white shadow-md rounded-lg p-4 text-center transition-all duration-1000 ease-in-out transform ${visibleCards.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-75"
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
                            <span className="text-blue-600 font-bold">{card.price.toLocaleString()} جم</span>
                            <button className="text-sm font-bold text-blue-600 border border-blue-600 px-4 py-1 rounded-lg hover:bg-blue-500 hover:text-white">
                                عرض التفاصيل
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
