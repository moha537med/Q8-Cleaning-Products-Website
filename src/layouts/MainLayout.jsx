import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Header";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div dir="rtl" className="min-h-screen grid grid-cols-[auto 1fr auto]">
      <Navbar />

      <main className="w-full mb-40 flex flex-col ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;