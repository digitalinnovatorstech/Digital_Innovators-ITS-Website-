"use client";

import "@/app/contact/styles/contact.css";
import PrimaryButton from "@/components/common/primarybutton";
import Link from "next/link";

export default function TalkSection() {
  const contactOptions = [
    {
      id: 1,
      title: "Project Talk",
      description: "Let us help you realize your vision.",
      linkText: "Let's Connect",
      href: "/contact/project",
    },
    {
      id: 2,
      title: "Career Talk",
      description: "Do you want to be a part of us?",
      linkText: "Join Us",
      href: "/contact/career",
    },
    {
      id: 3,
      title: "General Talk",
      description: "Are you looking for something?",
      linkText: "Say Hi!",
      href: "/contact/general",
    },
  ];
  const ContactCard = ({ title, description, linkText, href }) => (
    <Link href={href} passHref>
      <div className="card-container  relative">
       
        <div className="absolute inset-0 bg-white/5 opacity-0  pointer-events-none"></div>

       
        <h1 className="card-header relative z-10">{title}</h1>
        <p className="card-description relative z-10">{description}</p>
        <PrimaryButton
          text={linkText}
          className="!bg-[#595959] mt-4 hover:!bg-primary transition-colors duration-200"
        />

      </div>
    </Link>

  );
  return (
    <section className="bg-[#353535] md:h-screen md:flex md:items-center md:justify-center">
      <div className="container md:py-30 py-10">
        <p className="font-light text-white m-5 md:m-0">
          discuss how our software solutions can drive
          <br /> your business forward.
        </p>

        <div className="card-grid md:mt-10">
          {contactOptions.map((option) => (
            <div className="" key={option.id}>
              <ContactCard {...option} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}