import Image from "next/image";
import NotFoundPage from "../../public/assets/pagenotfound.svg";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div>
        <Image src={NotFoundPage} alt="404" />{" "}
      </div>
     
    </div>
  );
}
