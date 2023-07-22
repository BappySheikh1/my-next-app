import React from "react";
import DashBoardLayout from "../../components/Layout/DashBoardLayout";

const Dashboard = () => {
  return (
    <div>
      <h1>This is a Dashboard</h1>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
