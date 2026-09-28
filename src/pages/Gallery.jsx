import { useState } from 'react'
import HeroSection from '../components/common/HeroSection'
import FilterButtons from '../components/products/FilterButtons'
import ImagesSec from '../components/gallery/ImagesSec';
import { ShoppingCart } from 'lucide-react';
import CtaSec from '../components/common/CtaSec';

const Gallery = () => {
      const [filteredType , setFilteredType] = useState("الكل");
    
  return (
    <>
        <HeroSection image="/images/gallery-hero.png"   heading="لمحة من عالمنا"  text="اكتشف منتجاتنا وتفاصيل أعمالنا من خلال معرضنا">

        </HeroSection>

        <FilterButtons setFilteredType={setFilteredType}/>
        <ImagesSec filteredType={filteredType}/>


      <CtaSec heading="اكتشف المزيد من منتجاتنا" desc="شاهد مجموعتنا الكاملة من المنتجات وتعرّف على ما نقدمه من حلول متنوعة" linkText=" تصفح المنتجات" linkPath="/products">
        {<ShoppingCart />}
      </CtaSec>
    </>
  )
}

export default Gallery