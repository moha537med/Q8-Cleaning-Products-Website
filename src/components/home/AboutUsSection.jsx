import { NavLink } from "react-router-dom"

const AboutUsSection = () => {
  return (
    <section className="w-full p-5 max-sm:p-3 flex justify-between bg-(--white)">

        {/* container */}
        <div className="container w-[80%] max-lg:w-[85%] max-md:w-[90%] py-15 max-md:py-10 m-auto flex items-center justify-between max-md:flex-col max-md:gap-10">

            <div className="w-[50%] max-md:w-full flex flex-col items-start gap-6 max-md:gap-4">

            <span className="badge py-2 px-6 max-sm:px-5 rounded-full bg-(--accent-blue) text-(--white) font-bold">
                من نحن
            </span>

            <h2 className="text-3xl max-lg:text-2xl max-sm:text-xl text-(--primary) font-bold leading-10 max-sm:leading-8">
                حلول تنظيف و عطور بجودة تثق بها
            </h2>

            <p className="text-(--txt-secondary) leading-7">
                نقدم مجموعه متنوعه من منتجات التنظيف و العطور لتلبية احتياجات المنازل و المنشات
            </p>

            <NavLink
                to={"/about"}
                className={`py-2 px-4 rounded-lg border-0 transition duration-300
                bg-(--primary) hover:bg-(--primary-dark) text-white`}
            >
                تعرف علينا اكثر
            </NavLink>

            </div>

            <div className="h-70 max-md:h-60 max-sm:h-52 w-[40%] max-md:w-full">
            <img
                src="../../../public/images/منظف-زجاج-5.jpeg"
                alt="about us image"
                className="w-full h-full rounded-md object-cover"
            />
            </div>

        </div>

    </section>
  )
}

export default AboutUsSection