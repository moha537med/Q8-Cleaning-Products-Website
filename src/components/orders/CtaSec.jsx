import { ShoppingCart } from "lucide-react"
import { NavLink } from "react-router-dom"
const CtaSec = () => {
  return (
    <section className="w-[90%] sm:w-[75%] md:w-[65%] lg:w-[50%] m-auto py-8 sm:py-10 px-4 sm:px-5 flex flex-col gap-4 sm:gap-5 items-center text-center bg-(--bg-section)">
        <div className="w-16 h-16 sm:w-20 sm:h-20 grid place-content-center rounded-full bg-(--primary-light)/15 text-xl sm:text-2xl text-(--primary)">
            <ShoppingCart />
        </div>

        <h2 className="text-lg sm:text-xl text-(--primary) font-semibold">
            لا توجد منتجات في طلبك
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-(--txt-secondary) leading-7">
            اضف المنتجات التي تحتاجها من صفحه المنتجات ثم عد لارسال طلبك
        </p>

        <NavLink
            to="/products"
            className={`py-2 px-4 text-sm sm:text-base rounded-md border-0 transition duration-300 bg-(--primary) text-(--white) hover:bg-(--primary-dark)`}
        >
            تصفح المنتجات
        </NavLink>
    </section>
  )
}

export default CtaSec