import { FaCalendarCheck, FaBoxes, FaUsers } from "react-icons/fa";
const StatisticsSec = () => {
    const cards = [
        {icon: <FaCalendarCheck /> , heading:"10+", desc:"سنوات من الخبره"},
        {icon:<FaBoxes /> , heading:"5K+", desc:"منتج متنوع"},
        {icon:<FaUsers/> , heading:"50+", desc:"عميل يثق بنا"},
    ]

  return (

    <section className="w-[90%] sm:w-[85%] lg:w-[80%] py-10 sm:py-14 lg:py-20 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-10">
        <h2 className="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-2xl sm:text-3xl text-(--primary) font-bold">
            ارقامنا
        </h2>

        {cards?.map(card => (
            <div className="flex flex-col items-center gap-3 bg-white shadow border border-[#86BFD1]/25 rounded-2xl p-5 sm:p-6 transition duration-300 hover:shadow-[#55C7C2]/30 hover:scale-104">
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

export default StatisticsSec