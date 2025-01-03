import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10">AI-Powered Event Planner</h1>
      <p className="mt-4 text-lg text-gray-700">
        Effortlessly plan weddings, meetings, or celebrations with AI.
      </p>
      <Link to="/signup">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
