import { Route, Routes } from "react-router-dom";
import AppChrome from "./components/AppChrome/AppChrome";
import LandingPage from "./components/LandingPage/LandingPage";
import NewsPage from "./components/NewsPage/NewsPage";
import WeatherPage from "./components/WeatherPage/WeatherPage";
import StocksPage from "./components/StocksPage/StocksPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route element={<AppChrome />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/stocks" element={<StocksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
