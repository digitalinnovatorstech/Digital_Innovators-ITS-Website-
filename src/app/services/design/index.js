"use client";
import "@/app/services/styles/services.css";
import DesignContent from "./component/designcontent";

export default function Design() {
  return (
    <>
      <div className="h-screen flex justify-center items-center overflow-hidden relative">
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <h1 className="font text-[18vw] text-primary
">
            Design
          </h1>
        </div>
      </div>
      <DesignContent />
    </>
  );
}
