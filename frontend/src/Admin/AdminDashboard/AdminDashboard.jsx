import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, Users as UsersIcon, ClipboardList, Settings as SettingsIcon, Bell } from "lucide-react";

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col">
    <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
    <nav className="flex flex-col space-y-4">
      <Link to="/admin" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
        <BarChart3 /> <span>Dashboard</span>
      </Link>
      <Link to="/admin/users" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
        <UsersIcon /> <span>Users</span>
      </Link>
      <Link to="/admin/exams" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
        <ClipboardList /> <span>Exams</span>
      </Link>
      <Link to="/admin/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
        <SettingsIcon /> <span>Settings</span>
      </Link>
    </nav>
  </div>
);

const Navbar = () => (
  <div className="w-full bg-white p-4 flex justify-between shadow-md">
    <h2 className="text-lg font-semibold">Admin Dashboard</h2>
    <div className="flex space-x-4">
      <Bell className="cursor-pointer" />
      <img
        src="https://via.placeholder.com/40"
        alt="Admin"
        className="w-10 h-10 rounded-full border"
      />
    </div>
  </div>
);

const Dashboard = () => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4">Welcome, Admin!</h2>
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-blue-500 p-4 text-white rounded-lg">Total Users: 100</div>
      <div className="bg-green-500 p-4 text-white rounded-lg">Total Exams: 50</div>
      <div className="bg-red-500 p-4 text-white rounded-lg">Pending Reports: 5</div>
    </div>
  </div>
);

const UsersPage = () => <div className="p-6">Manage Users</div>;
const ExamsPage = () => <div className="p-6">Manage Exams</div>;
const SettingsPage = () => <div className="p-6">Admin Settings</div>;

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
      </div>
    </div>
  );
};

export default AdminDashboard;
