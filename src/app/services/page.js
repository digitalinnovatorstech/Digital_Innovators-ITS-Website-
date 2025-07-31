import IndustriesWeServe from "@/components/common/industriesserve";
import Build from "./build";
import Design from "./design";
import Digital from "./digital";
import OurExpertise from "./ourexpertise";
import ServiceHeroSection from "./serviceherosection";
import TechnologyStack from "@/components/common/technologystack";
import ClientsCarouselBar from "@/components/common/clientbar";


export default function Service() {
  return (



    <div >
      <div >
        <ServiceHeroSection />
      </div>

      <Design />
      <Digital />
      <Build />
      <IndustriesWeServe />
      <ClientsCarouselBar />
      <div className="container">
        <TechnologyStack />
      </div>
    </div>


  );
}
