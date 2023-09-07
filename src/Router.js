import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Navbar from './components/Navbar/Navbar';
import MyPage from './pages/MyPage/MyPage';

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
        <Route path="/my-page" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
