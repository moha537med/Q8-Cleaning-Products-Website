import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {

  const [isMenuOpen , setIsMenuOpen] = useState(false);

  const cartItmes = useSelector(state => state.cartData.cart);

  const links = [
    { name: "الرئيسيه", link: "/" },
    { name: "نبذه عنا", link: "/about" },
    { name: "اتصل بنا", link: "/contact" },
    { name: "المعرض", link: "/gallery" },
    { name: "المنتجات", link: "/products" },
    { name: "الطلبات", link: "/order" },
  ];

  return (
    // <header className="p-3 sm:p-4 bg-(--txt-primary) text-(--bg-section) fixed top-0 left-0 w-full z-[10000]">
    <header className="p-3 sm:p-4 bg-(--txt-primary) text-(--bg-section) fixed top-0 w-full z-10000">

      <div className="container w-[90%] sm:w-[85%] lg:w-[80%] m-auto flex items-center justify-between gap-4 md:gap-6 text-(--white)">

        <div className="text-2xl font-bold text-(--primary)">
          <NavLink to="/">
            <img
              src="/images/logo-2.png"
              alt="q8 logo"
              className="w-30 h-15 sm:w-16 sm:h-16 lg:w-18 lg:h-18"
            />
          </NavLink>
        </div>

        <nav className="w-full md:w-auto overflow-x-auto">
          <ul className="hidden md:flex list-none items-center justify-center gap-5 sm:gap-7 lg:gap-10 whitespace-nowrap">

            {links.map(link => {

              return (
                <li key={link.name}>

                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      `text-sm sm:text-base flex items-center gap-1 ${
                        isActive
                          ? "text-(--accent-cyan) font-bold underline"
                          : "text-(--white)"
                      }`
                    }
                  >

                    {link.name === "الطلبات" ? (
                      <>
                        طلباتي

                        <div className="flex flex-col items-center">
                          <span>
                            {cartItmes.length > 0 && cartItmes.length}
                          </span>

                          <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      </>
                    ) : (
                      link.name
                    )}

                  </NavLink>

                </li>
              );
            })}

          </ul>
        </nav>

        <IoMenu 
        className="cursor-pointer text-5xl text-(--white) md:hidden"
        onClick={()=> setIsMenuOpen(!isMenuOpen)}
        />

        <ul className={`md:hidden absolute z-10001 top-20 left-0 w-full min-h-full py-5 px-10  bg-(--txt-primary) flex flex-col items-end gap-8 text-lg
         text-(--white) ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transform transition duration-300`}>
            {links.map(link => {

              return (
                <li key={link.name}>

                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      `text-sm sm:text-base flex items-center gap-1 ${
                        isActive
                          ? "text-(--accent-cyan) font-bold underline"
                          : "text-(--white)"
                      }`
                    }
                    onClick={()=> setIsMenuOpen(false)}
                  >

                    {link.name === "الطلبات" ? (
                      <>
                        طلباتي

                        <div className="flex flex-col items-center">
                          <span>
                            {cartItmes.length > 0 && cartItmes.length}
                          </span>

                          <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      </>
                    ) : (
                      link.name
                    )}

                  </NavLink>

                </li>
              );
            })}

            

         </ul>

      </div>

    </header>
  );
}

export default Header;