import { Login } from "@/components/Auth";
import { Register } from "@/components/Auth";
import Leaderboard from "@/components/Quiz/Leaderboard";
import Quiz from "@/components/Quiz/QuizQuestion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Elsa Quiz Vocabulary
      </h1>
      <div className="flex space-x-8">
        <Login />
        <Quiz />
        <Leaderboard />
      </div>
    </div>
  );
};

export default Home;
