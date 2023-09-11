import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack, BiPlus } from 'react-icons/bi';
import { GrFormDown, GrFormPrevious, GrFormNext } from 'react-icons/gr';
import './MyReport.scss';

const MyReport = () => {
  const navigate = useNavigate();

  const percentBar = Math.min(12, 105);

  return (
    <div className="myReport">
      <header className="detailHeader">
        <BiArrowBack
          className="headerIcon"
          onClick={() => {
            navigate(-1);
          }}
        />
        <div className="headerDate">
          2023년 9월 <GrFormDown />
        </div>
        <BiPlus className="headerIcon" />
      </header>

      <main className="reportMain">
        <section className="reportSummary">
          <div className="summaryMessageBox">
            <h1 className="summaryMessage">박동철님, 지난달보다</h1>
            <h1 className="summaryMessage">
              <span className="messageHighlight">654,488원 덜 지출</span>
              했습니다.
            </h1>
          </div>
          <div className="comparison">
            <div className="percentBar" style={{ width: `${percentBar}%` }}>
              {percentBar}%
            </div>
          </div>
          <div className="lastMonthSpending">
            <h3>지난달 지출</h3>
            <h3>743,948원</h3>
          </div>
        </section>

        <section className="spendingReport">
          <div className="totalSpending">
            <h4 className="totalSpendingTitle">지출</h4>
            <h4 className="totalSpendingAmount">89,460원</h4>
          </div>
          <div className="kindOfSpending">
            <p className="titleByKind">정기지출</p>
            <h5 className="amountByKind">0원</h5>
          </div>
          <div className="kindOfSpending">
            <p className="titleByKind">할부지출</p>
            <h5 className="amountByKind">0원</h5>
          </div>
          <div className="kindOfSpending">
            <p className="titleByKind">변동지출</p>
            <h5 className="amountByKind">89,460원</h5>
          </div>
          <button className="budgetingButton">지출 예산 설정하기</button>
        </section>

        <section className="spendingTrends">
          <div className="spendingTitle">
            <h4>지출추이</h4>
            <p>(단위:만원)</p>
          </div>
          <div className="spendingGraph">그래프 들어갈 곳.</div>
          <div className="rangeOfDate">
            <GrFormPrevious className="rangeOfDateButton" />
            2023년 5월 - 9월
            <GrFormNext className="rangeOfDateButton" />
          </div>
        </section>

        <section className="incomeReport">
          <div className="incomeInfo">
            <h3>수입</h3>
            <h3>14,718원</h3>
          </div>
          <div className="incomeInfo">
            <h3>수입-지출</h3>
            <h3>-74,742원</h3>
          </div>
        </section>

        <section className="incomeGraph">
          <div className="incomeGraphSummary">
            <h1 className="summaryMessage">5월 부터 9월 까지</h1>
            <h1 className="summaryMessage">
              <span className="messageHighlight">남은 돈은 -31만원</span>
              입니다.
            </h1>
          </div>
          <div className="spendingGraph">그래프 들어갈 곳.</div>
          <div className="rangeOfDate">
            <GrFormPrevious className="rangeOfDateButton" />
            2023년 5월 - 9월
            <GrFormNext className="rangeOfDateButton" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyReport;
