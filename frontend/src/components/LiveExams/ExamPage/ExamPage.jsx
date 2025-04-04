import { useEffect } from "react";
import Question from "./Question";
import StudDetails from "./StudDetails";

const ExamPage = () => {
  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  const handleVisibilityChange = () => {
    if (document.hidden || !document.fullscreenElement) {
      alert("Exam ended due to tab switch or exit!");
    }
  };

  useEffect(() => {
    enterFullScreen();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("fullscreenchange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="flex w-full h-screen">
      <div className="w-4/5 h-full">
        <Question />
      </div>
      <div className="w-1/5 h-full">
        <StudDetails />
      </div>
    </div>
  );
};

export default ExamPage;
