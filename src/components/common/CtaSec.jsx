import { NavLink } from "react-router-dom"

const CtaSec = ({heading , desc , linkText , linkPath , children}) => {
  return (
    <section className="w-[90%] sm:w-[75%] md:w-[65%] lg:w-[50%] m-auto  py-8 sm:py-10 px-4 sm:px-5 flex flex-col gap-4 sm:gap-5 items-center text-center bg-(--bg-section)">
        <div className="w-16 h-16 sm:w-20 sm:h-20 grid place-content-center rounded-full bg-(--primary-light)/15 text-xl sm:text-2xl text-(--primary)">
            {children}
        </div>

        <h2 className="text-lg sm:text-xl text-(--primary) font-semibold">
            {heading}
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-(--txt-secondary) leading-7">
            {desc}
        </p>

        <NavLink
            to={linkPath}
            className={`py-2 px-4 text-sm sm:text-base rounded-md border-0 transition duration-300 bg-(--primary) text-(--white) hover:bg-(--primary-dark)`}
        >
            {linkText}
        </NavLink>
    </section>
  )
}

export default CtaSec