import { FC } from "react";
import { Route, Routes } from "react-router";
import MainPage from "./main";

const Routing: FC = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>
);

export default Routing;
