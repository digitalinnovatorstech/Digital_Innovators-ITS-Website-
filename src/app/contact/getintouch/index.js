import Image from "next/image";
import EmailIcon from "../../../../public/assets/contact/email.svg";
import PhoneIcon from "../../../../public/assets/contact/phone.svg";
import USA from "../../../../public/assets/contact/usa.svg";
import GetInTouch from "../../../../public/assets/contact/horgetin.svg";
import BottomImage from "../../../../public/assets/contact/bottomimage.svg";

const ContactPage = () => {
  return (
    <div className="flex md:relative md:min-h-screen p-10 md:p-0">

      <div className="hidden md:block sticky top-0 h-screen" style={{ width: "12%" }}>
        <Image
          src={GetInTouch}
          alt="Get In Touch"
          width={80}
          height={800}
          className="h-screen object-contain"
        />
      </div>

      <div className=" py-10 w-full md:w-[70%]" >
        <div className="">

          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">

            <div className="md:w-1/2">
              <h1 className="text-3xl xl:text-5xl font-bold leading-tight">
                We're here to help.
                <br /> Feel free to say hello!
              </h1>
            </div>


            <div className="flex flex-col space-y-8">
              {/* Email Section */}
              <div className="flex flex-col space-y-2">
                <Image src={EmailIcon} alt="Email Icon" width={42} height={42} />
                <p className="text-primary font-semibold text-xl">
                  info@innovatorstech.com
                </p>
                <p className="text-[#787878] text-sm font-medium">Email</p>
              </div>

              {/* Phone Section */}
              <div className="flex flex-col space-y-2">
                <Image src={PhoneIcon} alt="Phone Icon" width={42} height={42} />
                <p className="text-primary font-semibold text-xl">
                  1800 203 4199
                </p>
                <p className="text-[#787878] text-sm font-medium">Phone</p>
              </div>
            </div>
          </div>

          {/* India Section with Locations */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-12">
              <span className="border-b-2 border-primary">In</span>dia
            </h1>

            {/* Locations in a row (3 per row on larger screens) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 2xl:gap-x-58">
              {/* Hyderabad */}
              <LocationCard
                city="Hyderabad"
                address="KUB Towers, 1st Floor, Plot no. 81, #2-48/81  Telecom Nagar, Gachibowli, Hyderabad, Telangana - 500032"
                icon="hyd"
                inactive={false}
              />

              {/* Hyderabad (Duplicate) */}
              <LocationCard
                city="Hyderabad"
                address="KUB Towers, 1st Floor, Plot no. 81, #2-48/81  Telecom Nagar, Gachibowli, Hyderabad, Telangana - 500032"
                icon="hyd"
                inactive={false}
              />

              {/* Mumbai */}
              <LocationCard
                city="Mumbai"
                address="Innovators Expanding Soon"
                icon="mumbai"
                inactive={true}
              />
            </div>

            {/* Second row of locations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 2xl:gap-x-58 mt-20">
              {/* Bengaluru */}
              <LocationCard
                city="Bengaluru"
                address="Innovators Expanding Soon"
                icon="bang"
                inactive={true}
              />

              {/* Amaravati */}
              <LocationCard
                city="Amaravati"
                address="Innovators Expanding Soon"
                icon="amaravati"
                inactive={true}
              />
            </div>
          </div>

          {/* USA Section */}
          <div className="mt-16">
            <hr className="border-t border-gray-300 mb-12" />
            <h1 className="text-5xl font-bold mb-12">
              <span className="border-b-2 border-primary">US</span>A
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              {/* Left side - USA Info */}
              <div className="mb-8 md:mb-42">
                <div className="flex items-start gap-8 mb-4">
                  <Image src={USA} alt="USA" className="w-24 h-24" />
                  <h4 className="text-2xl font-bold text-gray-400 mt-8">USA</h4>
                </div>
                <p className="text-primary text-sm">Innovators Expanding Soon</p>
              </div>

              {/* Right side - Bottom Image */}
              <div className="flex justify-end ">
                <Image
                  src={BottomImage}
                  alt="Contact Illustration"
                  className="w-72 h-72 -mt-42"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Location Card Component
const LocationCard = ({ city, address, icon, inactive = false }) => (
  <div>
    <div className="flex items-center gap-4 mb-3">
      <img
        src={`/assets/contact/${icon}.svg`}
        alt={city}
        className="w-20 h-20 object-contain"
      />
      <h3 className={`text-2xl font-bold ${inactive ? "text-gray-400" : ""}`}>
        {city}
      </h3>
    </div>
    <p
      className={`xl:text-sm md:text-xs ${inactive ? "text-primary" : "text-gray-700"}`}
      dangerouslySetInnerHTML={{ __html: address }}
    ></p>
  </div>
);

export default ContactPage;