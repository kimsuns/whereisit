import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./layout/Layout";
import MySpaceLayout from "./layout/MySpaceLayout";
import Space from "../pages/Space";
import Items from "../pages/Items";
import Notfound from "../pages/Notfound";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<MySpaceLayout />}>
            <Route path="/space/:id" element={<Space />} />
            <Route path="/items/:id" element={<Items />} />
          </Route>
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
