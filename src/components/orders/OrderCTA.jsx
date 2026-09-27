import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";

const OrderCTA = () => {
  const cartItems = useSelector((state)=> state.cartData.cart);

  const handleWhatsApp = () => {

      const products = cartItems
          .map(product => `${product.quntity}x ${product.name}`)
          .join("\n\n");

      const message = `طلب جديد من الموقع:\n\n${products}`;

      const whatsappUrl = `https://wa.me/201097071419?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16">
      <div className="w-[80%] max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#0E2B52] px-6 py-12 md:px-12 text-center">

          {/* Decorative Elements */}
          <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#55C7C2]/10"></div>
          <div className="absolute -bottom-20 -left-16 w-48 h-48 rounded-full bg-[#86BFD1]/10"></div>

          <div className="relative z-10 max-w-2xl mx-auto">

            <span className="inline-block px-4 py-2 rounded-full bg-[#55C7C2]/15 text-[#55C7C2] font-semibold text-sm">
              جاهز لإرسال طلبك؟
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-5">
              أرسل طلبك الآن
            </h2>

            <p className="text-white/70 leading-8 mt-4">
              راجع المنتجات التي اخترتها، ثم أرسل طلبك مباشرة عبر WhatsApp
              وسنتواصل معك لتأكيد التفاصيل.
            </p>

            <button
              onClick={handleWhatsApp}
              className="mt-7 inline-flex items-center justify-center gap-3
              px-8 py-3.5 rounded-xl
              bg-[#55C7C2] text-white font-semibold
              hover:bg-[#3F6491]
              transition duration-300 cursor-pointer"
            >
              <FaWhatsapp className="text-2xl" />
              إرسال الطلب عبر WhatsApp
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderCTA;