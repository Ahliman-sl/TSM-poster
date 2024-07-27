import { FaUserCircle, FaSignOutAlt, FaDollarSign } from "react-icons/fa";

function ProfilMenu() {
  return (
    <div className="absolute right-0 top-16 z-20 w-56 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 transition-transform transform scale-0 origin-top-right group-hover:scale-100">
      <div className="py-2">
        <div className="border-b border-gray-200">
          <h3 className="px-4 py-2 text-lg font-semibold text-gray-800">
            Profile Menu
          </h3>
        </div>
        <a
          href="#"
          className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 text-gray-800"
        >
          <FaUserCircle className="text-xl text-gray-600" />
          <span className="ml-3">Your Profile</span>
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 text-gray-800"
        >
          <FaSignOutAlt className="text-xl text-gray-600" />
          <span className="ml-3">Logout</span>
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 text-gray-800"
        >
          <FaDollarSign className="text-xl text-gray-600" />
          <span className="ml-3">Pricing Plans</span>
        </a>
      </div>
    </div>
  );
}

export default ProfilMenu;
