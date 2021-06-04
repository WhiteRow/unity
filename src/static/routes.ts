import React from 'react';

const Home = React.lazy(() => import('@pages/Home'));

export const routes = {
  home: {
    path: '/',
    Component: Home,
  },
};
