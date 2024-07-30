/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ChoosePlatforms({ onChange }) {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const onValueChange = (e) => {
    const value = e.target.value;
    const updatedPlatforms = selectedPlatforms.includes(value)
      ? selectedPlatforms.filter((platform) => platform !== value)
      : [...selectedPlatforms, value];

    setSelectedPlatforms(updatedPlatforms);
    onChange(updatedPlatforms);
  };

  const platforms = [
    { name: "Facebook", id: "facebook", color: "#1877F2" },
    { name: "LinkedIn", id: "linkedin", color: "#0077B5" },
    { name: "Instagram", id: "instagram", color: "#E4405F" },
    { name: "TikTok", id: "tiktok", color: "#000000" },
  ];

  return (
    <div className="rounded-md max-w-lg mx-auto">
      <fieldset className="flex flex-wrap gap-4">
        {platforms.map((platform) => (
          <div key={platform.id} className="relative flex items-center">
            <input
              className="hidden"
              type="checkbox"
              value={platform.name}
              id={platform.id}
              onChange={onValueChange}
            />
            <label
              htmlFor={platform.id}
              className={`flex items-center gap-2 cursor-pointer border rounded-lg p-2 transition-colors duration-300 ${
                selectedPlatforms.includes(platform.name)
                  ? "bg-opacity-20 border-transparent text-white"
                  : "bg-opacity-0 border-gray-300 text-gray-700"
              }`}
              style={{
                backgroundColor: selectedPlatforms.includes(platform.name)
                  ? platform.color
                  : "transparent",
              }}
            >
              <span
                className={`w-4 h-4 flex justify-center items-center border rounded-full ${
                  selectedPlatforms.includes(platform.name)
                    ? "bg-white border-transparent"
                    : "bg-transparent border-gray-400"
                }`}
              >
                {selectedPlatforms.includes(platform.name) && (
                  <svg
                    className="w-2 h-2 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 4.146a.5.5 0 0 0-.708-.708L6.5 10.293 4.354 8.146a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                )}
              </span>
              {platform.name}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
