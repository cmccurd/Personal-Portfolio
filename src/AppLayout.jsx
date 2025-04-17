import { Outlet, useLocation  } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

const AppLayout = () => {
  const location = useLocation();
  return (
    <div className="">
      <NavBar />
      <Outlet /> 
      <Footer />
    </div>
  );
};

export default AppLayout;