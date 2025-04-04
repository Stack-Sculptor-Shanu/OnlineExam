import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

const FaceMonitoring = () => {
  const webcamRef = useRef(null);
  const [warning, setWarning] = useState("");

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    };

    loadModels();

    const interval = setInterval(async () => {
      if (webcamRef.current && webcamRef.current.video.readyState === 4) {
        const video = webcamRef.current.video;
        const detections = await faceapi.detectSingleFace(
          video,
          new faceapi.TinyFaceDetectorOptions()
        );

        if (!detections) {
          setWarning("⚠️ Face not detected! Please sit properly.");
        } else {
          setWarning("");
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 bg-gray-200 rounded flex flex-col items-center justify-center relative">
      <Webcam ref={webcamRef} className="w-full h-full rounded-lg shadow-lg" />
      {warning && (
        <p className="absolute bottom-2 bg-red-500 text-white px-3 py-1 rounded-md text-sm">
          {warning}
        </p>
      )}
    </div>
  );
};

export default FaceMonitoring;
