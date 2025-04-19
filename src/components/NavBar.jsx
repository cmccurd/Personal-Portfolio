import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    setMenuOpen(false); // Close menu when route changes
  }, [location.pathname]);

  return (
    <header className="absolute top-0 left-0 w-full bg-black text-white z-50 shadow-lg">
      <div className="px-4">
        <div className="relative flex items-center justify-between py-4">
          
          {/* Left: Logo */}
          <Link to="/" className="flex items-center h-12 sm:h-16">
            <img
              src="/logo.webp"
              alt="logo"
              className="max-w-[201px] h-full object-contain"
            />
          </Link>

          {/* Center: Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-semibold text-lg md:text-xl">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`relative inline-block transition-colors duration-200
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-blue-400
                    hover:after:w-full hover:text-blue-400
                    after:transition-all after:duration-300 ${
                      location.pathname === item.to
                        ? 'text-blue-400 after:w-full'
                        : ''
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Phone (desktop) and Hamburger (mobile) */}
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-base md:text-lg font-semibold">
              Call Now:{" "}
              <a href="tel:3177722641" className="text-blue-400 hover:underline">
                (317) 772-2641
              </a>
            </span>

            <button
              className="text-white md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={menuRef} className="md:hidden bg-black px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-base font-medium">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)} // Close even if it's the current page
                  className={`block text-white hover:text-blue-400 ${
                    location.pathname === item.to ? "text-blue-400" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
