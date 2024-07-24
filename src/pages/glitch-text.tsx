import { ColorPicker } from "@/components/colorpicker/ColorPicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const GlitchTextEffect = () => {
  const [glitchedText, setGlitchedText] = useState("Amazing");
  const [glitchedSize, setGlitchedSize] = useState("104");
  const [textColor, setTextColor] = useState<string>("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState<string>("#000000");
  const [glitchColor1, setGlitchColor1] = useState<string>("#c2ff00");
  const [glitchColor2, setGlitchColor2] = useState<string>("#ff00ff");

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .glitch-wrapper {
            width: 100%;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background-color: ${backgroundColor};
            padding: 100px 10px;
        }

        .glitch {
            position: relative;
            font-size: ${glitchedSize}px;
            font-weight: 700;
            line-height: 1.2;
            color: ${textColor};
            letter-spacing: 7px;
            z-index: 1;
        }

        .glitch:before,
        .glitch:after {
            display: block;
            content: attr(data-glitch);
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0.8;
        }

        .glitch:before {
            animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
            color: ${glitchColor1};
            z-index: -1;
        }

        .glitch:after {
            animation: glitch-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
            color: ${glitchColor2};
            z-index: -2;
        }

        @keyframes glitch-color {
        0% {
            transform: translate(0);
        }

        20% {
            transform: translate(-10px);
        }

        40% {
            transform: translate(-5px);
        }

        60% {
            transform: translate(10px);
        }

        80% {
            transform: translate(5px);
        }

        to {
            transform: translate(0);
        }
        }
    `,
        }}
      ></style>
      <h3 className="blueDark-text text-3xl font-semibold">
        CSS Text Glitch Effect
      </h3>
      <div className="flex items-center gap-3 mt-20 md:grid-cols-3">
        <div className="w-full">
          <Label>Text Color</Label>
          <ColorPicker
            color={textColor}
            onChange={(color) => setTextColor(color.hex)}
          />
        </div>
        <div className="w-full">
          <Label>Text</Label>
          <Input
            value={glitchedText}
            onChange={(e) => setGlitchedText(e.target.value)}
          />
        </div>
        <div className="w-full">
          <Label>Size: {glitchedSize}px</Label>
          <Slider
            className="mt-2"
            max={140}
            min={50}
            value={[parseInt(glitchedSize)]}
            onValueChange={(value) => setGlitchedSize(value[0].toString())}
          />
        </div>
      </div>
      <div className="mt-4 glitch-wrapper rounded-lg overflow-hidden">
        <div className="glitch" data-glitch={glitchedText}>
          {glitchedText}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-10 md:grid-cols-3">
        <div className="w-full">
          <Label>Bg Color</Label>
          <ColorPicker
            color={backgroundColor}
            onChange={(color) => setBackgroundColor(color.hex)}
          />
        </div>
        <div className="w-full">
          <Label>Glitch Color 1</Label>
          <ColorPicker
            color={glitchColor1}
            onChange={(color) => setGlitchColor1(color.hex)}
          />
        </div>
        <div className="w-full">
          <Label>Glitch Color 2</Label>
          <ColorPicker
            color={glitchColor2}
            onChange={(color) => setGlitchColor2(color.hex)}
          />
        </div>
      </div>
      <div className="mt-5 h-52 overflow-auto">
        <CopyBlock
          theme={dracula}
          language="html"
          text={`<div className="glitch-wrapper">
    <div className="glitch" data-glitch="${glitchedText}">
        ${glitchedText}
    </div>
</div>
        
<style>
    .glitch-wrapper {
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: ${backgroundColor};
        padding: 100px 10px;
    }

    .glitch {
        position: relative;
        font-size: ${glitchedSize}px;
        font-weight: 700;
        line-height: 1.2;
        color: ${textColor};
        letter-spacing: 7px;
        z-index: 1;
    }

    .glitch:before,
    .glitch:after {
        display: block;
        content: attr(data-glitch);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.8;
    }

    .glitch:before {
        animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        color: ${glitchColor1};
        z-index: -1;
    }

    .glitch:after {
        animation: glitch-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
        color: ${glitchColor2};
        z-index: -2;
    }

    @keyframes glitch-color {
        0% {
            transform: translate(0);
        }

        20% {
            transform: translate(-10px);
        }

        40% {
            transform: translate(-5px);
        }

        60% {
            transform: translate(10px);
        }

        80% {
            transform: translate(5px);
        }

        to {
            transform: translate(0);
        }
    }
</style>`}
        />
      </div>
    </>
  );
};

export default GlitchTextEffect;
