import axios from "axios";

// Function to get visitor IP
export const getIPAddress = async () => {
  try {
    const response = await axios.get("https://api64.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return "Unknown IP";
  }
};

// Track page visits
export const trackPageVisit = async (page) => {
  const ip = await getIPAddress();
  const referrer = document.referrer || "Direct";
  const userId = localStorage.getItem("userId") || `guest_${Date.now()}`;

  const visitData = {
    ip,
    userId,
    referrer,
    page,
    timeSpent: 0, // Updated when the user leaves the page
  };

  localStorage.setItem("visitStartTime", Date.now());

  window.addEventListener("beforeunload", async () => {
    const visitStartTime = localStorage.getItem("visitStartTime");
    visitData.timeSpent = (Date.now() - visitStartTime) / 1000; 

    await axios.post("https://platinium-backend.onrender.com/api/track", visitData);
  });
};

// Track button clicks
export const trackButtonClick = async (buttonId) => {
  await axios.post("https://platinium-backend.onrender.com/api/button-click", { buttonId });
};

// Track mouse clicks (heatmap tracking)
export const trackMouseClick = async (page, x, y) => {
  if (page === "/admin/login" || page === "/admin/dashboard") return; // Skip admin pages

  const userId = localStorage.getItem("userId") || `guest_${Date.now()}`;
  await axios.post("https://platinium-backend.onrender.com/api/click", { userId, page, x, y });
};

// Track scroll depth
export const trackScrollDepth = async (page) => {
  const userId = localStorage.getItem("userId") || `guest_${Date.now()}`;
  let maxScroll = 0;

  window.addEventListener("scroll", () => {
    const scrolled = Math.floor((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    if (scrolled > maxScroll) maxScroll = scrolled;
  });

  window.addEventListener("beforeunload", async () => {
    await axios.post("https://platinium-backend.onrender.com/api/scroll", { userId, page, scrollPercentage: maxScroll });
  });
};
