import React, { useState } from "react";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // Questions Data
  const questions = [
    { id: 1, question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { id: 2, question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { id: 3, question: "Which is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" }
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reset selection for the new question
    }
  };

  const handleSubmit = () => {
    alert("Quiz Submitted!");
  };

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg p-6">
      {/* Question */}
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-4">Question {currentQuestion + 1}</h2>
        <p className="text-lg mb-4">{questions[currentQuestion].question}</p>

        {/* Options */}
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <label
              key={index}
              className="flex items-center p-3 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 transition"
            >
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="mr-3"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Buttons at the Bottom */}
      <div className="mt-auto flex justify-between pt-6">
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
          onClick={() => setSelectedOption(null)}
        >
          Reset
        </button>

        <button
          className={`px-4 py-2 rounded transition ${
            selectedOption
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          disabled={!selectedOption}
          onClick={currentQuestion === questions.length - 1 ? handleSubmit : handleNext}
        >
          {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Question;
