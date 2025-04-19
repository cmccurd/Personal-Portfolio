import { Outlet, useLocation  } from "react-router-dom";
import { lazy, Suspense } from 'react';
import NavBar from "./components/NavBar.jsx";

const Footer = lazy(() => import('./components/Footer.jsx'));



const AppLayout = () => {
  return (
    <>
      <NavBar />
      <div className="pt-16 md:pt-24 min-h-screen bg-black">
        <Outlet /> 
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default AppLayout;