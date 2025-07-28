"use client";
import "@/app/services/styles/services.css";
import DigitalContent from "./components/digitalcontent";

export default function Digital() {
  return (
    <>
      <div className="h-screen flex justify-center items-center overflow-hidden relative">
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <h1 className="font text-[18vw] text-[#353535] ">
            Digital
          </h1>
        </div>
      </div>
      <DigitalContent />
    </>
  );
}
