// import { NavLink } from "react-router-dom"
import HeroSection from "../components/common/HeroSection"
import FilterButtons from "../components/products/FilterButtons"
import ProductsSec from "../components/products/ProductsSec"
import CtaSec from "../components/products/CtaSec"
import { useState } from "react"

const Products = () => {
  const [filteredType , setFilteredType] = useState("الكل");
  return (
    <>
      <HeroSection image="/images/products-hero.png" heading="منتجاتنا" text=" اكتشف مجموعاتنا من المنتجات">
        {/* <div className={`cursor-pointer self-start rounded-md  text-(--primary-dark)  `}>
          <NavLink to={"/"}> الرئيسيه </NavLink> &gt; <NavLink to={"/products"}> منتجاتنا </NavLink>
        </div> */}
      </HeroSection>

      <FilterButtons setFilteredType={setFilteredType}/>
      <ProductsSec filteredType={filteredType}/>
      <CtaSec />
    </>
  )
}

export default Products