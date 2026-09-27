
import products from "../../data/products"
import { NavLink } from "react-router-dom"



const PopularProductsSec = () => {
  return (
    <section className="w-[80%] max-lg:w-[90%] m-auto flex flex-col items-center gap-10 max-md:gap-8 py-15 max-md:py-10">

    <div className="flex flex-col items-center gap-3 text-center">
        <span className="badge py-2 px-6 max-sm:px-5 rounded-full bg-(--accent-blue) text-(--white) font-bold">
        منتجاتنا
        </span>

        <h2 className="text-3xl max-lg:text-2xl max-sm:text-xl text-(--primary) font-bold">
        منتجات تناسب كل احتياجاتك
        </h2>

        <p className="text-(--txt-secondary) max-sm:text-sm leading-7">
        اكتشف مجموعتنا من منتجات التنظيف و العطور , واختر المنتجات التي تناسب احتياجاتك
        </p>
    </div>

    <div className="w-[80%] max-md:w-full self-center grid grid-cols-3 max-md:grid-cols-2 gap-5">
        {products?.length > 0 ? (
            products.map((product) => (
            <img
                src={product.image}
                alt={product.name}
                key={product.id}
                className="w-full h-85 max-sm:h-65 border-2 border-transparent object-cover rounded-sm transition duration-300 shadow-sm shadow-black hover:border-(--primary-dark)"
            />
            ))
        ) : (
            <p className="col-span-3 max-md:col-span-2 text-center text-(--primary-dark) text-xl">
            لا توجد منتجات هنا بعد
            </p>
        )}
    </div>

    <NavLink
        to={"/products"}
        className={`py-2 px-4 rounded-lg border-0 transition duration-300
        bg-(--primary) hover:bg-(--primary-dark) text-white`}
    >
        عرض جميع المنتجات
    </NavLink>

    </section>
  )
}

export default PopularProductsSec


// {products?.length > 0 ? products.map(product => (
//     <img key={product.id} src={product.image} alt={product.name} className="w-full h-50 rounded-md border border-(--primary)"/>
// ))
// : <p className="col-span-3 text-center text-(--primary-dark) text-xl">No Products Here</p>
// }