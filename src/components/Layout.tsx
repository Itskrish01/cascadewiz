import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "./ui/sonner";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <Header />
      <main className="container mx-auto max-w-7xl px-6 lg:px-10 py-10 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
