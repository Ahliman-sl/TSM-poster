/* eslint-disable react/prop-types */
import { FaInstagram, FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";

function ConnectedPlatforms() {
  const platforms = [
    { name: "Instagram", icon: FaInstagram, connected: true },
    { name: "LinkedIn", icon: FaLinkedin, connected: false },
    { name: "Facebook", icon: FaFacebook, connected: true },
    { name: "TikTok", icon: FaTiktok, connected: false },
  ];

  return (
    <div className="w-full  h-max bg-white shadow-md flex flex-col items-center justify-center border-b-1 border-slate-200">
      <h2 className="text-md font-bold mb-4">Connected Platforms</h2>
      <div className="w-full h-max flex flex-col gap-2">
        {platforms.map((platform) => (
          <PlatformItem
            key={platform.name}
            name={platform.name}
            Icon={platform.icon}
            connected={platform.connected}
          />
        ))}
      </div>
    </div>
  );
}

function PlatformItem({ name, Icon, connected }) {
  return (
    <div className="flex items-center justify-between w-full p-2 border-b border-gray-200 group cursor-pointer">
      <div className="flex items-center gap-2">
        <Icon className="text-xl text-gray-700" />
        <p className="text-md font-semibold text-gray-700">{name}</p>
      </div>
      <div className="flex items-center">
        <div
          className={`px-3 py-1 text-xs rounded-full transition ${
            connected
              ? "bg-green-500 text-slate-50 font-semibold group-hover:bg-green-600"
              : "bg-red-500 text-slate-50 font-semibold group-hover:bg-red-700"
          }`}
        >
          {connected ? (
            <span className="group-hover:text-white">Disconnect</span>
          ) : (
            <span className="group-hover:text-white">Connect</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConnectedPlatforms;
