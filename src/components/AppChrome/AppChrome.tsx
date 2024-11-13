import { type FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAppConfig from "../../hooks/useAppConfig";

import "./AppChrome.scss";

const AppChrome = () => {
  const { version, author } = useAppConfig();

  return (
    <div>
      <Header version={ version } />
      <Outlet />
      <Footer version={ version } author={ author } />
    </div>
  )
}

const Header: FC<{ version: string }> = ({ version }) => {
  return (
    <header>
      <ul className="flex-row no-bullet">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/weather">Weather</NavLink></li>
        <li><NavLink to="/stocks">Stocks</NavLink></li>
      </ul>
      <h1>{ version }</h1>
    </header>
  )

}

const Footer: FC<{ version: string, author: string }> = ({ version, author }) => {
  return (
    <footer>
      <ul className="flex-row no-bullet small-text faded-text">
        <li>Copyright &copy; {(new Date).getFullYear()} { author }</li>
        <li>Version: { version }</li>
      </ul>
    </footer>
  )

}

export default AppChrome;
