import Image from "next/image";
import HowItWorksImage from "../../../../public/assets/about/howitworks.svg";
export default function HowItWorks() {
  const contentItems = [
    {
      title: "Design",
      desc: "Design a branded voice and personality that engages users to resolve inquiries.",
    },
    {
      title: "Integrate",
      desc: "No risky replat forming. Seamlessly plug into your existing tech stack. Deploy at a speed that’s right for you. ",
    },
    {
      title: "Analyze",
      desc: "A real - time dashboard helps you stay on top of issues such as site problems, trends, or a rise in specific product inquires. ",
    },
    {
      title: "Improve",
      desc: "Manage ongoing performance updates and maintenance controls, your assistant continuously learns and improves..",
    },
  ];
  return (
    <div className="bg-[#353535] text-white flex flex-col md:h-screen justify-center items-center gap-10 md:gap-0 ">
      <div className=" w-full mx-auto">
        {/* Left Section with Image and Text */}
        <div className="w-full container p-5 mt-5 xl:mt-0 xl:p-0">
          <p className="text-sm uppercase text-white">How It Works</p>
          <h1 className="md:text-2xl text-xl font-semibold w-full md:py-5 py-3">
            We are an always curiosity, Strategic & <br />{" "}
            <span className="text-primary">Creative Innovation</span>
          </h1>
        </div>

        <div className="md:flex w-full md:mt-5 container">
          <div className="flex md:w-[50%] text-start hidden md:block flex-col gap-6">
            <Image
              src={HowItWorksImage}
              alt="Aiming the target"
              width={400}
              height={400}
              className="md:w-[300px] xl:w-[400px] object-contain"
            />
          </div>

          <div className="md:w-[50%] flex flex-col xl:gap-5 2xl:gap-10 gap-5">
            {contentItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Centered line */}
                <div className="w-10 h-px bg-white self-center" />
                {/* Text content */}
                <div>
                  <h3 className="font-medium mb-1 xl:text-2xl">{item.title}</h3>
                  <p className="text-white font-extralight xl:text-sm 2xl:text-lg text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex text-start md:hidden mt-4 flex-col gap-6">
            <Image
              src={HowItWorksImage}
              alt="Aiming the target"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
