import React from "react";

const Leaderboard = () => {
  // Assuming leaderboardData is an array of objects with user scores
  const leaderboardData = [
    { username: "User1", score: 100 },
    { username: "User2", score: 90 },
    { username: "User3", score: 80 },
    // Add more leaderboard data as needed
  ];

  return (
    <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Leaderboard</h2>
      <ul>
        {leaderboardData.map((data, index) => (
          <li key={index} className="flex justify-between py-2">
            <span>{data.username}</span>
            <span>{data.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
