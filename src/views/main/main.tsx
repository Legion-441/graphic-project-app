import { Outlet } from "react-router-dom";
import AppBar from "../../components/app-bar/app-bar";
import Footer from "../../components/footer/footer";

const MainView: React.FC = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainView;
