import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { MdContactPhone } from "react-icons/md"
import { NavLink } from "react-router-dom"

const links = [
  {name:"الرئيسيه" , link:"/"} , {name:"نبذه عنا" ,link: "/about"},
  {name:"اتصل بنا" ,link: "/contact"} , {name:"المنتجات" , link:"products"} ,
  {name:"طلباتي" , link:"order"} ,

]

const socialLinks = [
  {name:<FaFacebookF/> , link:"#" , style:{color:"#3E6193" , hover:"#143676"}} ,
  {name:<FaInstagram /> ,link: "#" , style:{color:"#3E6193" , hover:"#143676"}} ,
  {name:<FaTiktok />, link:"#" , style:{color:"#3E6193" , hover:"#143676"}} ,
]


function Footer() {
  return (<footer className="px-4 py-8 bg-(--txt-primary) text-(--bg-section)">
    
  <div className="container w-[90%] md:w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

    {/* Logo + About */}
    <div className="flex flex-col gap-4 text-right">
      <a href="#" className="w-fit">
        <img
          src="/images/logo-2.png"
          alt="Q8 logo"
          className="w-18 h-18 object-contain"
        />
      </a>

      <h2 className="leading-7 max-w-md">
        شركه متخصصه في توفير منتجات التنظيف و العنايه بالمنزل بجودة عالية
        و حلول مناسبه لاحتياجاتك
      </h2>

      <ul className="flex items-center gap-3">
        {socialLinks.map((link, i) => (
          <li key={i}>
            <a
              href={link.link}
              style={{
                color: link.style.color,
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = link.style.hover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = link.style.color)
              }
              className="bg-(--bg-section) w-10 h-10 rounded-full grid place-content-center font-bold"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Quick Links */}
    <div className="flex flex-col gap-3 text-right md:items-center">
      <h2 className="text-xl lg:text-2xl">
        روابط سريعه
      </h2>

      <ul className="flex flex-col gap-2">
        {links.map((link, i) => (
          <li key={i}>
            <NavLink to={link.link}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact */}
    <div className=" flex flex-col gap-3 text-right">
      <h2 className="text-xl lg:text-2xl">
        تواصل معنا
      </h2>

      <p>العنوان : الكويت</p>

      <a
        target="_blank"
        className="flex items-center gap-2 w-fit"
      >
        <MdContactPhone className="text-2xl shrink-0" />
        <span dir="ltr">+20 109 707 1419</span>
      </a>

      <a
        href="https://wa.me/201097071419?text=مرحبا, محمد حسين عامل ايه النهارده"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 w-fit"
      >
        <FaWhatsapp className="text-green-500 text-3xl shrink-0" />
        <span>تواصل معنا عبر واتساب</span>
      </a>

    </div>

  </div>

  <hr className="w-[90%] m-auto my-6 border rounded-sm text-(--txt-secondary)" />

  <p className="w-[90%] md:w-[70%] lg:w-[50%] m-auto text-center text-base md:text-lg lg:text-xl leading-7">
    &copy; {new Date().getFullYear()} Q8 جميع الحقوق محفوظه
  </p>
</footer>
  )
}

export default Footer