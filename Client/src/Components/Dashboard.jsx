import React, { useState } from "react";
import { Menu, Home, Upload, FileText, BarChart3, LogOut, User, CreditCard } from "lucide-react";
import { Button } from "flowbite-react";

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 space-y-6 shadow-sm hidden md:block">
        <div className="flex items-center gap-2 text-blue-600 text-2xl font-bold">
          <BarChart3 className="w-6 h-6" /> Excellytics
        </div>
        <nav className="space-y-4 text-gray-700 font-medium">
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <Home className="w-5 h-5" /> Home
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <BarChart3 className="w-5 h-5" /> Dashboard
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <FileText className="w-5 h-5" /> Uploaded Files
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <Upload className="w-5 h-5" /> Upload New File
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <CreditCard className="w-5 h-5" /> Pricing
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <div className="relative">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-50">
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <User className="w-4 h-4" /> Profile
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <Upload className="w-4 h-4" /> Upload File
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <LogOut className="w-4 h-4" /> Logout
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Welcome, Abc!</h2>
          <p className="text-sm text-gray-500">Here's your recent activity</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-100 border border-blue-200 p-6 rounded-xl shadow text-center">
            <h3 className="text-lg font-semibold text-blue-800">Uploaded Files</h3>
            <p className="text-3xl font-bold text-blue-900 mt-2">7</p>
          </div>
          <div className="bg-green-100 border border-green-200 p-6 rounded-xl shadow text-center">
            <h3 className="text-lg font-semibold text-green-800">Recent Uploads</h3>
            <p className="text-3xl font-bold text-green-900 mt-2">3</p>
          </div>
          <div className="bg-yellow-100 border border-yellow-200 p-6 rounded-xl shadow text-center">
            <h3 className="text-lg font-semibold text-yellow-800">History</h3>
            <p className="text-3xl font-bold text-yellow-900 mt-2">15</p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Recent Files</h3>
            <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer text-sm hover:bg-blue-700">
              Upload File
              <input type="file" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>

          {uploadedFile ? (
            <div className="text-green-700 font-medium">
              ✅ {uploadedFile} uploaded successfully!
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No files uploaded yet.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
