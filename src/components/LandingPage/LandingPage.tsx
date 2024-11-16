import Card from "./components/Card";

import "./LandingPage.scss";

const LandingPage = () => {
  const newsSummary = <p>News summary...</p>;
  const weatherSummary = <p>Weather summary...</p>;
  const stocksSummary = <p>Stocks summary...</p>;

  return (
    <div className="landing-page">
      <h1>Landing Page</h1>
      <div className="card-row">
        <Card title="News" moreLink="news">{ newsSummary }</Card>
        <Card title="Weather">{ weatherSummary }</Card>
        <Card title="Stocks">{ stocksSummary }</Card>
      </div>
    </div>
  )
}

export default LandingPage;
