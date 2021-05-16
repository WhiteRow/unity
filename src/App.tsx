import React, { Suspense } from 'react';

const Home = React.lazy(() => import('@pages/Home'))

const App = () => {
  return (
    <React.StrictMode>
      <Suspense fallback={<div>Загрузка...</div>}> 
        <div className="wrapper">
          {/* sidebar here */}
          <Home />
        </div>
      </Suspense>
    </React.StrictMode>
  );
};

export default App;
