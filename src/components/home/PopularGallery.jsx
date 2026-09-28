import { NavLink } from "react-router-dom"
import products from "../../data/products"

const PopularGallery = () => {
  return (
    <section className="w-[80%] max-lg:w-[90%] m-auto flex flex-col items-center gap-10 max-md:gap-8 py-15 max-md:py-10">

        <div className="flex flex-col items-center gap-3 text-center">
            <span className="badge py-2 px-6 max-sm:px-5 rounded-full bg-(--accent-blue) text-(--white) font-bold">
                معرضنا
            </span>

            <h2 className="text-3xl max-lg:text-2xl max-sm:text-xl text-(--primary) font-bold">
                لمحة من عالمنا
            </h2>

            <p className="text-(--txt-secondary) max-sm:text-sm leading-7">
                اكتشف جانبًا من أعمالنا ومنتجاتنا من خلال معرض الصور
            </p>

        </div>


    <div className="w-[60%] max-md:w-full self-center grid grid-cols-3 max-md:grid-cols-2 gap-5">
        {products?.length > 0 ? (
            products.slice(0, 6).map((product) => (
                <div key={product.id} className="group relative overflow-hidden rounded-2xl bg-[#E8F4F5] p-2 border border-[#D2E9EB] 
                shadow-md shadow-(--primary)/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-(--primary)/20 active:scale-[0.98]">

                <div className="relative overflow-hidden rounded-xl">

                    <img src={product.image} alt={product.name} className="w-full h-45 border-2 border-transparent object-cover rounded-sm transition-transform duration-700 sm:group-hover:scale-110 active:scale-[0.95]" />

                    <div className="absolute inset-0 bg-linear-to-t from-(--primary-dark)/50 via-transparent to-transparent opacity-30 sm:group-hover:opacity-70 transition-opacity duration-500" />

                </div>

                    <div className="flex items-start justify-between gap-2 px-2 pt-4 pb-1 min-h-[76px] sm:min-h-[82px]">
                    
                        <div className="min-w-0">
                            <h3 className="text-(--primary) font-bold text-base sm:text-lg line-clamp-2">
                            {product.name}
                            </h3>

                            <span className="block w-8 h-1 mt-2 rounded-full bg-(--accent-cyan) transition-all duration-500 sm:group-hover:w-14" />
                        </div>

                        <span
                            className="shrink-0 w-9 h-9 rounded-full bg-(--bg-section) text-(--primary)
                            flex items-center justify-center text-sm font-bold transition-all duration-500
                            sm:group-hover:bg-(--accent-cyan)"
                        >
                            {String(product.id).padStart(2, "0")}
                        </span>

                    </div>
                </div>
            ))
            ) : (
            <p className="col-span-3 max-md:col-span-2 text-center text-(--primary-dark) text-xl">
                لا توجد صور هنا بعد
            </p>
        )}
    </div>

    <NavLink
        to={"/gallery"}
        className={`py-2 px-4 rounded-lg border-0 transition duration-300
        bg-(--primary) hover:bg-(--primary-dark) text-white`}
    >
        عرض جميع الصور
    </NavLink>

    </section>
  )
  
}

export default PopularGallery