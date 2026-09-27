import { useEffect } from "react";

const Message = ({ text, type = "success" , onClose }) => {


    useEffect(() => {

        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);

    }, [onClose]);


    return (
        <div
            className={`
                fixed top-10 right-5 z-10002
                min-w-60 max-w-[90%]
                px-5 py-3 rounded-lg shadow-lg
                text-white font-semibold
                transition-all duration-500
                animate-[slideIn_0.3s_ease-out]
                ${type === "success"
                    ? "bg-green-500"
                    : "bg-red-500"
                }
            `}
        >
            {text}
        </div>
    );
};

export default Message;