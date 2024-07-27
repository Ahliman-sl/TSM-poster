function Notification() {
  return (
    <div className="absolute right-0 border-2 border-slate-200 top-16 z-20 w-80 mt-2 origin-top-right bg-white shadow-lg rounded-lg transition-all duration-300 transform">
      <div className="py-4">
        <div className="px-4 pb-2 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
        </div>
        <div className="divide-y divide-gray-200">
          <a href="#" className="flex items-start px-4 py-3 hover:bg-gray-100">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover mr-3"
            />
            <div className="flex-1">
              <p className="text-gray-800">Notification 1</p>
              <p className="text-sm text-gray-600">
                This is a description of the notification.
              </p>
              <span className="text-xs text-gray-400">2 mins ago</span>
            </div>
          </a>
          <a href="#" className="flex items-start px-4 py-3 hover:bg-gray-100">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover mr-3"
            />
            <div className="flex-1">
              <p className="text-gray-800">Notification 2</p>
              <p className="text-sm text-gray-600">
                This is a description of the notification.
              </p>
              <span className="text-xs text-gray-400">5 mins ago</span>
            </div>
          </a>
          <a href="#" className="flex items-start px-4 py-3 hover:bg-gray-100">
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover mr-3"
            />
            <div className="flex-1">
              <p className="text-gray-800">Notification 3</p>
              <p className="text-sm text-gray-600">
                This is a description of the notification.
              </p>
              <span className="text-xs text-gray-400">10 mins ago</span>
            </div>
          </a>
        </div>
        <div className="px-4 py-2 border-t text-center hover:bg-slate-200">
          <a href="#" className="text-sm text-blue-600 hover">
            View All Notifications
          </a>
        </div>
      </div>
    </div>
  );
}

export default Notification;
