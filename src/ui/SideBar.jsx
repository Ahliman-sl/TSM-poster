import { BiLogOut } from "react-icons/bi";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import { IoCreate, IoSettings } from "react-icons/io5";
import { MdBookmarks, MdDeleteSweep, MdPriceChange } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { signOut } from "../services/auth";

function SideBar() {
  return (
    <nav className=" w-full h-full py-10 border-r-2 border-slate-200 flex flex-col justify-between bg-black">
      <ul className="flex flex-col gap-2 p-4">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex flex-row items-center gap-4 text-xl py-2 px-4 transition duration-300 rounded-md ${
                isActive
                  ? "text-yellow-700 font-semibold"
                  : "text-gray-800 hover:text-yellow-600"
              }`
            }
          >
            <FaHome className="text-2xl" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `flex flex-row items-center gap-4 text-xl py-2 px-4 transition duration-300 rounded-md ${
                isActive
                  ? "text-yellow-700 font-semibold"
                  : "text-gray-800 hover:text-yellow-600"
              }`
            }
          >
            <IoCreate className="text-2xl" />
            <span>Create Post</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/timed"
            className={({ isActive }) =>
              `flex flex-row items-center gap-4 text-xl py-2 px-4 transition duration-300 rounded-md ${
                isActive
                  ? "text-yellow-700 font-semibold"
                  : "text-gray-800 hover:text-yellow-600"
              }`
            }
          >
            <FaBusinessTime className="text-2xl" />
            <span>Timed Post</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              `flex flex-row items-center gap-4 text-xl py-2 px-4 transition duration-300 rounded-md ${
                isActive
                  ? "text-yellow-700 font-semibold"
                  : "text-gray-800 hover:text-yellow-600"
              }`
            }
          >
            <MdBookmarks className="text-2xl" />
            <span>Saved Post</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/deleted"
            className={({ isActive }) =>
              `flex flex-row items-center gap-4 text-xl py-2 px-4 transition duration-300 rounded-md ${
                isActive
                  ? "text-yellow-700 font-semibold"
                  : "text-gray-800 hover:text-yellow-600"
              }`
            }
          >
            <MdDeleteSweep className="text-2xl" />
            <span>Deleted Post</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/plans"
            className={({ isActive }) =>
              `flex flex-row items-center gap-4 text-xl py-2 px-4 transition duration-300 rounded-md ${
                isActive
                  ? "text-yellow-700 font-semibold"
                  : "text-gray-800 hover:text-yellow-600"
              }`
            }
          >
            <MdPriceChange className="text-2xl" />
            <span>Pricing Plans</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex flex-row items-center gap-4 text-xl py-2 px-4 transition duration-300 rounded-md ${
                isActive
                  ? "text-yellow-700 font-semibold"
                  : "text-gray-800 hover:text-yellow-600"
              }`
            }
          >
            <IoSettings className="text-2xl" />
            <span>Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `flex flex-row items-center gap-4 text-md py-2 px-4 transition duration-300 rounded-md ${
                isActive
                  ? "text-yellow-700 font-semibold"
                  : "text-gray-800 hover:text-yellow-600"
              }`
            }
          >
            <BsFillQuestionOctagonFill className="text-2xl" />
            <span>Help & Support</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/authentication"
            onClick={() => signOut()}
            className={({ isActive }) =>
              `flex flex-row items-center gap-4 text-md py-2 px-4 transition duration-300 rounded-md ${
                isActive
                  ? "text-yellow-700 font-semibold"
                  : "text-gray-800 hover:text-yellow-600"
              }`
            }
          >
            <BiLogOut className="text-2xl" />
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
