import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800">
        <div className="flex gap-6">
          <a href="#about" className="text-blue-400 hover:text-white">
            About
          </a>
          <a href="#features" className="hover:text-blue-400">
            Features
          </a>
          <a href="#pricing" className="hover:text-blue-400">
            Pricing
          </a>
          <Link to="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
        <Link to="/login">
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded">
          Login
        </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center p-8">
        <h1 className="text-4xl font-bold mt-12">
          Welcome to <span className="text-blue-400">CricAuction</span>
        </h1>
        <p className="mt-4 text-lg">An absolute cricketing solution</p>
        <Link to="/create">
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded text-lg">
          Create account
        </button>
        </Link>
        <p className="mt-10 max-w-3xl text-gray-400">
          CricAuction is a type of software that is designed to help businesses
          and individuals manage their auction operations. The CricAuction
          software typically provides features and tools for creating and
          managing auctions, managing bidders and bids, tracking sales and
          payments, generating reports, and more.
        </p>
      </div>

      {/* Auction Bids Illustration */}
      <div className="flex justify-center items-center mt-12">
        <div className="flex gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-20 h-20 bg-pink-400 text-black rounded-full shadow-md"
            >
              BID
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;