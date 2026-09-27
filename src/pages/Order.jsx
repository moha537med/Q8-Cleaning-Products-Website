// import { NavLink } from "react-router-dom"
import HeroSection from "../components/common/HeroSection"
import CtaSec from "../components/orders/CtaSec"
import CartItemSec from "../components/orders/CartItemSec"
import OrderCTA from "../components/orders/OrderCTA"
import { useSelector } from "react-redux"

const Order = () => {
  const cartItems = useSelector((state)=> state.cartData.cart);
  return (
    <>
    <HeroSection image="../../public/images/order-hero2.png" heading="طلباتي" text=" لديك استفسار عن احد منتجاتنا ؟ تواصل معنا و سنكون سعداء بسماعدتك">
        {/* <div className={`cursor-pointer self-start rounded-md  text-(--primary-dark)  `}>
          <NavLink to={"/"}> الرئيسيه </NavLink> &gt; <NavLink to={"/order"}> طلباتي </NavLink>
        </div> */}
    </HeroSection>
    
    <h2 className="text-center text-2xl text-(--primary) mt-25 mb-5">
      ({cartItems.length}) طلباتك 
    </h2>

    
    {cartItems.length > 0 ? <>    
      <CartItemSec />
  
      <OrderCTA />
      </> 
      
    : 
    <CtaSec/>
    }

    
    </>
  )
}

export default Order