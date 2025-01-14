import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get("https://platinium-backend.onrender.com/api/reports")
      .then(response => setReports(response.data))
      .catch(error => console.error("Error fetching reports:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <AdminNavbar />
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Daily Reports</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2">Visits</th>
                <th className="border border-gray-300 px-4 py-2">Clicks</th>
                <th className="border border-gray-300 px-4 py-2">Button Clicks</th>
                <th className="border border-gray-300 px-4 py-2">Top Referrals</th>
                <th className="border border-gray-300 px-4 py-2">Visitor Countries</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{report.date}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{report.visits}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{report.clicks}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{report.buttonClicks.length}</td>
                  <td className="border border-gray-300 px-4 py-2">{report.referrals.map(r => `${r._id} (${r.count})`).join(", ")}</td>
                  <td className="border border-gray-300 px-4 py-2">{report.visitorCountries.map(c => `${c._id} (${c.count})`).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
