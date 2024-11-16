import { Route, Routes } from "react-router-dom";
import AppChrome from "./components/AppChrome/AppChrome";
import LandingPage from "./components/LandingPage/LandingPage";
import NewsPage from "./components/NewsPage/NewsPage";
import WeatherPage from "./components/WeatherPage/WeatherPage";
import StocksPage from "./components/StocksPage/StocksPage";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route element={<AppChrome />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/stocks" element={<StocksPage />} />
      </Route>
    </Routes>
  );
}

export default App;
