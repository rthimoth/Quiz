import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lobby from './components/Lobby/Lobby';
import Join from './pages/Join';
import Game from './pages/Game';
// import { WebSocketProvider } from './context/WebSocketContext';
// import Result from './pages/Result';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lobby" element={<Lobby />} />
                <Route path="/join" element={<Join />} />
                <Route path="/game" element={<Game />} />
                {/*<Route path="/result" element={<Result />} />*/}
            </Routes>
        </Router>
    );
};

export default App;

