import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack, BiPlus } from 'react-icons/bi';
import { GrFormDown, GrFormPrevious, GrFormNext } from 'react-icons/gr';
import CalendarModal from '../../../../components/CalendarModal/CalendarModal';
import { useGetMyReport } from '../../../../hooks/api/myreport/useGetMyReport';
import { formatDate } from '../../../../utils/constant';
import Chart from '../../components/Chart';
import './MyReport.scss';

const MyReport = () => {
  const navigate = useNavigate();
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(formatDate);
  const [monthData, setMonthData] = useState();

  const [expenseDataRange, setExpenseDataRange] = useState({
    start: 0,
    end: 4,
  });

  const [gapDataRange, setGapDataRange] = useState({
    start: 0,
    end: 4,
  });

  const { isLoading, data: myReportData } = useGetMyReport();

  console.log(myReportData);

  const isPrevExpenseButtonDisabled = expenseDataRange.start === 0;
  const isNextExpenseButtonDisabled =
    expenseDataRange.end >= monthData.length - 1;

  const isPrevGapButtonDisabled = gapDataRange.start === 0;
  const isNextGapButtonDisabled = gapDataRange.end >= monthData.length - 1;

  const percentBar = Math.min(12, 100);

  const handleOpenCalendar = () => {
    setIsOpenCalendar(true);
  };

  const handleCloseCalendar = () => {
    setIsOpenCalendar(false);
  };

  const handleExpenseArrowClick = direction => {
    if (direction === 'next' && !isNextExpenseButtonDisabled) {
      const newStart = expenseDataRange.start + 4;
      const newEnd = expenseDataRange.end + 4;
      setExpenseDataRange({ start: newStart, end: newEnd });
    } else if (direction === 'prev' && !isPrevExpenseButtonDisabled) {
      const newStart = expenseDataRange.start - 4;
      const newEnd = expenseDataRange.end - 4;
      setExpenseDataRange({ start: newStart, end: newEnd });
    }
  };

  const handleGapArrowClick = direction => {
    if (direction === 'next' && !isNextGapButtonDisabled) {
      const newStart = gapDataRange.start + 4;
      const newEnd = gapDataRange.end + 4;
      setGapDataRange({ start: newStart, end: newEnd });
    } else if (direction === 'prev' && !isPrevGapButtonDisabled) {
      const newStart = gapDataRange.start - 4;
      const newEnd = gapDataRange.end - 4;
      setGapDataRange({ start: newStart, end: newEnd });
    }
  };

  const currentExpenseVisibleData = monthData
    .slice(expenseDataRange.start, expenseDataRange.end + 1)
    .slice(0, 4);

  const currentGapVisibleData = monthData
    .slice(gapDataRange.start, gapDataRange.end + 1)
    .slice(0, 4);

  const expenseData = currentExpenseVisibleData.map(data => ({
    month: data.month,
    value: data.expense,
  }));

  const gapData = currentGapVisibleData.map(data => ({
    month: data.month,
    value: data.income - data.expense,
  }));

  return (
    <>
      <div className="myReport">
        <header className="detailHeader">
          <BiArrowBack
            className="headerIcon"
            onClick={() => {
              navigate(-1);
            }}
          />
          <div className="headerDate" onClick={handleOpenCalendar}>
            {selectedDate} <GrFormDown />
          </div>
          <BiPlus className="headerPlus" />
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
              <div className="percentBar" style={{ width: `${percentBar}%` }} />
              <p className="percentText">{percentBar}%</p>
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
            <div className="spendingGraph">
              <Chart monthData={expenseData} />
            </div>
            <div className="rangeOfDate">
              <GrFormPrevious
                className="rangeOfDateButton"
                onClick={() => handleExpenseArrowClick('prev')}
              />
              {`2023년 ${currentExpenseVisibleData[0]?.month} - ${
                currentExpenseVisibleData[currentExpenseVisibleData.length - 1]
                  ?.month
              }`}
              <GrFormNext
                className="rangeOfDateButton"
                onClick={() => handleExpenseArrowClick('next')}
              />
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
              <h1 className="summaryMessage">{`${
                currentGapVisibleData[0]?.month
              }부터 ${
                currentGapVisibleData[currentGapVisibleData.length - 1]?.month
              }까지`}</h1>
              <h1 className="summaryMessage">
                <span className="messageHighlight">남은 돈은 -31만원</span>
                입니다.
              </h1>
            </div>
            <div className="spendingGraph">
              <Chart monthData={gapData} />
            </div>
            <div className="rangeOfDate">
              <GrFormPrevious
                className="rangeOfDateButton"
                onClick={() => handleGapArrowClick('prev')}
              />
              {`2023년 ${currentGapVisibleData[0]?.month} - ${
                currentGapVisibleData[currentGapVisibleData.length - 1]?.month
              }`}
              <GrFormNext
                className="rangeOfDateButton"
                onClick={() => handleGapArrowClick('next')}
              />
            </div>
          </section>
        </main>
      </div>
      {isOpenCalendar && (
        <CalendarModal
          closeModal={handleCloseCalendar}
          onDateSelect={newDate => setSelectedDate(newDate)}
        />
      )}
    </>
  );
};

export default MyReport;
