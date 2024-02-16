import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="page404 min-h-screen flex justify-center items-center">
      <div>
        <h1 className="text-center text-6xl font-bold">404</h1>
        <h3 className="mt-3 tracking-wider font-semibold">
          The page you are looking for cannot be found
        </h3>
        <p className="flex justify-center mt-3">
          <Link to={"/"}>
            <button className="border border-white text-white px-5 py-2 rounded-md hover:transition duration-500 ease-in-out transform hover:scale-110">
              Home
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page404;
