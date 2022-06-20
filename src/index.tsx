import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RouteNames } from './router/routeNames';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter basename={RouteNames.CONFIGURATOR}>
        <App />
    </BrowserRouter>
);

reportWebVitals();
