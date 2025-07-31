"use client";
import "@/app/services/styles/services.css";
import BuildContent from "./components/buildcontent";

export default function Build() {
  return (
    <>
      <div className="h-screen flex justify-center items-center overflow-hidden relative">
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <h1 className="font  text-[18vw] text-[#087830]">
            Build
          </h1>
        </div>
      </div>
      <BuildContent />
    </>
  );
}
