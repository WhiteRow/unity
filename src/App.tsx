import React from 'react';
import RouterView from '@components/RouterView';
import Sidebar from '@components/Sidebar/index';

const App = () => {
  return (
    <React.StrictMode>
        <div className="wrapper">
          <Sidebar />
          <RouterView />
        </div>
    </React.StrictMode>
  );
};

export default App;
