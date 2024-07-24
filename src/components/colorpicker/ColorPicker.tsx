import { Input } from "@/components/ui/input";
import { HexColorPicker } from "react-colorful";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function ColorPicker(props: { color: string; onChange: any }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Input
          type="text"
          value={props.color}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder="#ffffff"
        />
      </PopoverTrigger>
      <PopoverContent className="p-0 w-auto">
        <HexColorPicker color={props.color} onChange={props.onChange} />
      </PopoverContent>
    </Popover>
  );
}
