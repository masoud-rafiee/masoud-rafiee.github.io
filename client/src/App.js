import React from 'react';
import HomePage from './components/HomePage';
import Sidebar from './components/Sidebar';
import './style.css';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <HomePage />
        </div>
    );
}

export default App;
