import React from 'react';
import ReactDOM from 'react-dom/client'; 
import ApolloWrapper from './apolloClient';
import App from './App';
import './index.css'

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <ApolloWrapper>
            <App />
        </ApolloWrapper>
    </React.StrictMode>
);
