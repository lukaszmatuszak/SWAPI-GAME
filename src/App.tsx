import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Views from './views/Views';

function App() {
    return (
        <Router>
            <Views />
        </Router>
    );
}

export default App;
