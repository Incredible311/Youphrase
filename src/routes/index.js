import React, { Suspense, lazy, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeLayout from '../layout/homeLayout';

const loading = <div>Loading...</div>;

const routes = [
    {
        exact: true,
        path: '/',
        component: lazy(() => import('../views/landing/index')),
        layout: HomeLayout
    },

];

export function renderRoutes() {
    return (
        <Suspense fallback={loading}>
            <Switch>
                {routes.map((route, i) => {
                    const Component = route.component;
                    const Guard = route.gurad || Fragment;
                    const Layout = route.layout || Fragment
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            render={(props) => (
                                <Guard>
                                    <Layout>
                                        <Component {...props} />
                                    </Layout>
                                </Guard>
                            )}
                        />
                    );
                })}
            </Switch>
        </Suspense>
    );
}
