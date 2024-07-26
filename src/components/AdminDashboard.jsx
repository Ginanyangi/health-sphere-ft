import React, { useState } from 'react';
import DashboardOverview from './DashboardOverview';
import UserManagement from './UserManagement';
import FacilityManagement from './FacilityManagement';
import ContactMessages from './ContactMessages';
import BookingManagement from './BookingManagement';


const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <DashboardOverview />;
      case 'users':
        return <UserManagement />;
      case 'facilities':
        return <FacilityManagement />;
      case 'contacts':
        return <ContactMessages />;
      case 'bookings' :
        return <BookingManagement />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 w-64 bg-gray-800 text-white h-full p-4 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <button
          className="text-white md:hidden mb-4"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${activeSection === 'overview' ? 'bg-gray-700' : ''}`}
              onClick={() => setActiveSection('overview')}
            >
              Dashboard Overview
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${activeSection === 'users' ? 'bg-gray-700' : ''}`}
              onClick={() => setActiveSection('users')}
            >
              User Management
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${activeSection === 'facilities' ? 'bg-gray-700' : ''}`}
              onClick={() => setActiveSection('facilities')}
            >
              Facility Management
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${activeSection === 'bookings' ? 'bg-gray-700' : ''}`}
              onClick={() => setActiveSection('bookings')}
            >
              Booking Management
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${activeSection === 'contacts' ? 'bg-gray-700' : ''}`}
              onClick={() => setActiveSection('contacts')}
            >
              Contact Messages
            </button>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 bg-gray-100">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
