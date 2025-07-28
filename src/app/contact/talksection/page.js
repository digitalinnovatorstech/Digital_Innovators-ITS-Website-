"use client";
import "@/app/contact/styles/contact.css";
import PrimaryButton from "@/components/common/primarybutton";
import Link from "next/link";
import Image from "next/image";
import "../styles/contact.css";

export default function TalkSection() {
  const contactIcons = Array.from(
    { length: 9 },
    (_, index) => `/assets/contact/icons/image_${index + 1}.svg`
  );

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
      <div className="card-container relative">
        <div className="absolute inset-0 pointer-events-none"></div>
        <h1 className="card-header relative z-10">{title}</h1>
       <p className="card-description text-white relative z-10">{description}</p>

        <PrimaryButton
          text={linkText}
          className="!bg-[#595959] mt-4 hover:!bg-primary transition-colors duration-200"
        />
      </div>
    </Link>
  );

  const leftIconPositions = [
    { top: 10, left: 8 },
    { top: 42, left: 5 },
    { top: 75, left: 12 },
    { top: 25, left: 18 },
    { top: 10, left: 20 },
    { top: 15, left: 28 },
    { top: 85, left: 28 },
    { top: 12, left: 32 },
    { top: 60, left: 5 },
  ];

  const rightIconPositions = leftIconPositions.map(pos => ({
    top: pos.top,
    left: 100 - pos.left
  }));

  return (
    <section className="bg-[#353535] md:h-screen md:flex md:items-center md:justify-center relative overflow-hidden">
      {leftIconPositions.map((pos, index) => (
        <div
          key={`left-icon-${index}`}
          className="absolute bounce-icon"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            zIndex: 5,
            opacity: 0.5
          }}
        >
          <Image
            src={contactIcons[ index ]}
            alt={`Icon ${index + 1}`}
            width={40}
            height={40}
          />
        </div>
      ))}

      {rightIconPositions.map((pos, index) => (
        <div
          key={`right-icon-${index}`}
          className="absolute bounce-icon"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            zIndex: 5,
            opacity: 0.5
          }}
        >
          <Image
            src={contactIcons[ index ]}
            alt={`Icon ${index + 1}`}
            width={40}
            height={40}
          />
        </div>
      ))}

      <div className="container md:py-30 py-10 relative z-10">
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
  );
}
