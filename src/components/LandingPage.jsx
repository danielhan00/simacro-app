import React from 'react';
import { useNavigate } from "react-router-dom";

// Landing Page component
// 
// Three main components of the main component:
//      - Title/Description
//      - Login
//      - Start Button

const LandingPage = () => {
    const history= useNavigate();

    // handles a Start click event and takes the user to the Create page.
    const handleStart = () => {
        // Uses React Router's useHistory to navigate to the /create page
        history('/create');
    };
    const handleLogin = () => {
        // Add logic for what happens when the start button is clicked! 
        alert('You clicked the Login button!');
    };

    return (
        <div className="landing-page">
        <header className="header">
            <h1>Interactive 3D Model Viewer</h1>
            <p>Welcome to Daniel's Interactive 3D Model Viewer for Simacro.</p>
            <button onClick={handleStart}>Start as Guest</button>
            <br />
            <button onClick={handleLogin}>Login</button>
        </header>
        </div>
    );
};

export default LandingPage;