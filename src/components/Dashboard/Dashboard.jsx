import React from "react";

function Dashboard() {
  return (
    <section className="min-h-[80vh] bg-gray-100 p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Welcome back! Here's your dashboard overview.
        </p>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">
              Total Projects
            </h2>

            <p className="text-3xl font-bold mt-2">
              12
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">
              Completed
            </h2>

            <p className="text-3xl font-bold mt-2 text-green-600">
              8
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">
              Pending
            </h2>

            <p className="text-3xl font-bold mt-2 text-orange-500">
              4
            </p>
          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-4">

            <li className="border-b pb-3">
              Created a new project
            </li>

            <li className="border-b pb-3">
              Updated profile information
            </li>

            <li>
              Completed a project
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;