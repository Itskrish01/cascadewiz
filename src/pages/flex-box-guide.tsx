import { Label } from "@/components/ui/label";
import {
  alignContentClasses,
  alignItemsClasses,
  alignSelfClasses,
  flexDirectionClasses,
  justifyContentClasses,
} from "@/data/classes";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function FlexBoxGuide() {
  const [justifyContent, setJustifyContent] = useState("justify-start");
  const [alignItems, setAlignItems] = useState("items-start");
  const [flexDirection, setFlexDirection] = useState("flex-row");
  const [alienContent, setAlignContent] = useState("content-start");
  const [alignSelf, setAlignSelf] = useState("self-start");

  return (
    <>
      <div>
        <Label className="font-bold text-lg blueDark-text">
          Justify content
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 mt-2">
          <div className="flex-1 bg-gray-50 border border-gray-200 w-full p-3 rounded-xl">
            <div
              className={cn(
                "flex gap-2 text-white transition-all h-full duration-300 text-sm font-bold font-mono leading-6 rounded-lg",
                justifyContent
              )}
            >
              <div className="p-4 w-14 h-full rounded-lg flex items-center justify-center bg-orange-500">
                01
              </div>
              <div className="p-4 w-14 h-full rounded-lg flex items-center justify-center bg-orange-500">
                02
              </div>
              <div className="p-4 w-14 h-full rounded-lg flex items-center justify-center bg-orange-500">
                03
              </div>
              <div className="p-4 w-14 h-full rounded-lg flex items-center justify-center bg-orange-500">
                04
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 border border-gray-200 w-full rounded-xl p-3">
            <div className=" grid grid-cols-2 gap-2">
              {justifyContentClasses.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setJustifyContent(item.name)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
                    item.name === justifyContent &&
                      "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Label className="font-bold text-lg blueDark-text">Align Items</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 mt-2">
          <div className="flex-1 bg-gray-50 border border-gray-200 w-full p-3 rounded-xl">
            <div
              className={cn(
                "flex gap-2 text-white transition-all h-full duration-300 text-sm font-bold font-mono leading-6 rounded-lg",
                alignItems
              )}
            >
              <div className="p-4 w-full rounded-lg flex items-center justify-center bg-orange-500">
                01
              </div>
              <div className="p-4 w-full  rounded-lg flex items-center justify-center bg-orange-500">
                02
              </div>
              <div className="p-4 w-full  rounded-lg flex items-center justify-center bg-orange-500">
                03
              </div>
              <div className="p-4 w-full  rounded-lg flex items-center justify-center bg-orange-500">
                04
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 border border-gray-200 w-full rounded-xl p-3">
            <div className=" grid grid-cols-1 gap-2">
              {alignItemsClasses.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setAlignItems(item.name)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
                    item.name === alignItems &&
                      "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Label className="font-bold text-lg blueDark-text">
          Flex Direction
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 mt-2">
          <div className="flex-1 bg-gray-50 border border-gray-200 w-full p-3 rounded-xl">
            <div
              className={cn(
                "flex gap-2 text-white transition-all h-full w-full duration-300 text-sm font-bold font-mono leading-6 rounded-lg",
                flexDirection
              )}
            >
              <div className="p-4 w-full rounded-lg transition-all duration-300 flex items-center justify-center bg-orange-500">
                01
              </div>
              <div className="p-4 w-full  rounded-lg flex items-center justify-center bg-green-500">
                02
              </div>
              <div className="p-4 w-full  rounded-lg flex items-center justify-center bg-blue-500">
                03
              </div>
              <div className="p-4 w-full  rounded-lg flex items-center justify-center bg-indigo-500">
                04
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 border border-gray-200 w-full rounded-xl p-3">
            <div className=" grid grid-cols-1 gap-2">
              {flexDirectionClasses.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setFlexDirection(item.name)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
                    item.name === flexDirection &&
                      "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Label className="font-bold text-lg blueDark-text">Align Content</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 mt-2">
          <div className="flex-1 bg-gray-50 border border-gray-200  w-full p-3 rounded-xl">
            <div
              className={cn(
                "flex flex-wrap gap-2 text-white h-full duration-300 text-sm font-bold font-mono leading-6 rounded-lg",
                alienContent
              )}
            >
              <div className="p-4 w-full rounded-lg  flex items-center justify-center bg-orange-500">
                01
              </div>
              <div className="p-4 w-full rounded-lg flex items-center justify-center bg-orange-500">
                02
              </div>
              <div className="p-4 w-full rounded-lg flex items-center justify-center bg-orange-500">
                03
              </div>
              <div className="p-4 w-full rounded-lg flex items-center justify-center bg-orange-500">
                04
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 border border-gray-200 w-full rounded-xl p-3">
            <div className=" grid grid-cols-1 gap-2">
              {alignContentClasses.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setAlignContent(item.name)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
                    item.name === alienContent &&
                      "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Label className="font-bold text-lg blueDark-text">Align Self</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 mt-2">
          <div className="flex-1 bg-gray-50 border border-gray-200  w-full p-3 rounded-xl">
            <div
              className={cn(
                "flex items-start gap-2 text-white h-full duration-300 text-sm font-bold font-mono leading-6 rounded-lg"
              )}
            >
              <div className="p-4 w-full rounded-lg  flex items-center justify-center bg-orange-500">
                01
              </div>
              <div
                className={cn(
                  "p-4 w-full rounded-lg flex items-center justify-center bg-orange-500",
                  alignSelf
                )}
              >
                02
              </div>
              <div className="p-4 w-full rounded-lg flex items-center justify-center bg-orange-500">
                03
              </div>
              <div className="p-4 w-full rounded-lg flex items-center justify-center bg-orange-500">
                04
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 border border-gray-200 w-full rounded-xl p-3">
            <div className=" grid grid-cols-1 gap-2">
              {alignSelfClasses.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setAlignSelf(item.name)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
                    item.name === alignSelf &&
                      "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
