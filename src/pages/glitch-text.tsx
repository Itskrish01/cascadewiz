import { ColorPicker } from "@/components/colorpicker/ColorPicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { Helmet } from "react-helmet";

const GlitchTextEffect = () => {
  const [glitchedText, setGlitchedText] = useState("Amazing");
  const [glitchedSize, setGlitchedSize] = useState("104");
  const [textColor, setTextColor] = useState<string>("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState<string>("#000000");
  const [glitchColor1, setGlitchColor1] = useState<string>("#c2ff00");
  const [glitchColor2, setGlitchColor2] = useState<string>("#ff00ff");
  const [animationDuration, setAnimationDuration] = useState(3);

  return (
    <>
      <Helmet>
        <meta property="og:title" content=" Glitch Text Effect" />
        <meta
          property="og:description"
          content="Generate a very cool glitch text effect with HTML and CSS"
        />
        <meta property="og:site_name" content="cascadeWiz" />

        <meta name="twitter:url" content={window.location.href} />
        <title>Glitch Text Effect</title>
      </Helmet>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .container-glitch {
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
            animation: glitch-color ${(0.1 * animationDuration).toFixed(
              1
            )}s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
            color: ${glitchColor1};
            z-index: -1;
        }

        .glitch:after {
            animation: glitch-color ${
              ((0.1 * animationDuration).toFixed(1) as unknown as number) - 0.1
            }s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
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
          <div className="flex items-center gap-2 mb-2">
            <Label>Text Color</Label>
            <div
              className="h-4 w-4 rounded border border-gray-200"
              style={{ backgroundColor: textColor }}
            ></div>
          </div>
          <ColorPicker color={textColor} onChange={setTextColor} />
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
      <div className="mt-4 container-glitch rounded-lg overflow-hidden">
        <div className="glitch" data-glitch={glitchedText}>
          {glitchedText}
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-5 mt-10">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-2">
            <Label>Bg Color</Label>
            <div
              className="h-4 w-4 rounded border border-gray-200"
              style={{ backgroundColor: backgroundColor }}
            ></div>
          </div>
          <ColorPicker color={backgroundColor} onChange={setBackgroundColor} />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-2 mb-2">
            <Label>Glitch Color 1</Label>
            <div
              className="h-4 w-4 rounded border border-gray-200"
              style={{ backgroundColor: glitchColor1 }}
            ></div>
          </div>
          <ColorPicker color={glitchColor1} onChange={setGlitchColor1} />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-2 mb-2">
            <Label>Glitch Color 2</Label>
            <div
              className="h-4 w-4 rounded border border-gray-200"
              style={{ backgroundColor: glitchColor2 }}
            ></div>
          </div>
          <ColorPicker color={glitchColor2} onChange={setGlitchColor2} />
        </div>
        <div className="w-full">
          <Label>Duration: {(0.1 * animationDuration).toFixed(1)}s</Label>
          <Slider
            className="mt-2"
            max={20}
            min={1}
            value={[animationDuration]}
            onValueChange={(value) => setAnimationDuration(value[0])}
          />
        </div>
      </div>
      <div className="mt-5 h-52 overflow-auto">
        <CopyBlock
          theme={dracula}
          language="html"
          text={`<div class="container-glitch">
    <div class="glitch" data-glitch="${glitchedText}">
        ${glitchedText}
    </div>
</div>
        
<style>
    .container-glitch {
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
        animation: glitch-color ${(0.1 * animationDuration).toFixed(
          1
        )}s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        color: ${glitchColor1};
        z-index: -1;
    }

    .glitch:after {
        animation: glitch-color ${(0.1 * animationDuration - 0.1).toFixed(
          1
        )}s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
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
