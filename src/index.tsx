import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './Notes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') || document.body);

fetch(`http://localhost:8080/hey`)
.then(res => console.log(res.json()))
.then((res: any) => {
    // res is now an Actor
});


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
