import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NavCard = (item: {
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      to={item.href}
      className="overflow-hidden rounded-lg border shadow border-gray-100 group cursor-pointer"
    >
      <div className=" border-b border-gray-900/5 bg-gray-50 p-6">
        <div className="text-2xl group-hover:text-orange-500 text-gray-600 transition-all duration-300">
          {item.icon}
        </div>
        <div className="text-xl font-semibold leading-6 blurDark-text mt-2">
          {item.name}
        </div>
        <p className="text-base text-gray-500 mt-2">{item.description}</p>
        <div className="flex items-center mt-10 gap-3 group-hover:text-orange-500 transition-all duration-300">
          <span>Open</span>
          <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default NavCard;
