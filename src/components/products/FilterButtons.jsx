import { useState } from "react";

const FilterButtons = ({setFilteredType}) => {

    const filters = ["الكل" , "منظفات", "مطهرات" , "عطور"];

    const [filterActive , setFilterActive] = useState("الكل");

    const handleFilter = (i)=> {
        setFilterActive(filters[i])
        setFilteredType(filters[i]);
    }
return (
    <section className="w-[90%] sm:w-[80%] lg:w-[60%] m-auto pt-12 sm:pt-16 lg:pt-25 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {filters?.map((filter, i) => (
            <button
                key={i}
                className={`self-start rounded-md border border-(--primary) py-2 px-3 sm:px-4 text-sm sm:text-base cursor-pointer text-(--txt-primary)
                transition duration-300 ${
                    filter === filterActive
                        ? "bg-(--primary) text-(--white)"
                        : "bg-transparent"
                } hover:bg-(--primary-dark) hover:text-(--white) hover:border-transparent`}
                onClick={()=> handleFilter(i)}
            >
                {filter}
            </button>
        ))}
    </section>
)
}

export default FilterButtons