import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineCaretDown } from 'react-icons/ai';
import {
  BiCalendar,
  BiSolidUserCircle,
  BiBell,
  BiBarChartAlt,
  BiRefresh,
} from 'react-icons/bi';
import useFinancialData from '../../hooks/api/mainPageUser/useFinancialData';
import CalendarModal from '../../components/CalendarModal/CalendarModal';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();

  const userName = localStorage.getItem('userName');
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [financialData, setFinancialData] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('phoneNumber');
    localStorage.removeItem('profileImage');
    navigate('/login');
  };

  const handleOpenCalendar = () => {
    setIsOpenCalendar(true);
  };
  const handleCloseCalendar = () => {
    setIsOpenCalendar(false);
  };
  const handleDateSelect = date => {
    const selectedMonth = parseInt(date.split('년')[1].trim(), 10);
    setMonth(selectedMonth);
    handleCloseCalendar();
  };

  const { data, error, refetch } = useFinancialData(month);

  useEffect(() => {
    if (data) {
      setFinancialData(data);
    }
    if (error) {
      console.error(`ERROR : ${error.message}`);
    }
  }, [data, error]);

  const handleDataUpdate = () => {
    refetch();
  };

  // TODO : 조건문을 data에 등록된 유저계좌가 1개도 없을 때로 바꿔야 함.
  // if (!data) {
  //   return (
  //     <div className="main">
  //       <header className="mainTopBar">
  //         <div className="userProfile">
  //           <BiSolidUserCircle
  //             className="userProfileImage"
  //             onClick={() => {
  //               navigate('/my-page');
  //             }}
  //           />
  //           {userName}님{' '}
  //           <span className="logoutButton" onClick={handleLogout}>
  //             로그아웃
  //           </span>
  //         </div>
  //         <BiBell className="bell" />
  //       </header>
  //       <main className="mainContents noData">
  //         <div className="recommendationMessage">
  //           <h3>계좌/카드 연결하고</h3>
  //           <h3>자산관리 시작하기</h3>
  //         </div>
  //         <AiOutlineCaretDown className="arrowDown" />
  //         <div
  //           className="assetConnection"
  //           onClick={() => {
  //             navigate('/asset-connection');
  //           }}
  //         >
  //           <p className="buttonTitle">계좌 · 카드 내역 불러오기</p>
  //           <AiOutlinePlus />
  //         </div>
  //       </main>
  //     </div>
  //   );
  // }
  return (
    <div className="main">
      <header className="mainTopBar">
        <div className="userProfile">
          <BiSolidUserCircle
            className="userProfileImage"
            onClick={() => {
              navigate('/my-page');
            }}
          />
          {userName}님
          <span className="logoutButton" onClick={handleLogout}>
            로그아웃
          </span>
        </div>
        <BiBell className="bell" />
      </header>

      <main className="mainContents">
        <div className=" monthDiv">
          <div className="monthDivLeft">
            <h1 className="monthTitle">{month}월</h1>
            <BiCalendar className="calendarIcon" onClick={handleOpenCalendar} />
          </div>
          <div className="dataUpdateButton" onClick={handleDataUpdate}>
            <p className="updatedAt" />
            <h5 className="updateTitle">업데이트</h5>
            <BiRefresh className="refreshIcon" />
          </div>
        </div>

        <div
          className="reportDiv"
          onClick={() => {
            navigate('/main/my-report');
          }}
        >
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

        {/* TODO : 나중에 데이터 통신 성공 시 아래 항목들 ?.map돌릴 것 */}
        <div
          className="mySpendings"
          onClick={() => {
            navigate('/main/regular-spending');
          }}
        >
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
        <div
          className="mySpendings"
          onClick={() => {
            navigate('/main/floating-spending');
          }}
        >
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
        <div
          className="mySpendings"
          onClick={() => {
            navigate('/main/installment-spending');
          }}
        >
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
        {/* 여기까지 */}
        <div className="donutChartDiv">
          <h3 className="chartTitle">카테고리별 지출</h3>
          <div className="donutChart">차트 들어갈 곳.</div>
          <div className="chartCategory">
            <p>이체</p>
            <p>600,000원</p>
          </div>
          <div className="chartCategory">
            <p>해외</p>
            <p>12,970원</p>
          </div>
          <div className="chartCategory">
            <p>기타</p>
            <p>121,870원</p>
          </div>
        </div>

        <div
          className="assetConnection"
          onClick={() => {
            navigate('/asset-connection');
          }}
        >
          <p className="buttonTitle">계좌 · 카드 내역 불러오기</p>
          <AiOutlinePlus />
        </div>
      </main>
      {isOpenCalendar && (
        <CalendarModal
          closeModal={handleCloseCalendar}
          onDateSelect={handleDateSelect}
        />
      )}
    </div>
  );
};

export default Main;
