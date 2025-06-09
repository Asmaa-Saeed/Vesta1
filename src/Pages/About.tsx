import Footer from "../Layouts/Footer";
import SectionCard from "../components/SectionCard";
import aboutUsImage from "../../public/assets/aboutUs/vision.png";
import missionImage from "../../public/assets/aboutUs/mission.png";
import visionImage from "../../public/assets/aboutUs/vision.png";

const AboutUs = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold mb-3 text-red-600">
            مَن نَحنُ
          </h2>
          <p className="text-lg text-gray-500 mb-4">
            خيارك الموثوق في عالم الاستثمار
          </p>
        </div>

        {/* Image and Description Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={aboutUsImage}
            alt="House model"
            className="w-full h-80 object-cover"
          />
          <div className="p-6 text-center">
            <p className="text-base text-gray-600 leading-relaxed">
              نحن شركة رائدة في مجال الاستثمار والتسويق العقاري. نعمل بشغف
              والتزام لتقديم أفضل الحلول العقارية التي تلبي احتياجات العملاء
              ونساهم في تحقيق تطلعاتهم سواء في البيع أو الاستثمار. بفريق متميز
              ومتخصص، نحرص على تقديم خدمات احترافية بمعايير عالية من الجودة
              والمصداقية.
            </p>
          </div>
        </div>

        {/* Vision and Mission Section */}

        <div className="w-full py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 px-12">
              <img
                src={missionImage}
                alt="Mission"
                className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-md"
              />
              <SectionCard
                icon={
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="bg-blue-500 rounded-full p-3"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l2 2" />
                  </svg>
                }
                title="رؤيتنا"
                text="سواء كنت تبحث عن أرض أحلامك أو فرصة استثمارية، نحن نرافقك لنحوّل رؤيتك العقارية إلى واقع."
              />
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-300" />

        <div className="w-full py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 px-12">
              <SectionCard
                icon={
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="bg-red-500 rounded-full p-3"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                }
                title="رسالتنا"
                text="نسعى إلى تمكين الأفراد والمستثمرين من اتخاذ قرارات عقارية ناجحة، عبر تقديم خدمات احترافية، ومعلومات دقيقة، وتجارب مميزة في شراء وبيع الأراضي والعقارات، بكل شفافية ومصداقية."
              />
              <img
                src={visionImage}
                alt="Vision"
                className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-300" />

        {/* Core Values Section */}
        <div className="text-center py-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            قيمنا الاساسية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Transparency */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-right">
              <div className="flex justify-center mb-4">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-center text-gray-800 mb-3">الشفافية</h4>
              <p className="text-base text-center text-gray-600">
                نضع الثقة والصدق في صميم تعاملاتنا، ونقدم لك كل التفاصيل بوضوح.
              </p>
            </div>
            {/* Innovation */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-right">
              <div className="flex justify-center mb-4">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-center text-gray-800 mb-3">الابتكار</h4>
              <p className="text-base text-center text-gray-600">
                نستخدم أحدث الأدوات والتقنيات لتقديم تجربة فريدة ومريحة.
              </p>
            </div>
            {/* Commitment */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-right">
              <div className="flex justify-center mb-4">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-center text-gray-800 mb-3">الالتزام</h4>
              <p className="text-base text-center text-gray-600">
                نلتزم بتحقيق نتائج حقيقية ومرضية لعملائنا في كل خطوة.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
