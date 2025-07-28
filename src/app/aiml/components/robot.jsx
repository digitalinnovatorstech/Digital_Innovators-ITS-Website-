import Image from "next/image";
import React from "react";
import AIImage from "../../../../public/assets/home/aiml/internal/robotimage.svg";


const AiRobotImage = () => {
  return (
    <div className=" container ">
      <Image src={AIImage} alt="AI Development" layout="responsive" />
    </div>
  );
};

export default AiRobotImage;
