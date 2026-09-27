import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct"
import { Reset_Cart } from "../../features/CartSlice";
import { useState } from "react";
import Message from "../common/Message";

const CartItemSec = () => {

    const [showMessage, setShowMessage] = useState(null);

    const cartItems = useSelector((state)=> state.cartData.cart);
    const dispatch = useDispatch();

    
  return (
    <>
        {showMessage && (
        <Message
            text={showMessage.text}
            type={showMessage.type}
            onClose={() => setShowMessage(null)}
        />
         )}
    <section className="w-[90%] sm:w-[85%] lg:w-[80%] m-auto bg-(--white) shadow shadow-[#777] mb-16 sm:mb-20 lg:mb-25 p-3 sm:p-5 relative">

        <button
            onClick={() => dispatch(Reset_Cart())}
            className="py-2 px-3 sm:px-4 rounded-md border-0 cursor-pointer text-sm sm:text-base text-(--white)
            bg-red-500 transition duration-300 hover:bg-(--red) absolute -top-11 left-0"
        >
            مسح الكل
        </button>

        {/* Header */}
        <div className="hidden sm:grid grid-cols-3 gap-5 p-3 sm:p-4">
            <span className="text-base sm:text-lg text-(--primary) font-semibold ">
                المنتج
            </span>

            <span className="text-base sm:text-lg text-(--primary) font-semibold text-center">
                الكميه
            </span>

            <span className="text-base sm:text-lg text-(--primary) font-semibold text-left">
                الاجراء
            </span>
        </div>

        {/* Mobile Header */}
        <div className="sm:hidden text-center py-2">
            <span className="text-base text-(--primary) font-semibold">
                المنتجات
            </span>
        </div>

        {/* Products */}
        {cartItems.map(product => (
            <div key={product.id}>
                <hr className="w-full border-gray-200" />
                <CartProduct product={product} setShowMessage={setShowMessage} />
            </div>
        ))}

    </section>
    </>
  )
}

export default CartItemSec