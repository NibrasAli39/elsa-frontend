import { useEffect } from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">Welcome, </h2>
      <div className="space-y-4">
        <button className="w-full p-3 bg-purple-500 text-white  rounded hover:bg-purple-700">
          Create a Quiz
        </button>
        <p className="w-full text-center">or</p>
        <input
          type="text"
          placeholder="Enter Quiz ID"
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />
        <button className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-700">
          Join Quiz
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
