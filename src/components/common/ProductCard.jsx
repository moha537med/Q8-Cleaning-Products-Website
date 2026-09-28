import { useDispatch, useSelector } from "react-redux";
import { Add_Product } from "../../features/CartSlice";
import Message from "./Message";
import { useState } from "react";

const ProductCard = ({ product , children }) => {

    const cartItems = useSelector((state) => state.cartData.cart);
    const disPatch = useDispatch();

    const [showMessage, setShowMessage] = useState(null);

    const producFound = cartItems.find(
        p => p.id === product.id
    );

    const handleClick = () => {

        if (producFound) {

            setShowMessage({
                text: "هذا المنتج موجود بالفعل في سلة طلباتك",
                type: "error"
            });

            return;
        }

        disPatch(Add_Product(product));

        setShowMessage({
            text: "تمت إضافة المنتج إلى سلة طلباتك",
            type: "success"
        });
    };

    return (
        <>
            {showMessage && (
                <Message
                    text={showMessage.text}
                    type={showMessage.type}
                    onClose={() => setShowMessage(null)}
                />
            )}

        <div className="p-4 max-sm:p-3 rounded-md bg-(--white) shadow shadow-[#777] flex flex-col gap-3 items-center transition duration-300 hover:scale-101 hover:shadow-[#0E2B52] w-full h-full">
            
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-sm"
            />

            <h2 className="text-lg max-sm:text-base text-(--primary) font-semibold text-center">
                {product.name}
            </h2>

            <div className="flex-1 w-full flex flex-col items-center justify-start">
                {children}
            </div>

            <button
                onClick={handleClick}
                className={`
                    py-2 px-4 max-sm:px-3
                    text-sm rounded-md border-0
                    transition duration-300
                    ${producFound
                        ? "bg-[#070]"
                        : "bg-(--primary) hover:bg-(--primary-dark)"
                    }
                    text-(--white)
                `}
            >
                {producFound ? "تم الاضافة" : "اضف الى السلة"}
            </button>

        </div>
        </>
    );
};

export default ProductCard;