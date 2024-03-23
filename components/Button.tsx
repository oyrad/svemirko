import Image from "next/image";
import linkNew from "@/public/icons/link-new-window.svg";
import { cn } from "@/lib/utils";

type ButtonProps = {
  link: string;
  buttonText: string;
  className?: string;
};

export default function Button({
  link,
  buttonText,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={link}
      className={cn(
        "bg-gray-500 py-2 px-4 lg:py-4 lg:px-8 text-white text-xl lg:text-3xl uppercase flex gap-2 items-center",
        className
      )}
      target="_blank"
    >
      <p>{buttonText}</p>
      <Image src={linkNew} alt="link new window" className="mb-0.5" />
    </a>
  );
}
