import { cn, hexToRgb } from "@/lib/utils";
import { MailIcon, Phone } from "lucide-react";

type Props = {
  blur: string;
  opacity: string;
  isBorder: boolean;
  backgroundImage: string;
  color: string;
  isWhite: boolean;
};

const Preview = (props: Props) => {
  return (
    <div
      className="relative w-full border border-gray-200 rounded-lg p-16 overflow-hidden"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="p-8 sm:flex sm:space-x-6 h-full dark:bg-gray-50 rounded-lg dark:text-gray-800"
        style={{
          backgroundColor: `rgba(${hexToRgb(props.color)?.r}, ${
            hexToRgb(props.color)?.g
          }, ${hexToRgb(props.color)?.b}, ${props.opacity})`,
          backdropFilter: `blur(${props.blur}px)`,
          border: props.isBorder
            ? `1px solid rgba(${hexToRgb(props.color)?.r}, ${
                hexToRgb(props.color)?.g
              }, ${hexToRgb(props.color)?.b}, ${parseFloat(props.opacity)}) `
            : "none",
        }}
      >
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq0f1tSU2b8opZaApGh5tl2FreFb52dyo6Q&s"
            alt=""
            className="object-cover object-center w-full h-full rounded "
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2
              className={cn(
                "text-2xl font-semibold",
                props.isWhite && "text-white"
              )}
            >
              Leroy Jenkins
            </h2>
            <span className={cn("text-sm", props.isWhite && "text-white")}>
              General manager
            </span>
          </div>
          <div className="space-y-1">
            <span
              className={cn(
                "flex items-center space-x-2",
                props.isWhite && "text-white"
              )}
            >
              <MailIcon className="w-4 h-4" />
              <span className="">leroy.jenkins@company.com</span>
            </span>
            <span
              className={cn(
                "flex items-center space-x-2",
                props.isWhite && "text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="">+25 381 77 983</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;

// style={{
//     backgroundImage: `url(${props.backgroundImage})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   }}
