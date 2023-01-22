import { Outlet } from "react-router-dom";
import AppBar from "../../components/app-bar/app-bar";

const MainView: React.FC = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <div></div>
    </>
  );
};

export default MainView;
