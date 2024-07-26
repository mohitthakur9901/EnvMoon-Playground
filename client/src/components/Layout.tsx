import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Appbar } from "./Appbar";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Appbar onSignin={() => {}} onSignout={() => {}} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
