import React from "react";
import { Leaderboard } from "../../components/Quiz";
import { Quiz } from "../../components/Quiz";

const QuizPage = () => {
  // Mock username and score for demonstration
  const username = "John Doe";
  const score = 80;

  return (
    <div className="flex items-center w-full justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center  justify-center w-full  h-full bg-white rounded-lg shadow-md p-">
        <div className="flex items-center text-center  mb-8">
          <h1 className="text-2xl font-semibold">Username: {username}</h1>
          <h2 className="ml-4 text-xl font-semibold">Score: {score}</h2>
        </div>
        <div className="flex w-3/4 p-2">
          <div className="w-3/4">
            <Quiz />
          </div>
          <div className="w-2/4 ml-8">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
