import { Link } from "react-router-dom";

function UnOtherizedPage(){
return (
    <div className="min-h-screen flex flex-col items-center font-comfortaa justify-center bg-white text-black px-6 text-center">
     
      <h1 className="text-8xl font-extrabold mb-4 font-michroma">401</h1>
      <h2 className="text-3xl font-semibold mb-2">Unauthorized</h2>
      <p className="mb-6 max-w-lg mx-auto">
        Sorry, you are not authorized to access this page. Please log in or contact the administrator if you believe this is an error.
      </p>
      <Link
        to="/admin/login"
        className="inline-block px-8 py-3 border-2 border-black font-semibold rounded hover:bg-black hover:text-white transition"
      >
        Login
      </Link>
    </div>
  );

}

export default UnOtherizedPage