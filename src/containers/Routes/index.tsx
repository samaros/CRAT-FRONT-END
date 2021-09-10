import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { routes } from 'appConstants';
import { Main } from 'pages';
import styles from './styles.module.scss';

const Routes = () => (
  <>
    <main className={styles.content}>
      <Switch>
        <Route path={routes.main.root} component={Main} />
        <Redirect to={{ pathname: routes.main.root }} />
      </Switch>
    </main>
  </>
);

export default Routes;
