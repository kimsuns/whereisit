import { Outlet } from "react-router-dom";

function MySpaceLayout() {
  return (
    <>
      사이드 리스트
      <Outlet />
    </>
  );
}

export default MySpaceLayout;
