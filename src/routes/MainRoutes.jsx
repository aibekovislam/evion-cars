import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Detail from "../pages/Detail";
import BuyElectroCar from "../pages/BuyElectroCar";
import DetailForm from "../components/AmoCRMAuth";
import MainLayouts from "../layouts/MainLayouts";
import MyPage from "../pages/MyPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayouts />}></Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/details/:id/form" element={<BuyElectroCar />} />
      <Route path="/baimurat-abdalimov" element={<MyPage />} />
      <Route path="/test" element={<DetailForm />} />
    </Routes>
  );
}

export default MainRoutes;
