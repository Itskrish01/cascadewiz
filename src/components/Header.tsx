import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { BoxesIcon, BoxIcon, Text } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const products = [
  {
    name: "Glassmorphism",
    description:
      "Generate cool Glassmorphism design for your own websites or web apps",
    href: "/css-glassmorphism",
    icon: BoxIcon,
  },
  {
    name: "FlexBox Guide",
    description:
      "Learn how flexbox works with its different properties, visually",
    href: "/css-flexbox-guide",
    icon: BoxesIcon,
  },
  {
    name: "Glitch Text Effect",
    description: "Generate a very cool glitch text effect with HTML and CSS",
    href: "/css-glitch-text-effect",
    icon: Text,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-14 w-auto" src="/images/cascade.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden items-center lg:flex lg:gap-x-12">
          <Popover>
            <PopoverTrigger className="flex items-center gap-x-1 font-semibold leading-6 text-gray-900">
              Product
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverTrigger>

            <PopoverContent className="w-[500px]">
              <div className="">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4   leading-6 hover:bg-gray-50"
                  >
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-orange-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <a
            href="https://krishtasood.online"
            target="_blank"
            className="font-semibold leading-6 text-gray-900"
          >
            About
          </a>
          <a
            href="https://buymeacoffee.com/itskrish01"
            target="_blank"
            className="font-semibold leading-6 animate-bounce text-gray-900"
          >
            <img
              className="h-10 w-auto"
              src="/images/coffee.png"
              alt="buy me coffee"
            />
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="/images/Tweetie.png" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {products.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-orange-600"
                          aria-hidden="true"
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <a
                    href="https://krishtasood.online"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </a>
                  <a
                    href="https://buymeacoffee.com/itskrish01"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Buy me coffee
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
