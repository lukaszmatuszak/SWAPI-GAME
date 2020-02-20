import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './core/i18n/i18n';
import Views from './views/Views';

const App: React.FC = () => (
    <Router>
        <Views />
    </Router>
);

export default App;
