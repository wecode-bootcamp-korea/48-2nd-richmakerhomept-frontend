import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro/Intro';
import PhoneNumber from './pages/AuthPages/PhoneNumber/PhoneNumber';
import Password from './pages/AuthPages/Password/Password';
import Join from './pages/AuthPages/Join/Join';
import Main from './pages/Main/Main';
import Navbar from './components/Navbar/Navbar';
import MyPage from './pages/MyPage/MyPage';
import AddUser from './pages/AddUser/AddUser';
import GroupManagement from './pages/GroupManagement/GroupManagement';

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
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/group" element={<GroupManagement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
