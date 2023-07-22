import React from "react";
import RootLayout from "../../components/Layout/RootLayout";
import DashBoardLayout from "../../components/Layout/DashBoardLayout";

const HomePage = () => {
  return (
    <div>
      <h1>This is Next.JS Home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashBoardLayout>{page}</DashBoardLayout>
    </RootLayout>
  );
};
