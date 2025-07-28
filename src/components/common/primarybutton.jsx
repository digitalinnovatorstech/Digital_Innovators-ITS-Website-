import Image from "next/image";

const PrimaryButton = ({ text = "Read More", onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-46 cursor-pointer h-10 inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm font-medium overflow-hidden group transition-all duration-300 hover:bg-orange-500 ${className}`}
    >
      {/* Initial state */}
      <div className="flex items-center gap-2 transition-transform duration-300 ease-in-out transform group-hover:-translate-x-full absolute inset-0 justify-center">
        <Image
          src="/assets/whitebuttonright.svg"
          width={16}
          height={16}
          alt="Arrow"
        />
        <span>{text}</span>
      </div>

      {/* Hover state */}
      <div className="flex items-center gap-2 transition-transform duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0 absolute inset-0 justify-center">
        <span>{text}</span>
        <Image
          src="/assets/whitebuttonright.svg"
          width={16}
          height={16}
          alt="Arrow"
        />
      </div>

      {/* Hidden element to maintain size */}
      <span className="invisible">{text}</span>
    </button>
  );
};

export default PrimaryButton;
