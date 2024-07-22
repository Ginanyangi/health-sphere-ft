import React from 'react';
import DashboardOverview from './DashboardOverview';
import UserManagement from './UserManagement';
import FacilityManagement from './FacilityManagement';
import ContactMessages from './ContactMessages';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DashboardOverview />
        <UserManagement />
        <FacilityManagement />
        <ContactMessages />
      </div>
    </div>
  );
};

export default AdminDashboard;
