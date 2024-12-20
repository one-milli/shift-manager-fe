import React from "react";
import ShiftCalendar from "../components/Dashboard/ShiftCalendar";
import ShiftSummary from "../components/Dashboard/ShiftSummary";
import AddShiftButton from "../components/Dashboard/AddShiftButton";

const Dashboard = () => {
  return (
    <div style={{ padding: "16px" }}>
      <h1>シフト管理ダッシュボード</h1>
      <ShiftSummary />
      <ShiftCalendar />
      <AddShiftButton />
    </div>
  );
};

export default Dashboard;
