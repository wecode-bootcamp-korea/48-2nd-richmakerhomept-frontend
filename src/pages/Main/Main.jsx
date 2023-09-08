import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BiCalendar,
  BiSolidUserCircle,
  BiBell,
  BiBarChartAlt,
} from 'react-icons/bi';
import './Main.scss';

const userName = '박동철'; /*localStorage.getItem('userName');*/

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <header className="mainTopBar">
        <div className="userProfile">
          <BiSolidUserCircle className="userProfileImage" />
          {userName}님
        </div>
        <BiBell className="bell" />
      </header>

      <main className="mainContents">
        <div className=" monthDiv">
          <h1 className="monthTitle">9월</h1>
          <BiCalendar className="calendarIcon" />
        </div>

        <div className="reportDiv">
          <h3 className="reportTitle">리포트</h3>
          <p className="reportMessage">
            예산을 설정해보세요
            <span>
              <BiBarChartAlt className="chartIcon" />
            </span>
          </p>
        </div>

        <div className="transactionDiv">
          <div
            className="transactionBox income"
            onClick={() => {
              navigate('/main/income');
            }}
          >
            <h2 className="transactionCategory">총 수입</h2>
            <h3 className="transactionAmount">3,814,718 원</h3>
          </div>
          <div
            className="transactionBox spending"
            onClick={() => {
              navigate('/main/spending');
            }}
          >
            <h2 className="transactionCategory">총 지출</h2>
            <h3 className="transactionAmount">889,920 원</h3>
          </div>
        </div>

        {/* 나중에 데이터 통신 성공 시 아래 항목들 ?.map돌릴 것 */}
        <div className="mySpendings">
          <h3 className="myTitle">정기지출</h3>
          <ul className="myList">
            <li className="listItem">
              <span className="listTitle">지출 예정</span>
              <span className="amount">712,356 원</span>
            </li>
            <li className="listItem">
              <span className="listTitle">지출 완료</span>
              <span className="amount">78,231 원</span>
            </li>
          </ul>
        </div>
        <div className="mySpendings">
          <h3 className="myTitle">변동지출</h3>
          <ul className="myList">
            <li className="listItem">
              <span className="listTitle">지출예산</span>
              <span className="amount">1,000,000 원</span>
            </li>
            <li className="listItem">
              <span className="listTitle">지출</span>
              <span className="amount">322,220 원</span>
            </li>
          </ul>
        </div>
        <div className="mySpendings">
          <h3 className="myTitle">할부지출</h3>
          <ul className="myList">
            <li className="listItem">
              <span className="listTitle">지출 예정</span>
              <span className="amount">0 원</span>
            </li>
            <li className="listItem">
              <span className="listTitle">지출 완료</span>
              <span className="amount">0 원</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Main;
