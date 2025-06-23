import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4 py-10">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-8">
          Sorry, we couldn’t find the page you’re looking for. It might have been removed or renamed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition"
        >
          <ArrowLeftCircle className="w-5 h-5" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
