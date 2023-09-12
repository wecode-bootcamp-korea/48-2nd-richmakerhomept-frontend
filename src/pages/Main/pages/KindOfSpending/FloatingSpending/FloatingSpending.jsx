import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack, BiPlus } from 'react-icons/bi';
import { GrFormDown } from 'react-icons/gr';
import { TEMPORARY_DATA } from '../../../../../utils/constant';
import './FloatingSpending.scss';

const FloatingSpending = () => {
  const navigate = useNavigate();

  const [dateClick, setDateClick] = useState(true);
  const [categoryClick, setCategoryClick] = useState(false);

  const handleDateClick = () => {
    setDateClick(true);
    setCategoryClick(false);
  };

  const handleCategoryClick = () => {
    setDateClick(false);
    setCategoryClick(true);
  };

  return (
    <div className="floatingSpending">
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

      <main className="mainContents">
        <section className="floatingSpendingSummary">
          <p className="title">총 변동지출</p>
          <h3 className="amount">
            <span>591,110</span>원
          </h3>
          <p className="scheduled">지출 예정 0원</p>
        </section>

        <section className="floatingSpendingBreakdownSection">
          <div className="categories">
            <button
              className={`categoryButton ${dateClick ? 'bold' : ''}`}
              onClick={handleDateClick}
            >
              일자
            </button>
            <button
              className={`categoryButton ${categoryClick ? 'bold' : ''}`}
              onClick={handleCategoryClick}
            >
              카테고리
            </button>
          </div>
          <div className="floatingSpendingBreakdown">
            {TEMPORARY_DATA.map(data => (
              <div className="breakdownByCategory">
                <div className="dateAndAmount">
                  <h4 className="date">{data.date}</h4>
                  <h4 className="amount">{data.totalAmount}</h4>
                </div>
                {data.breakdown.map(breakdown => (
                  <div className="breakdownCard">
                    <div className="cardLeft">
                      <img
                        className="bankImg"
                        src="https://wp-blog.toss.im/wp-content/uploads/2022/09/logo-toss-blue-1024x576.png"
                        alt={breakdown.category}
                      />
                      <div className="breakdownInfo">
                        <p className="infoTitle">{breakdown.title}</p>
                        <h4 className="infoAmount">{breakdown.amount}원</h4>
                      </div>
                    </div>
                    <div className="cardRight">{breakdown.info}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FloatingSpending;
