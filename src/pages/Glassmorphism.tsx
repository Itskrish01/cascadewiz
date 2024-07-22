import { ColorPicker } from "@/components/colorpicker/ColorPicker";
import Preview from "@/components/glassmorphism/Preview";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { hexToRgb, rgbToHex } from "@/lib/utils";
import { Shuffle } from "lucide-react";
import { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

interface GlassMorphism {
  backgroundImage: string;
  blur: string;
  color: string;
  isBorder: boolean;
  opacity: string;
}

const Glassmorphism = () => {
  const [defaultGlassMorphism, setDefaultGlassMorphism] =
    useState<GlassMorphism>({
      backgroundImage: "https://wallpapercave.com/wp/wp12736288.png",
      blur: "8",
      color: "#000000",
      isBorder: true,
      opacity: "0.4",
    });
  const [isTextWhite, setIsTextWhite] = useState(false);

  const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    setDefaultGlassMorphism((prev: GlassMorphism) => ({
      ...prev,
      color: rgbToHex(r, g, b),
    }));
  };

  useEffect(() => {
    if (defaultGlassMorphism.color) {
      if (
        hexToRgb(defaultGlassMorphism.color)!.r < 154 ||
        hexToRgb(defaultGlassMorphism.color)!.g < 154 ||
        hexToRgb(defaultGlassMorphism.color)!.b < 154
      ) {
        setIsTextWhite(true);
      } else {
        setIsTextWhite(false);
      }
    }
  }, [defaultGlassMorphism.color]);

  return (
    <div>
      <div className="flex md:flex-row flex-col md:gap-10 gap-5 ">
        <div className="flex-[0.5] h-full">
          <Preview
            backgroundImage={defaultGlassMorphism.backgroundImage}
            blur={defaultGlassMorphism.blur}
            color={defaultGlassMorphism.color}
            isBorder={defaultGlassMorphism.isBorder}
            opacity={defaultGlassMorphism.opacity}
            isWhite={isTextWhite}
          />
        </div>
        <div className="flex-[0.5]">
          <Label>color</Label>
          <ColorPicker
            color={defaultGlassMorphism.color}
            onChange={(color) =>
              setDefaultGlassMorphism((prev: GlassMorphism) => ({
                ...prev,
                color: color.hex,
              }))
            }
          />
          <div className="mt-4">
            <Label>
              <span className="font-bold">blur:</span>{" "}
              {defaultGlassMorphism.blur}
              px
            </Label>
            <Slider
              className="mt-2"
              defaultValue={[parseInt(defaultGlassMorphism.blur)]}
              max={50}
              min={0}
              onValueChange={(value) => {
                setDefaultGlassMorphism((prev: GlassMorphism) => ({
                  ...prev,
                  blur: value[0].toString(),
                }));
              }}
            />
          </div>
          <div className="mt-4">
            <Label>
              <span className="font-bold">opacity:</span>{" "}
              {defaultGlassMorphism.opacity}
            </Label>
            <Slider
              className="mt-2 text-orange-500"
              defaultValue={[parseFloat(defaultGlassMorphism.opacity)]}
              max={1}
              min={0}
              step={0.1}
              onValueChange={(value) => {
                setDefaultGlassMorphism((prev: GlassMorphism) => ({
                  ...prev,
                  opacity: value[0].toString(),
                }));
              }}
            />
          </div>
          <div className="mt-6 flex items-center gap-2">
            <Checkbox
              checked={defaultGlassMorphism.isBorder}
              onCheckedChange={(checked) => {
                setDefaultGlassMorphism((prev: GlassMorphism) => ({
                  ...prev,
                  isBorder: checked as boolean,
                }));
              }}
            />
            <Label className="text-lg font-light">Use Border for glass</Label>
          </div>
          <button
            onClick={randomColor}
            className="mt-10 border-orange-500 cursor-pointer text-orange-500 border px-4 py-2 rounded-full flex items-center justify-center gap-2 w-full"
          >
            <Shuffle className="w-4 h-4 " />
            <Label className="text-lg font-semibold cursor-pointer">
              Shuffle Glass Color
            </Label>
          </button>
        </div>
      </div>
      <div className="mt-5">
        <CopyBlock
          theme={dracula}
          language="css"
          text={`.box {
    background: rgba(${hexToRgb(defaultGlassMorphism.color)!.r!}, ${hexToRgb(
            defaultGlassMorphism.color
          )!.g!}, ${hexToRgb(defaultGlassMorphism.color)!
            .b!}, ${defaultGlassMorphism.opacity!});
    backdrop-filter: blur(${defaultGlassMorphism.blur!}px);
    -webkit-backdrop-filter: blur(${defaultGlassMorphism.blur!}px);
    border: 1px solid rgba(${hexToRgb(defaultGlassMorphism.color)!
      .r!}, ${hexToRgb(defaultGlassMorphism.color)!.g!}, ${hexToRgb(
            defaultGlassMorphism.color
          )!.b!}, ${defaultGlassMorphism.opacity!});
}`}
        />
      </div>
    </div>
  );
};

export default Glassmorphism;
