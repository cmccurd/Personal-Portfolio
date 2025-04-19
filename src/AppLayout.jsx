import { Outlet, useLocation  } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <div className="pt-16 md:pt-24">
        <Outlet /> 
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;