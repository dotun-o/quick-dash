import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import appConfig from "../../data/app-config";

import "./AppChrome.scss";

const AppChrome = () => {
  const { version, author } = appConfig;

  return (
    <div className="app-chrome">
      <Header version={ version } />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer version={ version } author={ author } />
    </div>
  )
}

export default AppChrome;
