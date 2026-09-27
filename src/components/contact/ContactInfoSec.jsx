import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt} from "react-icons/fa";

const ContactInfoSec = () => {
    const cards = [
        {icon: <FaPhoneAlt /> , heading:"اتصل بنا", desc:"0100 123 4567" , linkText:"اتصل بنا" , link:"tel:+201001234567"},
        {icon: <FaWhatsapp /> , heading:"واتساب", desc:"0100 123 4567", linkText:"تواصل عبر WhatsApp" , link:"https://wa.me/201097071419"},
        {icon:<FaMapMarkerAlt/> , heading:"موقعنا", desc:"المنطقة الصناعية، أسيوط، مصر" , linkText:"عرض على الخريطة" , link:"#"},
    ]

  return (
    <section className="w-[90%] sm:w-[85%] lg:w-[80%] py-12 sm:py-16 lg:py-25 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-10">
        <h2 className="col-span-1 sm:col-span-2 lg:col-span-4 text-center text-2xl sm:text-3xl text-(--primary) font-bold">
            معلومات التواصل
        </h2>

        {cards?.map(card => (
            <div className="flex flex-col items-center shadow gap-3 bg-white border border-[#86BFD1]/25 rounded-2xl p-5 sm:p-6 transition duration-300 hover:shadow-[#55C7C2]/30 hover:scale-104">

                <div className="w-14 h-14 sm:w-15 sm:h-15 flex items-center justify-center rounded-xl bg-[#55C7C2]/15 text-[#55C7C2] text-xl sm:text-2xl">
                    {card.icon}
                </div>

                <h3 className="text-lg sm:text-xl text-(--primary) font-bold text-center">
                    {card.heading}
                </h3>

                <p className="text-sm sm:text-md text-(--txt-secondary) text-center">
                    {card.desc}
                </p>

                <a
                    href={card.link}
                    target="_blank"
                    className="w-full sm:w-3/4 py-2 text-sm sm:text-base text-center rounded-sm border-0 bg-(--primary) text-(--white) cursor-pointer transition duration-300 hover:bg-(--primary-dark)"
                >
                    {card.linkText}
                </a>

            </div>
        ))}
    </section>
  )
}


export default ContactInfoSec