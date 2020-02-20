import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import HomeView from './HomeView/HomeView';
import CharactersArenaView from './CharactersArenaView/CharactersArenaView';
import StarshipsArenaView from './StarshipsArenaView/StarshipsArenaView';

const Views: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/characters">
                <CharactersArenaView />
            </Route>
            <Route path="/starships">
                <StarshipsArenaView />
            </Route>
            <Route path="/" exact>
                <HomeView />
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    </Layout>
);

export default Views;
