"use client";
import { useState } from "react";
import { QuizQuestion } from "../../utils/types";
import { quizData } from "../../utils/mockData";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const currentQuestion: QuizQuestion = quizData[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    // Logic for moving to the next question or screen
    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="max-w-lg p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">
        {currentQuestion.question}
      </h2>
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <label key={index} className="block">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;
