import React from 'react';

const DashboardOverview = () => {
  // Fetch data or use dummy data for overview metrics
  const userCount = 10; // Replace with actual data fetch
  const facilityCount = 10; // Replace with actual data fetch

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">Dashboard Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm text-gray-500">Total Users</h3>
          <p className="text-lg font-bold">{userCount}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">Total Facilities</h3>
          <p className="text-lg font-bold">{facilityCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
