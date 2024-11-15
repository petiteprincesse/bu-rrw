import React from 'react';
import './app.less'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './main/Main';
import Card from "./card/Card";

const App = () => {
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <Routes className="container">
        <Route exact path="/" element={<Main />} />
        <Route path="/card/:username/:reponame" element={<Card />} />
        <Route path="/error" element={Error} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;