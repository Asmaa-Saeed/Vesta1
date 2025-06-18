// import BGImage from '../assets/Contact/contactBg.jpg';
import Footer from '../Layouts/Footer';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import ContactForm from '../Sections/Contact/ContactForm';
import Map from '../Sections/Contact/Map';



const Contact = () => {
    return (
        <div>
        {/* <div
          className="relative w-full h-80 flex  items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${BGImage})` }}
        >
          <div className="absolute inset-0 bg-white opacity-5 backdrop-blur-lg"></div>
          <h2 className="relative text-4xl font-bold  tracking-wide leading-normal text-center text-gray-200 z-10">
            Get In Touch With Us
          </h2>
        </div> */}

         {/* Map and Contact Info */}
         <div className='m-auto flex items-center flex-col mt-20 mb-10 '>
            <h1 className='text-red-600 text-2xl mb-2 font-bold tracking-wide'>تواصل معنا</h1>
            <h3 className='mb-3 tracking-wide'>نحن دائماً متحمسون للاستماع إليك</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl md:mx-auto sm:mx-3 mx-2">
           {/* Map Placeholder */}
         <div className="bg-white h-[480px] rounded-lg overflow-hidden shadow-lg">
           <div className="h-full w-full">
             <Map className="w-full h-full" zoom={13} />
           </div>
         </div>
         {/* Contact Details */}
         <div className="space-y-5">
           {/* Office Address */}
           <div className="p-6 rounded-lg shadow-lg border border-gray-200">
             <div className="flex items-center justify-end">
               <div className="text-right">
                 <p className="font-semibold tracking-wider">عنوان المكتب</p>
                 <p className="text-gray-500 mt-2 tracking-wider">محافظة أسيوط </p>
               </div>
               <span className="text-green-500 ml-3 mr-0">📍</span>
             </div>
           </div>

           {/* Phone Number */}
           <div className="p-6 rounded-lg shadow-lg border border-gray-200">
             <div className="flex items-center justify-end">
               <div className="text-right">
                 <p className="font-semibold tracking-wider">رقم الهاتف</p>
                 <p className="text-gray-500 mt-2 tracking-wide">+201127012002</p>
               </div>
               <span className="text-green-500 ml-3 mr-0"><FaPhone size={20} /></span>
             </div>
           </div>

           {/* Send Email */}
           <div className="p-6 rounded-lg shadow-lg border border-gray-200">
             <div className="flex items-center justify-end">
               <div className="text-right">
                 <p className="font-semibold tracking-wider">البريد الإلكتروني</p>
                 <p className="text-gray-500 mt-2 tracking-wider">Vesta@gmail.com</p>
               </div>
               <span className="text-blue-500 ml-3 mr-0"><FaEnvelope size={20} /></span>
             </div>
           </div>

           {/* Our Website */}
           <div className="p-6 rounded-lg shadow-lg border border-gray-200">
             <div className="flex items-center justify-end">
               <div className="text-right">
                 <p className="font-semibold tracking-wider">موقعنا الإلكتروني</p>
                 <p className="text-gray-500 mt-2 tracking-wider">www.vesta.com</p>
               </div>
               <span className="text-red-500 ml-3 mr-0">🌐</span>
             </div>
           </div>
         </div>
        
        </div>
        {/* contact form  */}
        <ContactForm/>
        {/* footer */}
        <Footer/>
    </div>

    )
}

export default Contact;