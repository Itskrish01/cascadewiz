import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="">
      <Toaster reverseOrder={false} position="top-right" />
      <Header />
      <main className="container mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
