import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cursorClasses } from "@/data/classes";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { CopyBlock, dracula } from "react-code-blocks";

const CursorCSSGuide = () => {
  return (
    <>
      <h3 className="blueDark-text text-3xl font-semibold">CSS Cursor Guide</h3>
      <div className="mt-4 ">
        <p className="cursor-guide">
          The <code>cursor</code> CSS property determines which mouse cursor
          appears when the pointer hovers over an element.
          <br />
          <br />
          This property helps users understand what actions they can perform,
          such as selecting text, opening help or context menus, copying
          content, or resizing tables. You can define the cursor type using
          predefined keywords or specify a custom icon, with optional fallback
          images and a mandatory keyword as a final fallback.
        </p>
      </div>
      <div className="mt-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 w-full gap-5 mt-2">
          {cursorClasses.map((item) => (
            <div
              key={item.label}
              className={cn(
                "flex-1 bg-gray-50 cursor-pointer select-none border flex items-center justify-between border-gray-200 w-full p-3 rounded-xl",
                item.name
              )}
            >
              <div className="cursor-guide">
                <code>{item.label}</code>
              </div>
              <HoverCard openDelay={0.2}>
                <HoverCardTrigger asChild>
                  <Info className="w-5 h-5 text-zinc-400 hover:text-gray-900 transition-all" />
                </HoverCardTrigger>
                <HoverCardContent className="w-auto !cursor-auto">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Usage </h4>
                      <CopyBlock
                        theme={dracula}
                        language="css"
                        text={item.css}
                      />
                      <CopyBlock
                        theme={dracula}
                        language="html"
                        text={item.html}
                      />
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CursorCSSGuide;
