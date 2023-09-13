import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro/Intro';
import PhoneNumber from './pages/AuthPages/PhoneNumber/PhoneNumber';
import Password from './pages/AuthPages/Password/Password';
import Join from './pages/AuthPages/Join/Join';
import AssetConnection from './pages/AssetConnection/AssetConnection';
import Main from './pages/Main/Main';
import Navbar from './components/Navbar/Navbar';
import MyPage from './pages/MyPage/MyPage';
import AddUser from './pages/AddUser/AddUser';
import GroupManagement from './pages/GroupManagement/GroupManagement';
import MyReport from './pages/Main/pages/MyReport/MyReport';
import IncomeDetail from './pages/Main/pages/IncomeDetail/IncomeDetail';
import SpendingDetail from './pages/Main/pages/SpendingDetail/SpendingDetail';
import FloatingSpending from './pages/Main/pages/KindOfSpending/FloatingSpending/FloatingSpending';
import GroupUserList from './pages/GroupManagement/pages/GroupUserList/GroupUserList';
import GroupAccountList from './pages/GroupManagement/pages/GroupAccountList/GroupAccountList';
import GroupCardList from './pages/GroupManagement/pages/GroupCardList/GroupCardList';
import AddAccount from './pages/GroupManagement/pages/AddAccount/AddAccount';
import GroupTotalPriceDetail from './pages/GroupManagement/pages/GroupTotalPriceDetail/GroupTotalPriceDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<PhoneNumber />} />
        <Route path="/password" element={<Password />} />
        <Route path="/join" element={<Join />} />
        <Route path="/asset-connection" element={<AssetConnection />} />
        <Route
          path="/main"
          element={
            <>
              <Main />
              <Navbar />
            </>
          }
        />
        <Route
          path="/main/my-report"
          element={
            <>
              <MyReport />
              <Navbar />
            </>
          }
        />
        <Route
          path="/main/income"
          element={
            <>
              <IncomeDetail />
              <Navbar />
            </>
          }
        />
        <Route
          path="/main/spending"
          element={
            <>
              <SpendingDetail />
              <Navbar />
            </>
          }
        />
        <Route
          path="/main/floating-spending"
          element={
            <>
              <FloatingSpending />
              <Navbar />
            </>
          }
        />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route
          path="/group"
          element={
            <>
              <GroupManagement />
              <Navbar />
            </>
          }
        />
        <Route path="/group/group-user" element={<GroupUserList />} />
        <Route path="/group/account" element={<GroupAccountList />} />
        <Route path="/group/card" element={<GroupCardList />} />
        <Route path="/group/add-account" element={<AddAccount />} />
        <Route path="/group/use" element={<GroupTotalPriceDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
