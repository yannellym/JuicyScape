import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
 <div>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <App />
  </BrowserRouter>
 </div>
     ,
  document.getElementById('root')
);

