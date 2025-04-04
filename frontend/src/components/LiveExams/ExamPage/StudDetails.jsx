import React, { useState, useEffect } from "react";
import FaceMonitoring from "./FaceMonitoring";

const StudDetails = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 30);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="w-full h-full bg-white shadow-lg p-6 flex flex-col items-center justify-between">
      {/* Exam Code */}
      <div className="text-center w-full mb-4">
        <h2 className="text-lg font-semibold">
          Exam Code: <span className="text-blue-500">EXM12345</span>
        </h2>
      </div>

      {/* Student Image & Name */}
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"  // Placeholder image, replace with actual
          alt="Student"
          className="w-36 h-36 rounded-full border-4 border-gray-400 mb-2"
        />
        <h3 className="text-lg font-medium">John Doe</h3>
      </div>

      {/* Timer */}
      <div className="text-md font-bold bg-gray-100 p-3 rounded w-full text-center my-3">
        ⏳ Time Left: <span className="text-red-500">{formatTime(timeLeft)}</span>
      </div>

      {/* Live Monitoring */}
      <div className="w-full h-64 bg-gray-300 rounded flex items-center justify-center">
        <FaceMonitoring />
      </div>

      {/* End Test Button */}
      <button className="w-full py-3 text-lg bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition mt-4">
        End Test
      </button>
    </div>
  );
};

export default StudDetails;
