import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseContextExmaple from './components/UseContextExmaple';
import UseRefHookExample from './components/UseRefHookExample';
import UseReducerExample from './components/UseReducerExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseContextExmaple/> */}
    {/* <UseRefHookExample /> */}
    <UseReducerExample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
