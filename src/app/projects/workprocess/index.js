import Image from "next/image";
import Chat from "../../../../public/assets/projects/chat.svg";
import DesignandDev from "../../../../public/assets/projects/design&dev.svg";
import "../../projects/styles/projects.css";
import Questionnaire from "../../../../public/assets/projects/questionnaire.svg";
import Strategy from "../../../../public/assets/projects/statergy.svg";

export default function WorkProcess() {
  return (
    <section className="bg-[#353535] md:h-screen flex flex-col items-center justify-center py-20">
      <div className="container  px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h1 className="main_heading">WORK PROCESS</h1>
          <h1 className="text-white font-semibold xl:text-2xl text-xs md:text-xs">
            We are an always Curiosity,
            <br />
            Strategic & Creative Innovation
          </h1>
        </div>

        {/* Work steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 my-10">
          {/* Step 1 */}
          <div className="flex md:mr-16">
            <p className="number">1</p>
            <div className="flex flex-col">
              <div>
                <Image src={Chat} alt="Initial Chat icon" />
              </div>
              <h3 className="heading">Initial Chat</h3>
              <p className="text-gray-300 xl:text-sm text-xs md:text-xs">
                We start with friendly chat to understand
                <br /> your needs, goals, and vision for the project.
              </p>
            </div>
          </div>

          {/* Step 2 (Shift right on mobile) */}
          <div className="flex ml-8 md:ml-0 mt-5">
            <p className="number">2</p>
            <div className="flex flex-col">
              <div>
                <Image src={Questionnaire} alt="Questionnaire icon" />
              </div>
              <h3 className="heading">Questionnaire</h3>
              <p className="text-gray-300 xl:text-sm text-xs md:text-xs">
                We provide a detailed questionnaire to gather <br />
                specific information and preferences to tailor our design to
                your needs.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex xl:ml-20 md:ml-15 mt-5">
            <p className="number">3</p>
            <div className="flex flex-col">
              <div>
                <Image src={Strategy} alt="Strategy icon" />
              </div>
              <h3 className="heading">Strategy</h3>
              <p className="text-gray-300 xl:text-sm text-xs md:text-xs">
                We develop a comprehensive strategy to ensure
                <span className="xl:hidden">&nbsp;</span>
                <span className="hidden xl:inline"><br /></span>
                your project's success, including detailed planning and timelines.
              </p>


            </div>
          </div>

          {/* Step 4 (Shift right on mobile) */}
          <div className="flex ml-8 xl:ml-20 md:ml-15 mt-5">
            <p className="number">4</p>
            <div className="flex flex-col">
              <div>
                <Image src={DesignandDev} alt="Design & Development icon" />
              </div>
              <h3 className="heading">Design & Development</h3>
              <p className="text-gray-300 xl:text-sm text-xs md:text-xs">
                Our team creates a visually stunning and functional design that
                aligns with your brand and objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
