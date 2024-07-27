import { FaRegChartBar, FaPlus, FaBell, FaCalendarCheck } from "react-icons/fa";

function Home() {
  return (
    <div className="p-4">
      {/* Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold mb-2">Total Posts</h2>
          <p className="text-3xl font-bold">123</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold mb-2">Total Engagement</h2>
          <p className="text-3xl font-bold">456</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold mb-2">New Followers</h2>
          <p className="text-3xl font-bold">78</p>
        </div>
      </div>
      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Recent Activity */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul>
            <li className="mb-2 flex items-center">
              <FaBell className="text-yellow-500 mr-2" />
              <span>New comment on your post</span>
            </li>
            <li className="mb-2 flex items-center">
              <FaCalendarCheck className="text-green-500 mr-2" />
              <span>Scheduled post published</span>
            </li>
            {/* Diğer aktiviteler */}
          </ul>
        </div>
        {/* Quick Actions */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <button className="bg-blue-500 text-white rounded p-2 w-full mb-2 flex items-center justify-center">
            <FaPlus className="mr-2" />
            <span>Create New Post</span>
          </button>
          <button className="bg-blue-500 text-white rounded p-2 w-full flex items-center justify-center">
            <FaRegChartBar className="mr-2" />
            <span>View Analytics</span>
          </button>
        </div>
      </div>
      {/* Charts and Graphs */}
      <div className="bg-white shadow rounded p-4 mt-4">
        <h2 className="text-xl font-semibold mb-4">Engagement Over Time</h2>
        {/* Grafik bileşeni buraya gelecek */}
      </div>
      <div className="bg-white shadow rounded p-4 mt-4">
        <h2 className="text-xl font-semibold mb-4">Engagement Over Time</h2>
        {/* Grafik bileşeni buraya gelecek */}
      </div>
      <div className="bg-white shadow rounded p-4 mt-4">
        <h2 className="text-xl font-semibold mb-4">Engagement Over Time</h2>
        {/* Grafik bileşeni buraya gelecek */}
      </div>
      <div className="bg-white shadow rounded p-4 mt-4">
        <h2 className="text-xl font-semibold mb-4">Engagement Over Time</h2>
        {/* Grafik bileşeni buraya gelecek */}
      </div>{" "}
      <div className="bg-white shadow rounded p-4 mt-4">
        <h2 className="text-xl font-semibold mb-4">Engagement Over Time</h2>
        {/* Grafik bileşeni buraya gelecek */}
      </div>
      <div className="bg-white shadow rounded p-4 mt-4">
        <h2 className="text-xl font-semibold mb-4">Engagement Over Time</h2>
        {/* Grafik bileşeni buraya gelecek */}
      </div>
    </div>
  );
}

export default Home;
