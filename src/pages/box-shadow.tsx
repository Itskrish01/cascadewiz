import { ColorPicker } from "@/components/colorpicker/ColorPicker";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn, hexToRgb } from "@/lib/utils";
import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const shadowShapesType = [
  { shape: "square", label: "Square" },
  { shape: "header", label: "Header" },
  { shape: "circle", label: "Circle" },
];

const BoxShadowTool = () => {
  const [shadowShape, setShadowShape] = useState(shadowShapesType[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#dedede");
  const [shapeColor, setShapeColor] = useState("#ffffff");
  const [shadows, setShadows] = useState([
    {
      color: "#000000",
      opacity: 0.4,
      blur: 14,
      spread: 10,
      xOffset: 0,
      yOffset: 0,
      isInset: false,
    },
  ]);

  const updateShadow = (
    index: number,
    newShadow: { [key: string]: unknown }
  ) => {
    setShadows((prevShadows) => {
      const updatedShadows = [...prevShadows];
      updatedShadows[index] = { ...updatedShadows[index], ...newShadow };
      return updatedShadows;
    });
  };

  const createShadow = () => {
    setShadows((prevShadows) => [
      ...prevShadows,
      {
        color: "#000000",
        opacity: 0.4,
        blur: 14,
        spread: 10,
        xOffset: 0,
        yOffset: 0,
        isInset: false,
      },
    ]);
  };

  const removeShadow = (index: number) => {
    new Promise<void>((resolve) => {
      setShadows((prevShadows) => {
        const updatedShadows = prevShadows.filter((_, i) => i !== index);
        resolve();
        return updatedShadows;
      });
    }).then(() => {
      setActiveIndex((prevActiveIndex) =>
        prevActiveIndex > 0 ? prevActiveIndex - 1 : 0
      );
    });
  };

  const handleShadowClick = (index: number) => {
    setActiveIndex(index);
  };

  const shadowsCode = shadows.map((item) => {
    return `${item.isInset ? "inset" : ""} ${item.xOffset}px ${
      item.yOffset
    }px ${item.blur}px ${item.spread}px rgba(${hexToRgb(item.color)!.r}, ${
      hexToRgb(item.color)!.g
    }, ${hexToRgb(item.color)!.b}, ${item.opacity})`;
  });
  useEffect(() => {
    if (activeIndex >= shadows.length) {
      setActiveIndex(shadows.length - 1);
    }
  }, [shadows]);

  const generateCssCode = (shapeClass: string) => `.${shapeClass} {
    background-color: ${shapeColor};
    box-shadow: ${shadowsCode.join(", ")};
    ${
      shapeClass === "square"
        ? "border-radius: 10px;\n    height: 200px;\n    width: 200px;"
        : shapeClass === "header"
        ? "position: absolute;\n    top: 0;\n    border-radius: 10px;\n    height: 60px;\n    width: 100%;"
        : "border-radius: 50%;\n    height: 200px;\n    width: 200px;"
    }
}`;

  const activeShapeCssCode = generateCssCode(shadowShape.shape);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: activeShapeCssCode }} />
      <h3 className="blueDark-text text-3xl font-semibold">CSS Box Shadow</h3>
      <div className="mt-16 flex md:flex-row flex-col gap-5 items-center">
        <div
          style={{ backgroundColor }}
          className="border md:flex-1 flex items-center justify-center border-gray-300 rounded-2xl h-[600px] w-full relative overflow-hidden"
        >
          <div className={shadowShape.shape}></div>
        </div>
        <div className="md:flex-1 w-full">
          <div>
            <Label>Shape</Label>
            <div className="mt-2 w-full flex gap-2">
              {shadowShapesType.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setShadowShape(item)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold leading-6 w-full text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
                    item.shape === shadowShape.shape
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "border border-gray-200"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <Label>Add Box Shadows</Label>
            </div>
            <div className="flex flex-wrap gap-2">
              {shadows.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={cn(
                      "text-sm font-semibold cursor-pointer flex items-center  rounded-3xl"
                    )}
                  >
                    <div
                      onClick={() => handleShadowClick(index)}
                      className={cn("border border-gray-400 px-4 py-1", {
                        "bg-orange-500 text-white": index === activeIndex,
                      })}
                    >
                      Shadow {index}
                    </div>
                    {index === 0 ? (
                      ""
                    ) : (
                      <div className="px-2 border hover:bg-red-500 hover:text-white border-gray-400 h-full flex items-center justify-center">
                        <X
                          className="h-4 w-4 cursor-pointer"
                          onClick={() => {
                            setActiveIndex(0);
                            setTimeout(() => {
                              removeShadow(index);
                            }, 100);
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
              <button
                onClick={createShadow}
                className="flex border border-gray-300 px-1.5 rounded-full items-center gap-2 cursor-pointer"
              >
                <Plus className="h-4 w-4 cursor-pointer" />
              </button>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Label>Shadow Color</Label>
                <div
                  className="h-4 w-4 rounded border border-gray-200"
                  style={{ backgroundColor: shadows[activeIndex].color }}
                ></div>
              </div>
              <ColorPicker
                color={shadows[activeIndex].color}
                onChange={(color: string) =>
                  updateShadow(activeIndex, { color })
                }
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Label>background Color</Label>
                <div
                  className="h-4 w-4 rounded border border-gray-200"
                  style={{ backgroundColor: backgroundColor }}
                ></div>
              </div>
              <ColorPicker
                color={backgroundColor}
                onChange={(color: string) => setBackgroundColor(color)}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Label>Shape Color</Label>
                <div
                  className="h-4 w-4 rounded border border-gray-200"
                  style={{ backgroundColor: shapeColor }}
                ></div>
              </div>
              <ColorPicker
                color={backgroundColor}
                onChange={(color: string) => setShapeColor(color)}
              />
            </div>
          </div>
          <SliderComponent
            label="Opacity"
            value={shadows[activeIndex].opacity}
            max={1}
            min={0}
            step={0.01}
            onValueChange={(value) =>
              updateShadow(activeIndex, { opacity: value })
            }
          />
          <SliderComponent
            label="Blur"
            value={shadows[activeIndex].blur}
            max={100}
            min={0}
            onValueChange={(value) =>
              updateShadow(activeIndex, { blur: value })
            }
          />
          <SliderComponent
            label="Spread"
            value={shadows[activeIndex].spread}
            max={100}
            min={0}
            onValueChange={(value) =>
              updateShadow(activeIndex, { spread: value })
            }
          />
          <SliderComponent
            label="Y Offset"
            value={shadows[activeIndex].yOffset}
            max={100}
            min={-100}
            onValueChange={(value) =>
              updateShadow(activeIndex, { yOffset: value })
            }
          />
          <SliderComponent
            label="X Offset"
            value={shadows[activeIndex].xOffset}
            max={100}
            min={-100}
            onValueChange={(value) =>
              updateShadow(activeIndex, { xOffset: value })
            }
          />
          <div className="mt-6 flex items-center gap-2">
            <Label>Inset</Label>
            <Checkbox
              checked={shadows[activeIndex].isInset}
              onCheckedChange={(checked) =>
                updateShadow(activeIndex, { isInset: checked as boolean })
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <CopyBlock
          language="css"
          theme={dracula}
          text={activeShapeCssCode}
          wrapLongLines
        />
      </div>
    </>
  );
};

const SliderComponent = ({
  label,
  value,
  max,
  min,
  step,
  onValueChange,
}: {
  label: string;
  value: number;
  max: number;
  min: number;
  step?: number;
  onValueChange: (value: number) => void;
}) => (
  <div className="mt-4">
    <Label>
      <span className="font-bold">{label}:</span> {value}
    </Label>
    <Slider
      className="mt-2 text-orange-500"
      defaultValue={[value]}
      max={max}
      min={min}
      value={[value]}
      step={step}
      onValueChange={(value) => onValueChange(value[0])}
    />
  </div>
);

export default BoxShadowTool;
