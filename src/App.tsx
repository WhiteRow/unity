import React from 'react';
import RouterView from '@components/RouterView';

const App = () => {
  return (
    <React.StrictMode>
        <div className="wrapper">
          {/* sidebar here */}
          <RouterView />
        </div>
    </React.StrictMode>
  );
};

export default App;
