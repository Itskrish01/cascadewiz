import { ColorPicker } from "@/components/colorpicker/ColorPicker";
import CopyText from "@/components/copyText";
import { Label } from "@/components/ui/label";
import { hexToHSL, hexToRgb, hslToHex } from "@/lib/utils";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const ColorShadesGenerator: React.FC = () => {
  const [mainColor, setMainColor] = useState<string>("#a92d2d");
  const [selectedColor, setSelectedColor] = useState<string>(mainColor);
  const [shades, setShades] = useState<string[]>([]);

  const generateShades = () => {
    const [h, s, l] = hexToHSL(mainColor);
    const newShades: string[] = [];

    // Generate darker shades
    for (let i = 1; i <= 5; i++) {
      const newL = Math.max(Math.min(l - i * 10, 100), 0); // Adjust lightness for darker shades
      const shade = hslToHex(h, s, newL);
      if (!newShades.includes(shade)) newShades.unshift(shade);
    }

    // Add the main color in the middle
    newShades.push(mainColor);

    // Generate lighter shades
    for (let i = 1; i <= 5; i++) {
      const newL = Math.max(Math.min(l + i * 10, 100), 0); // Adjust lightness for lighter shades
      const shade = hslToHex(h, s, newL);
      if (!newShades.includes(shade)) newShades.push(shade);
    }

    setShades(newShades);
  };

  useEffect(() => {
    generateShades();
    setSelectedColor(mainColor);
  }, [mainColor]);

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Color Shades Generator" />
        <meta
          property="og:description"
          content="Generate color shades from a one color easily."
        />
        <meta property="og:site_name" content="cascadeWiz" />
        <meta name="twitter:url" content={window.location.href} />
        <title>Color Shades Generator</title>
      </Helmet>
      <h3 className="blueDark-text text-3xl font-semibold">
        Color Shades Generator
      </h3>
      <div className="mt-16">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Label>Main Color</Label>
              <div
                className="h-4 w-4 rounded border border-gray-200"
                style={{ backgroundColor: mainColor }}
              ></div>
            </div>
            <ColorPicker color={mainColor} onChange={setMainColor} />
          </div>
        </div>

        <div className="mt-10 flex w-full gap-2">
          {shades.map((shade, index) => (
            <div
              key={index}
              onClick={() => setSelectedColor(shade)}
              className="w-full relative overflow-hidden cursor-pointer hover:scale-105 group transition-all duration-300"
            >
              <button
                onClick={() => {
                  navigator.clipboard
                    .writeText(shade)
                    .then(() => toast.success("Copied to clipboard"));
                }}
                className="absolute bg-orange-500 p-2 active:scale-75 rounded-xl group-hover:translate-y-5 -translate-y-10 duration-300 ease-in-out left-1/2 -translate-x-1/2"
              >
                <Copy className="h-5 w-5 text-white" />
              </button>
              <div
                className="h-20 w-full  border border-gray-300"
                style={{ backgroundColor: shade }}
              ></div>
              <div className="flex items-center justify-center text-center py-1 text-sm text-zinc-600 border border-t-0 border-gray-300">
                <p>{shade}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-20">
          <ColorCard color={selectedColor} />
        </div>
      </div>
    </>
  );
};

const ColorCard = (props: { color: string }) => {
  const rgbColor = hexToRgb(props.color);
  const r = rgbColor?.r;
  const g = rgbColor?.g;
  const b = rgbColor?.b;

  const finalRgb = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="flex items-center justify-center w-full overflow-hidden">
      <div className="rounded-t-xl w-80 overflow-hidden border border-gray-300">
        <div
          className="h-24 w-full"
          style={{ backgroundColor: props.color }}
        ></div>
        <div className="px-3 py-5 grid grid-cols-2 gap-2">
          <div>
            <Label className="text-gray-400 font-light">Hex</Label>
            <CopyText text={props.color} />
          </div>
          <div>
            {" "}
            <Label className="text-gray-400 font-light">RBG</Label>
            <CopyText text={finalRgb} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorShadesGenerator;
