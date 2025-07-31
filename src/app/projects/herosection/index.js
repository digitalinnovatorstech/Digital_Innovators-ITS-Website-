import '@/app/projects/styles/projects.css';
export default function ProjectHeroSection() {
  return (
    <div className="h-screen  flex justify-center items-center">
      {/* Content Section */}
      <div className="hero_heading ">
        <h1 className=" text-black font leading-[1.2] text-5xl  xl:text-7xl font-bold">
          We have designed{" "}
          <span className="text-primary font-bold">Experiences</span> <br />
          for over <span className="font-bold">300+ Projects.</span>
        </h1>


        <p className="xl:text-2xl md:text-xl text-black ">
          "Fueled by ideas, passion, expertise,
          <br />
          technology, and a generous dose of coffee."
        </p>
      </div>
    </div>
  );
}
