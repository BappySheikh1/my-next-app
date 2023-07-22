import React from "react";
import DashBoardLayout from "../../components/Layout/DashBoardLayout";

const AdminPage = () => {
  return (
    <div>
      <h1>This is Admin page</h1>
    </div>
  );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return( <DashBoardLayout>{page}</DashBoardLayout>);
};
