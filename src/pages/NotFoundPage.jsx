import { NavLink } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-(--bg-main)" >
        <div className=" flex flex-col gap-5 ">
            <h1 className="text-3xl font-bold">
                 الصفحة غير موجودة
            </h1>
            <NavLink to={"/"} className={`py-2 px-4  rounded-md bg-(--primary) text-white text-center`}>الذهاب الى الصفحه الرئيسية</NavLink>
            
        </div>
    </div>
  )
}

export default NotFoundPage