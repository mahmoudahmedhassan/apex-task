import Image from "next/image";
import { logo } from "@/assets/svg";

export default function Logo() {
  return (
    <div>
      <Image className="xs:w-20  lg:w-25" src={logo} alt="log" />
    </div>
  );
}
