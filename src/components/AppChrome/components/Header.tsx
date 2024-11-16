import { type FC } from "react";
import { NavLink } from "react-router-dom";

const Header: FC<{ version: string }> = ({ version }) => {
  return (
    <header className="page-header">
      <div className="page-header__masthead">
        <span className="page-header__masthead__app-name">Quick Dash</span>
        <span className="page-header__masthead__app-version">version { version }</span>
      </div>
      <nav className="page-header__main-nav">
        <ul className="flex-row no-bullet">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>
          <li><NavLink to="/weather">Weather</NavLink></li>
          <li><NavLink to="/stocks">Stocks</NavLink></li>
        </ul>
      </nav>
    </header>
  )

}

export default Header;
