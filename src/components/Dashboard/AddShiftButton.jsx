import React from "react";
import { Button } from "@mui/material";

const AddShiftButton = () => {
  const handleAddShift = () => {
    alert("シフト追加モーダルを開きます");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleAddShift}>
      シフトを追加
    </Button>
  );
};

export default AddShiftButton;
