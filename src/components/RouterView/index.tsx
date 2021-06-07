import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '@/static/routes';

interface IProps {
  path: string;
  Component: any; // TODO: заменить
}

const RouterView = () => {
  const routesList = Object.values(routes);

  return (
    <Switch>
      {routesList.map(({ path, Component }: IProps) => (
        <Route key={path} path={path}>
          <Suspense fallback={
            <div>Загрузка...</div>
          }>
            <Component />
          </Suspense>
        </Route>
      ))}
    </Switch>
  )
}

export default RouterView;
