import { Link } from "react-router-dom";

export default function Footer() {
  const links = ['Home', 'Portfolio', 'Contact'];
  const linkItems = links.map((link, index) => (
    <div key={`${index}${link}`}>
      <Link
        to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        {link}
      </Link>
    </div>
  ));

  return (
    <footer className="bg-black text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-2">
        {/* Nav Links */}
        <div className="flex gap-6">{linkItems}</div>

        {/* Contact Info */}
        <div className="text-center">
          <p>© 2025 - McCurdy Group LLC</p>
        </div>
      </div>
    </footer>
  );
}
