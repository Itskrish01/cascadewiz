import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "./ui/sonner";

const Layout = () => {
  return (
    <div className="">
      <Toaster />
      <Header />
      <main className="container mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
