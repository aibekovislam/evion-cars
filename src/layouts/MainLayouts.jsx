import React from "react";

import { Outlet } from "react-router-dom";
import Navbra from "../components/Navbra";

function MainLayouts() {
  return (
    <div>
      <Navbra />
      <Outlet />
    </div>
  );
}

export default MainLayouts;
