"use client";

import "@/app/contact/styles/contact.css";

import HeroSection from "./herosection";
import TalkSection from "./talksection/page";
import GetInTouch from "./getintouch";

export default function ContactPage() {
  return (
    <div className="h-full w-full  ">
      <HeroSection />
      <TalkSection />

      <GetInTouch />

    </div>
  );
}

