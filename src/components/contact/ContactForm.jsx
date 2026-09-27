import { useState } from "react";
import Message from "../common/Message";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const [formMessage, setFormMessage] = useState(null);


    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        // Remove error when user starts correcting the field
        setErrors(prev => ({
            ...prev,
            [id]: ""
        }));
    };


    const validateForm = () => {

        const newErrors = {};

        // Name
        const name = formData.name.trim();

        if (!name) {
            newErrors.name = "من فضلك اكتب اسمك";
        } else if (name.split(/\s+/).length < 2) {
            newErrors.name = "اكتب الاسم الكامل";
        } else if (name.length < 5) {
            newErrors.name = "الاسم قصير جدًا";
        }


        // Kuwait Phone
        const phone = formData.phone.replace(/\s+/g, "");

        const kuwaitPhoneRegex = /^(?:\+965|965)?[569]\d{7}$/;

        if (!phone) {
            newErrors.phone = "من فضلك اكتب رقم الهاتف";
        } else if (!kuwaitPhoneRegex.test(phone)) {
            newErrors.phone = "اكتب رقم هاتف كويتي صحيح";
        }


        // Message
        const message = formData.message.trim();

        if (!message) {
            newErrors.message = "من فضلك اكتب رسالتك";
        } else if (message.length < 10) {
            newErrors.message = "الرسالة يجب أن تكون 10 أحرف على الأقل";
        }


        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setFormMessage({
                text: "من فضلك راجع البيانات المدخلة",
                type: "error"
            });

            return;
        }

        setFormMessage({
            text: "تم إرسال رسالتك بنجاح",
            type: "success"
        });

        setFormData({
            name: "",
            phone: "",
            message: ""
        });

        setErrors({});
    };


    return (
        <section className="py-12 sm:py-16 md:py-20">

            {formMessage && (
                <Message
                    key={formMessage.text}
                    text={formMessage.text}
                    type={formMessage.type}
                    onClose={() => setFormMessage(null)}
                />
            )}

            <div className="w-[90%] max-w-4xl mx-auto flex flex-col gap-8 sm:gap-10">

                {/* Section Heading */}
                <div className="text-center flex flex-col gap-4 items-center">

                    <span className="self-center px-4 py-2 rounded-full bg-(--accent-cyan)/15 text-(--accent-cyan) font-semibold text-sm">
                        أرسل لنا رسالة
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-(--primary)">
                        هل لديك استفسار؟
                    </h2>

                    <p className="text-sm sm:text-base text-(--txt-secondary) max-w-2xl leading-7 sm:leading-8">
                        يسعدنا تواصلك معنا، أرسل رسالتك وسنقوم بالرد عليك في أقرب وقت ممكن.
                    </p>

                </div>


                {/* Form Card */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl p-5 sm:p-6 md:p-10 shadow-sm border border-[#86BFD1]/20"
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

                        {/* Name */}
                        <div>

                            <label
                                htmlFor="name"
                                className="block text-(--txt-primary) font-semibold mb-2"
                            >
                                الاسم الكامل
                            </label>

                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="اكتب اسمك"
                                className={`w-full h-12 px-4 rounded-xl bg-[#F8FBFC] border text-(--txt-primary) outline-none transition
                                ${errors.name
                                    ? "border-red-500 focus:ring-2 focus:ring-red-500/15"
                                    : "border-[#86BFD1]/30 focus:border-[#55C7C2] focus:ring-2 focus:ring-[#55C7C2]/15"
                                }`}
                            />

                            {errors.name && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.name}
                                </p>
                            )}

                        </div>


                        {/* Phone */}
                        <div>

                            <label
                                htmlFor="phone"
                                className="block text-(--txt-primary) font-semibold mb-2"
                            >
                                رقم الهاتف
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="مثال: 51234567"
                                dir="ltr"
                                className={`w-full h-12 px-4 rounded-xl bg-[#F8FBFC] border text-(--txt-primary) outline-none transition
                                ${errors.phone
                                    ? "border-red-500 focus:ring-2 focus:ring-red-500/15"
                                    : "border-[#86BFD1]/30 focus:border-[#55C7C2] focus:ring-2 focus:ring-[#55C7C2]/15"
                                }`}
                            />

                            {errors.phone && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.phone}
                                </p>
                            )}

                        </div>


                        {/* Message */}
                        <div className="md:col-span-2">

                            <label
                                htmlFor="message"
                                className="block text-(--txt-primary) font-semibold mb-2"
                            >
                                الرسالة
                            </label>

                            <textarea
                                id="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="اكتب رسالتك هنا..."
                                className={`w-full px-4 py-3 rounded-xl bg-[#F8FBFC] border text-(--txt-primary) outline-none resize-none transition
                                ${errors.message
                                    ? "border-red-500 focus:ring-2 focus:ring-red-500/15"
                                    : "border-[#86BFD1]/30 focus:border-[#55C7C2] focus:ring-2 focus:ring-[#55C7C2]/15"
                                }`}
                            />

                            {errors.message && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.message}
                                </p>
                            )}

                        </div>

                    </div>


                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-7 w-full md:w-auto px-8 py-3 rounded-xl bg-[#163A6B] text-white font-semibold transition hover:bg-[#0E2B52] cursor-pointer"
                    >
                        إرسال الرسالة
                    </button>

                </form>

            </div>

        </section>
    );
};

export default ContactForm;