import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

type Props = {
  text: string;
};

const CopyText = (props: Props) => {
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(props.text).then(() => {
      toast.success("Copied color to clipboard");
    });
  };
  return (
    <button
      onClick={copyToClipBoard}
      className="cursor-pointer flex items-center gap-2 group transition-all duration-300"
    >
      <p className="text-sm text-gray-800 group-hover:text-orange-500 transition-all duration-300">
        {" "}
        {props.text}{" "}
      </p>

      <CopyIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:text-orange-500 transition-all duration-300" />
    </button>
  );
};

export default CopyText;
