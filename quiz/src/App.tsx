import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <Router>
            {/*<nav>*/}
            {/*    <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>*/}
            {/*</nav>*/}
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/about" element={<About />} />*/}
            </Routes>
        </Router>
    );
};

export default App;
