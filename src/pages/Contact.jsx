// import { NavLink } from "react-router-dom"
import HeroSection from "../components/common/HeroSection"
import ContactInfoSec from "../components/contact/ContactInfoSec"
import ContactForm from "../components/contact/ContactForm"

const Contact = () => {
  return (
    <>
      <HeroSection image="/images/contact-hero2.png" heading="تواصل معنا" text="لديك استفسار عن احد منتجاتنا ؟ تواصل معنا و سنكون سعداء بسماعدتك">

      </HeroSection>

      <ContactInfoSec />
      <ContactForm />
    </>
  )
}

export default Contact