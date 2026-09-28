import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Decrement_Quantity, Increment_Quantity, Remove_Product } from "../../features/CartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartProduct = ({ product, setShowMessage }) => {

    const cartItems = useSelector((state) => state.cartData.cart);
    const dispatch = useDispatch();

    const index = cartItems.findIndex(
        p => p.id === product.id
    );


    const handleDelete = () => {

        dispatch(Remove_Product(product));

        setShowMessage({
            text: "تم حذف المنتج من طلباتك بنجاح",
            type: "success"
        });
    };


    const handleIncrementQuantity = () => {

        if (cartItems[index].quntity === cartItems[index].stock) {

            setShowMessage({
                text: "وصلت للحد الاقصى من الطلب لهذا المنتج",
                type: "error"
            });

            return;
        }

        dispatch(Increment_Quantity(product));
    };


    const handleDecrementQuantity = () => {

        if (cartItems[index].quntity === 1) {

            setShowMessage({
                text: "لا يمكن طلب اقل 1 كميه لأي منتج",
                type: "error"
            });

            return;
        }

        dispatch(Decrement_Quantity(product));
    };


    return (
        <div className="p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-3 items-center gap-5 transition duration-300 hover:scale-101 hover:shadow-[#0E2B52]">

            {/* Product */}
            <div className="col-span-2 sm:col-span-1 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center">

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 sm:w-15 sm:h-15 rounded-sm object-cover"
                />

                <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-3">

                    <h2 className="text-base sm:text-lg text-(--primary) font-semibold">
                        {product.name}
                    </h2>

                    <p className="text-sm sm:text-base text-(--txt-secondary)">
                        {product.catogrey}
                    </p>

                </div>

            </div>


            {/* Quantity */}
            <div className="flex justify-center items-center">

                <div className="flex overflow-hidden border-2 rounded-md border-gray-200">

                    <button
                        onClick={handleIncrementQuantity}
                        className="py-1.5 px-3 sm:py-2 sm:px-4 text-lg sm:text-xl border-0 transition duration-300 bg-(--primary-light)/15 text-(--primary) cursor-pointer hover:bg-(--primary-light)/30"
                    >
                        <FaPlus className="text-[12px]"/>
                    </button>

                    <span className="min-w-12 sm:min-w-14 flex items-center justify-center text-base sm:text-lg text-(--primary) py-1.5 px-3 sm:py-2 sm:px-4">
                        {product.quntity}
                    </span>

                    <button
                        onClick={handleDecrementQuantity}
                        className="py-1.5 px-3 sm:py-2 sm:px-4 text-md sm:text-xl border-0 transition duration-300 bg-(--primary-light)/15 text-(--primary) cursor-pointer hover:bg-(--primary-light)/30"
                    >
                        <FaMinus className="text-[12px]"/>
                    </button>

                </div>

            </div>


            {/* Delete */}
            <div className="flex justify-end items-center">

                <RiDeleteBin6Line
                    onClick={handleDelete}
                    className="text-xl sm:text-2xl text-(--red) cursor-pointer transition duration-300 hover:scale-110"
                />

            </div>

        </div>
    );
};

export default CartProduct;