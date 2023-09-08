import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro/Intro';
import PhoneNumber from './pages/Login/PhoneNumber/PhoneNumber';
import Password from './pages/Login/Password/Password';
import Join from './pages/Login/Join/Join';
import Main from './pages/Main/Main';
import Navbar from './components/Navbar/Navbar';
import MyPage from './pages/MyPage/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<PhoneNumber />} />
        <Route path="/password" element={<Password />} />
        <Route path="/join" element={<Join />} />
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
