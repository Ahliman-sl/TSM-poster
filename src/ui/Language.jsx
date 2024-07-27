import { FaGlobeAsia, FaGlobeEurope } from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";

function Language() {
  return (
    <div className="absolute right-0 top-16 z-20 w-48 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 transition-all duration-300 transform">
      <div className="py-2">
        <div className="border-b border-gray-200">
          <h3 className="px-4 py-2 text-lg font-semibold text-gray-800">
            Select Language
          </h3>
        </div>
        <div className="py-2">
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
          >
            <FaGlobeAsia className="text-xl text-gray-600" />
            <span className="ml-3 text-gray-800">English</span>
            <span className="ml-auto text-gray-500">EN</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
          >
            <FaGlobeEurope className="text-xl text-gray-600" />
            <span className="ml-3 text-gray-800">Russian</span>
            <span className="ml-auto text-gray-500">RU</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
          >
            <IoLanguageOutline className="text-xl text-gray-600" />
            <span className="ml-3 text-gray-800">Turkish</span>
            <span className="ml-auto text-gray-500">TR</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Language;
