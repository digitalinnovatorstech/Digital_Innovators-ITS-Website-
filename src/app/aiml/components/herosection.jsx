import Image from "next/image";
import HeroImg from "../../../../public/assets/home/aiml/internal/heroimage.svg";

const HerosectionAiml = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center md:h-screen">
        <div className="w-full items-start flex flex-col gap-y-5">
          <h1 className="text-tertiary md:text-lg xl:text-xl">
            Home / AI & ML
          </h1>
          <p className="max-w-5xl font md:text-5xl xl:text-6xl text-2xl">
            Empowering Next-gen Software with{" "}
            <span className="text-primary">AI and ML Solutions</span>
          </p>
          <hr className="w-full border-t border-gray-300 " />
          <p className="md:text-sm xl:text-lg text-tertiary text-justify">
            Our custom AI/ML development services enable your system to exhibit
            intelligent thinking, auditory perception, and decision-making
            capabilities. Leverage advanced algorithms to effectively identify
            patterns, extract valuable insights, generate predictions, and
            ultimately facilitate data-driven decision-making processes that
            propel your organization toward progress.
          </p>

          <Image
            src={HeroImg}
            alt="Hero"
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default HerosectionAiml;
