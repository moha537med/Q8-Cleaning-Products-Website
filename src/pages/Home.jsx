// import { NavLink } from "react-router-dom"
import HeroSection from "../components/common/HeroSection"
import AboutUsSection from "../components/home/AboutUsSection"
import PopularProductsSec from "../components/home/PopularProductsSec"
import WhyUsSec from "../components/home/WhyUsSec"

const Home = () => {

  return (
    <>
      <HeroSection image="../../public/images/hero-img11.jpeg"  heading= " كيو ايت تقدم لك  حلول التنظيف الفعالة لك و لعائلتك"  text="اكتشف مجموعه واسعة من منتاجاتنا الأمنة و المتطوره للنظافه المثاليه">
          {/* <div className={`cursor-pointer self-start rounded-md  text-(--primary)  `}>
            <NavLink to={"/order"}> تسوق الان </NavLink>
          </div> */}
      </HeroSection>
      <AboutUsSection />
      <PopularProductsSec />
      <WhyUsSec />
    </>
  )
}

export default Home