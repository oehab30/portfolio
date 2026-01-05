import React from "react";

const Error = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
      <div className="text-center bg-white shadow-xl rounded-2xl p-10 max-w-md w-full">
        {/* Error Code */}
        <h1 className="text-[5rem] font-extrabold text-[var(--red)] leading-none">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-2">
          Oops! Something went wrong.
        </h2>

        <p className="text-gray-500 text-base sm:text-lg mt-4 mb-5">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Action Button */}
       <a
          href="/"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full font-semibold tracking-wide hover:bg-gray-800 transition-colors duration-200"
        >
          Go Home
        </a>
      </div>
    </section>
  );
};

export default Error;
