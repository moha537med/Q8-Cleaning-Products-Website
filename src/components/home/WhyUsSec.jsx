import { FaBoxes, FaHeadset, FaShoppingCart } from "react-icons/fa"
import { MdVerified } from "react-icons/md"

const WhyUsSec = () => {

    const cards = [
        {icon:<MdVerified /> , heading:"جودة موثوقة", desc:"نحرص على تقديم منتجات بجودة مناسبة للاستخدام اليومي."},
        {icon:<FaBoxes /> , heading:"تشكيلة متنوعة", desc:"مجموعة متنوعة من منتجات التنظيف والعطور لتلبية احتياجاتك."},
        {icon: <FaShoppingCart /> , heading:"سهولة الطلب", desc:"اختر منتجاتك وأرسل طلبك بسهولة عبر WhatsApp."},
        {icon: <FaHeadset /> , heading:"خدمة عملاء مباشرة", desc:"تواصل معنا مباشرة للاستفسار أو متابعة طلبك."},
    ]

  return (
<section className="w-[90%] sm:w-[85%] lg:w-[80%] py-10 sm:py-12 lg:py-15 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-10">
    <h2 className="col-span-1 sm:col-span-2 lg:col-span-4 text-center text-2xl sm:text-3xl text-(--primary) font-bold">
        لماذا نحن ؟
    </h2>

    {cards?.map(card => (
        <div className="flex flex-col items-center gap-3 shadow bg-white border border-[#86BFD1]/25 
        rounded-2xl p-5 sm:p-6 transition duration-300 hover:scale-104 hover:shadow-[#55C7C2]/30">
            <div className="w-14 h-14 sm:w-15 sm:h-15 flex items-center justify-center rounded-xl bg-[#55C7C2]/15 text-[#55C7C2] text-xl sm:text-2xl">
                {card.icon}
            </div>

            <h3 className="text-lg sm:text-xl text-(--primary) font-bold text-center">
                {card.heading}
            </h3>

            <p className="text-sm sm:text-md text-(--txt-secondary) text-center">
                {card.desc}
            </p>
        </div>
    ))}
</section>
  )
}

export default WhyUsSec