import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "../pages/products.css"; // Import CSS styles

const AdminDashboard = () => {
  const [visits, setVisits] = useState([]);
  const [clicksPerDay, setClicksPerDay] = useState({});
  const [totalClicks, setTotalClicks] = useState([]);
  const [buttonClicks, setButtonClicks] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [countriesPerDay, setCountriesPerDay] = useState({});
  const [totalCountries, setTotalCountries] = useState([]);

  useEffect(() => {
    axios.get("https://platinium-backend.onrender.com/api/analytics").then((response) => {
      const groupedData = response.data.reduce((acc, visit) => {
        const date = visit.timestamp.split("T")[0];
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});

      const chartData = Object.keys(groupedData).map((date) => ({
        date,
        visits: groupedData[date],
      }));

      setVisits(chartData);
    });

    axios.get("https://platinium-backend.onrender.com/api/clicks")
      .then(response => {
        const groupedData = response.data.clicksPerDay.reduce((acc, entry) => {
          const date = entry._id.date;
          const page = entry._id.page;
          
          acc[date] = acc[date] || [];
          acc[date].push({ page, count: entry.count });
          
          return acc;
        }, {});

        setClicksPerDay(groupedData);
        setTotalClicks(response.data.totalClicks);
      })
      .catch(error => console.error("Error fetching click data:", error));

    axios.get("https://platinium-backend.onrender.com/api/button-clicks").then((response) => {
      const groupedData = response.data.reduce((acc, click) => {
        if (!click.buttonId) return acc;
        acc[click.buttonId] = (acc[click.buttonId] || 0) + click.clicks;
        return acc;
      }, {});

      const chartData = Object.keys(groupedData).map((buttonId) => ({
        buttonName: buttonId,
        clicks: groupedData[buttonId],
      }));

      setButtonClicks(chartData);
    });

    axios
      .get("https://platinium-backend.onrender.com/api/referrers")
      .then((response) => setReferrals(response.data))
      .catch((error) => console.error("Error fetching referrals:", error));
  }, []);

  useEffect(() => {
    axios.get("https://platinium-backend.onrender.com/api/visitor-countries")
      .then(response => {
        const groupedData = response.data.countriesPerDay.reduce((acc, entry) => {
          const date = entry._id.date;
          const country = entry._id.country || "Unknown";
          
          acc[date] = acc[date] || [];
          acc[date].push({ country, count: entry.count });
          
          return acc;
        }, {});

        setCountriesPerDay(groupedData);
        setTotalCountries(response.data.totalCountries);
      })
      .catch(error => console.error("Error fetching country data:", error));
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* Website Visits Over Time (Line Chart) */}
      <div className="chart-container small-chart">
        <h3>Website Visits Over Time</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={visits}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="visits" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Most Clicked Pages (Daily Breakdown) */}
      <div className="chart-container small-chart">
        <h3>Most Clicked Pages (Per Day)</h3>
        {Object.keys(clicksPerDay).map((date, index) => (
          <div key={index} className="daily-click-data">
            <h4>{date}</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={clicksPerDay[date]}>
                <XAxis dataKey="page" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#ff7300" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      {/* Total Clicks Table (All Time) */}
      <div className="table-container">
        <h3>Most Clicked Pages (All Time)</h3>
        <table>
          <thead>
            <tr>
              <th>Page</th>
              <th>Total Clicks</th>
            </tr>
          </thead>
          <tbody>
            {totalClicks.map((entry, index) => (
              <tr key={index}>
                <td>{entry._id}</td>
                <td>{entry.totalCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button Clicks Per Day (Now Displaying Button Names) */}
      <div className="chart-container small-chart">
        <h3>Button Clicks</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={buttonClicks}>
            <XAxis dataKey="buttonName" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="clicks" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Referral Sources Table */}
      <div className="table-container">
        <h3>Top Referral Sources</h3>
        <table>
          <thead>
            <tr>
              <th>Referrer</th>
              <th>Visits</th>
            </tr>
          </thead>
          <tbody>
            {referrals.map((ref, index) => (
              <tr key={index}>
                <td>{ref._id || "Direct"}</td>
                <td>{ref.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visitors by Country Pie Chart (Daily Breakdown) */}
      <div className="chart-container small-chart">
        <h3>Visitors by Country (Per Day)</h3>
        {Object.keys(countriesPerDay).map((date, index) => (
          <div key={index} className="daily-country-data">
            <h4>{date}</h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={countriesPerDay[date]}
                  dataKey="count"
                  nameKey="country"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  fill="#8884d8"
                  label
                >
                  {countriesPerDay[date].map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][idx % 4]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      {/* Visitor Country History Table */}
      <div className="table-container">
        <h3>Visitor Country History (All Time)</h3>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Total Visitors</th>
            </tr>
          </thead>
          <tbody>
            {totalCountries.map((entry, index) => (
              <tr key={index}>
                <td>{entry._id || "Unknown"}</td>
                <td>{entry.totalCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
