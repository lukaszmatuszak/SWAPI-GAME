import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import HomeView from './HomeView/HomeView';

const Views: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/" exact>
                <HomeView />
            </Route>
        </Switch>
    </Layout>
);

export default Views;
