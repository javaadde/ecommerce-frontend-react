import { Link } from "react-router-dom"

function NotFoundPage(){

   return (
    <div className="min-h-screen flex flex-col items-center font-comfortaa justify-center bg-gray-300 text-black px-6 text-center">
     
      <h1 className="text-9xl font-extrabold font-michroma mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 max-w-lg mx-auto">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-3 border-2 font-michroma border-black font-semibold rounded hover:bg-black hover:text-white transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage
