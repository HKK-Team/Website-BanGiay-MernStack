import React from "react";

import DashBoardMessenger, {
  DashBoardContextMessenger,
} from "../../components/DashBoardMessenger/DashBoardMessenger";

export default function DashBoardMessengerPage() {
  return (
    <DashBoardMessenger contextMessenger={<DashBoardContextMessenger />} />
  );
}
