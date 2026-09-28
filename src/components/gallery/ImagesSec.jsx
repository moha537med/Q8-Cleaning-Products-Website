import products from "../../data/products";

const ImagesSec = ({ filteredType }) => {
  const filteredProducts =
    filteredType === "الكل"
      ? products
      : products.filter((product) => product.catogrey === filteredType);

  return (
    <section className="w-[90%] sm:w-[85%] lg:w-[70%] m-auto py-8 sm:py-10 lg:py-12">

      {filteredProducts?.length > 0 ? (
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-6 lg:gap-8">

          {filteredProducts.map((product) => (
            // card div
            <div
                key={product.id}
                className="
                    group relative overflow-hidden
                    rounded-3xl bg-[#DCEFF1]
                    p-3 sm:p-4
                    shadow-lg shadow-[#163A6B]/10
                    border border-[#D2E9EB]
                    transition-all duration-500
                    hover:-translate-y-2 hover:shadow-xl
                    hover:shadow-[#163A6B]/20 active:scale-[0.98]"
            >

              {/* image */}
              <div className=" relative overflow-hidden rounded-2xl h-[200px] sm:h-[240px] lg:h-[300px] ">
                
                <img  src={product.image} alt={product.name} loading="lazy" className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-[0.92] "/>

                <div className="
                    absolute inset-0
                    bg-linear-to-t from-(--primary-dark)/50
                    via-transparent to-transparent
                    opacity-40 sm:group-hover:opacity-70
                    transition-opacity duration-500"
                /> </div>

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
          ))}
        </div>
      ) : (
        <p className="text-xl sm:text-2xl text-center text-(--txt-primary) py-12">
          لا توجد صور هنا بعد
        </p>
      )}
    </section>
  );
};

export default ImagesSec;