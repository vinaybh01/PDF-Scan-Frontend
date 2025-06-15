import { Outlet } from "react-router-dom";
import Header from "./components/Header & Footer/Header";
import Footer from "./components/Header & Footer/Footer";

function DefaultContainer() {
  return (
    <div>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultContainer;
