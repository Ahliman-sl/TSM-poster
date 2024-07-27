import ConnectedPlatforms from "./ConnectedPlatforms";
import TotalStats from "./TotalStats";

function RightBar() {
  return (
    <div className="h-full w-full border-l-2 border-slate-200 ">
      <ConnectedPlatforms />
      <TotalStats />
    </div>
  );
}

export default RightBar;
