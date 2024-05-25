
import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './App1';
import{Auth0Provider} from '@auth0/auth0-react'
// import Review from './Review';
// import Research from './Research';
// import {  BrowserRouter, Route, Routes } from "react-router-dom";
// import Connect from './Link';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Auth0Provider
    domain="dev-kjxs3z31joqtjw6e.us.auth0.com"
    clientId="HHcI9KBPoTA51cwIeXoiXOy7Gz1cYBJ7"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App1 />
  </Auth0Provider>
    // <>
    // <App1 />        
    // </>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

