import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './App';
import CountDown from './CountDown';
import ShowBlogs from './Blogs';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('header'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

const blogs = ReactDOM.createRoot(document.getElementById('blogs'));
blogs.render(
  <React.StrictMode>
    <ShowBlogs />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
