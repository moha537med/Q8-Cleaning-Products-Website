// import { NavLink } from "react-router-dom"
import HeroSection from "../components/common/HeroSection"
import StorySec from "../components/about/StorySec"
import StatisticsSec from "../components/about/StatisticsSec"

const About = () => {
  return (
    <>
      <HeroSection image="../../public/images/about-hero2.png" heading="من نحن" text="نحن شركه  Q8 Clean  نعمل من اجل نظافه افضل  ">
{/*       
        <div className={`cursor-pointer self-start rounded-md  text-(--white)  `}>
          <NavLink to={"/"}> الرئيسيه </NavLink> &gt; <NavLink to={"/about"}>من نحن</NavLink>
        </div> */}
      </HeroSection>    

      <StorySec />
      <StatisticsSec />
      
    </>
  )
}

export default About