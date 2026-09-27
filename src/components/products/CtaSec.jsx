import { NavLink } from "react-router-dom"

const CtaSec = () => {
  return (
<section className="py-25">
  <div className="w-[90%] max-w-6xl mx-auto">
    <div className="relative overflow-hidden rounded-3xl bg-(--primary) px-6 py-12 md:px-12 text-center">

      {/* Decorative Circles */}
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-(--accent-cyan)/15"></div>
      <div className="absolute -bottom-20 -left-16 w-48 h-48 rounded-full bg-(--accent-cyan)/15"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-5 items-center">

        <span className="px-4 py-2 rounded-full bg-(--accent-cyan)/15 text-(--accent-cyan) font-semibold text-sm">
          جاهز للطلب؟
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white ">
          اختر منتجاتك وأرسل طلبك بسهولة
        </h2>

        <p className="text-white/75 leading-8 ">
          أضف المنتجات التي تحتاجها إلى طلبك، ثم تواصل معنا مباشرة عبر
          WhatsApp لإتمام طلبك والاستفسار عن أي تفاصيل.
        </p>

        <NavLink
          to={"/order"}
          className="px-8 py-3 rounded-xl bg-(--accent-cyan) text-white font-semibold
          hover:bg-(--primary-light) transition duration-300 cursor-pointer"
        >
          عرض طلباتي
        </NavLink>

      </div>

    </div>
  </div>
</section>  )
}

export default CtaSec