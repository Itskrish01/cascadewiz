import { Input } from "@/components/ui/input";
import { ChromePicker, ColorChangeHandler } from "react-color";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function ColorPicker(props: {
  color: string;
  onChange: ColorChangeHandler;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Input type="text" value={props.color} placeholder="#ffffff" />
      </PopoverTrigger>
      <PopoverContent className="p-0 w-auto">
        <ChromePicker color={props.color} onChange={props.onChange} />
      </PopoverContent>
    </Popover>
  );
}
