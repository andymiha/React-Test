import React from 'react';
import ReactDOM from 'react-dom/client';

//I'm building a new app, so I'm using the new createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));

//I'm rendering a simple h1 element from the root element
root.render(
  <h1>Hello, world!</h1>
);