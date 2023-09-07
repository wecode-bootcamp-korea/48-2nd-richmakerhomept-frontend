import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Navbar from './components/Navbar/Navbar';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/main"
          element={
            <>
              <Main />
              <Navbar />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
