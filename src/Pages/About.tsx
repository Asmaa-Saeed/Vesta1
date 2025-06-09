
const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">من نحن</h2>
        <p className="text-gray-500 mb-4">خيارك الموثوق في عالم العقارات</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-all">
          استعراض كافة التفاصيل
        </button>
      </div>

      {/* Image and Description Section */}
      <div className="bg-white shadow-md rounded overflow-hidden">
        <img
          src="/path/to/your/image.png" // Replace with actual path
          alt="House model"
          className="w-full h-64 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">من نحن</h3>
          <p className="text-gray-600 leading-relaxed">
            نحن شركة رائدة في مجال الاستثمار والتسويق العقاري. نعمل بشغف والتزام لتقديم أفضل الحلول
            العقارية التي تلبي احتياجات العملاء ونساهم في تحقيق تطلعاتهم سواء في البيع أو الاستثمار.
            بفريق متميز ومتخصص، نحرص على تقديم خدمات احترافية بمعايير عالية من الجودة والمصداقية.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/path/to/vision-image.png" // Replace with actual path
          alt="Vision"
          className="w-full md:w-1/2 rounded shadow-md"
        />
        <div className="text-right md:w-1/2">
          <h3 className="text-xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
          <p className="text-gray-600 leading-relaxed">
            أن نكون الواجهة الأولى في عالم العقارات الرقمي في الشرق الأوسط، بتقديم تجربة سلسة ومميزة في بيع ومشاركة العقارات.
          </p>
        </div>
      </div>

      <hr className="my-10 border-gray-300" />

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <img
          src="/path/to/mission-image.png" // Replace with actual path
          alt="Mission"
          className="w-full md:w-1/2 rounded shadow-md"
        />
        <div className="text-right md:w-1/2">
          <h3 className="text-xl font-bold text-gray-800 mb-4">رسالتنا</h3>
          <p className="text-gray-600 leading-relaxed">
            بناء علاقة دائمة مع العميل تقوم على الثقة والشفافية، وتحقيق أعلى عائد استثماري له من خلال حلولنا الذكية والمتقدمة.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">قيمنا الاساسية</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Transparency */}
          <div className="bg-white shadow-md rounded p-6 text-right">
            <h4 className="text-lg font-bold text-gray-800 mb-2">الشفافية</h4>
            <p className="text-gray-600">نضع الثقة والصدق في صميم تعاملاتنا، ونقدم لك كل التفاصيل بوضوح. ✅</p>
          </div>
          {/* Innovation */}
          <div className="bg-white shadow-md rounded p-6 text-right">
            <h4 className="text-lg font-bold text-gray-800 mb-2">الابتكار</h4>
            <p className="text-gray-600">نستخدم أحدث الأدوات والتقنيات لتقديم تجربة فريدة ومريحة. 🚀</p>
          </div>
          {/* Commitment */}
          <div className="bg-white shadow-md rounded p-6 text-right">
            <h4 className="text-lg font-bold text-gray-800 mb-2">الالتزام</h4>
            <p className="text-gray-600">نلتزم بتحقيق نتائج حقيقية ومرضية لعملائنا في كل خطوة. 🤝</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
