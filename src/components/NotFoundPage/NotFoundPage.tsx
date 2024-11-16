const NotFoundPage = () => {
  const handleNavigateBack = () => {
    window.history.back();
  };

  return (
    <div className="landing-page">
      <h1>404 Not Found</h1>
      <p>The page you requested could not be found</p>
      <button onClick={handleNavigateBack}>Return</button>
    </div>
  )
}

export default NotFoundPage;