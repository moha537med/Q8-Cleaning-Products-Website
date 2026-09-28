import products from "../../data/products"
import ProductCard from "../common/ProductCard"

const ProductsSec = ({filteredType}) => {

    const filteredProducts = filteredType === "الكل" ? products
            : products.filter(
                product => product.catogrey === filteredType
            );
    

return (

    <section className="w-[90%] sm:w-[85%] lg:w-[60%] m-auto py-8 sm:py-10 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 transition duration-300">
    {
        filteredProducts?.length > 0
            ? filteredProducts.map(product => (
                <ProductCard key={product.id} product={product}>
                    <p className="text-(--txt-secondary) text-center text-[14px] leading-6">
                    {product.description}
                    </p> 
                </ProductCard>
            ))
            : (
                <p className="col-span-1 sm:col-span-2 lg:col-span-3 text-xl sm:text-2xl text-center text-(--txt-primary)">
                    لا توجد منتجات هنا بعد
                </p>
            )
    }
    </section>
)
}

export default ProductsSec