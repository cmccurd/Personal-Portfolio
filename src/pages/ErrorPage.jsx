import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="py-20 bg-black text-white flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
      <Link 
        to="/" 
        className="mt-4 inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
      >
        Go to the home page
      </Link>
    </div>
  );
}
