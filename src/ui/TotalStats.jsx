import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaInstagram, FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";

// Chart.js bileşenlerini kaydet
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TotalStats() {
  const totalPosts = 123; // Toplam gönderi sayısı (Örnek sayı)
  const platforms = [
    { name: "Instagram", icon: FaInstagram, posts: 45 },
    { name: "LinkedIn", icon: FaLinkedin, posts: 30 },
    { name: "Facebook", icon: FaFacebook, posts: 25 },
    { name: "TikTok", icon: FaTiktok, posts: 23 },
  ];

  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Posts",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "rgba(54, 162, 235, 1)",
        data: [12, 19, 8, 24], // Haftalık gönderi sayıları (Örnek veri)
      },
    ],
  };

  return (
    <div className="p-4 w-full h-max bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
      <h2 className="text-md font-bold mb-4">Statistics</h2>
      <div className="text-md font-bold mb-4">
        Total Posts: <span className="text-blue-600">{totalPosts}</span>
      </div>
      <div className="w-full h-max flex flex-col gap-2 ">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="flex items-center justify-between w-full p-2 border-b border-gray-200"
          >
            <div className="flex items-center gap-2">
              <platform.icon className="text-md text-gray-700" />
              <p className="text-md font-medium">{platform.name}</p>
            </div>
            <div className="text-md font-medium">{platform.posts} posts</div>
          </div>
        ))}
      </div>
      <div className="w-full h-max">
        <h3 className="text-md font-bold mb-2">Weekly Posts Comparison</h3>
        <Line
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
              title: {
                display: true,
                text: "Posts per Week",
              },
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: "Weeks",
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "Number of Posts",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default TotalStats;
