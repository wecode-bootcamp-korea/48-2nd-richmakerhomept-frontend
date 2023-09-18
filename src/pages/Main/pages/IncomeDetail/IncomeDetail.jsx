import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack, BiPlus } from 'react-icons/bi';
import { GrFormDown } from 'react-icons/gr';
import './IncomeDetail.scss';

/** 받아오는 데이터가 이중array가 아닐 경우엔  주석처리된 함수 사용해야 함. */
// const transformData = data => {
//   const resultMap = new Map();

//   data.forEach(item => {
//     const { transactionDay, transactionNote, amount, imageUrl, financeNumber } =
//       item;

//     const breakdownItem = { transactionNote, amount, imageUrl, financeNumber };

//     if (resultMap.has(transactionDay)) {
//       resultMap.get(transactionDay).breakDown.push(breakdownItem);
//     } else {
//       resultMap.set(transactionDay, {
//         transactionDay,
//         breakDown: [breakdownItem],
//       });
//     }
//   });

//   return Array.from(resultMap.values());
// };

// const newData = [
//   {
//     transactionDay: '1',
//     transactionNote: '이디야',
//     amount: '12,000',
//     imageUrl:
//       'https://dagh2xqzh7jgv.cloudfront.net/category/subScription_2.png',
//     financeNumber: '003-3883-8989-22',
//   },
//   {
//     transactionDay: '1',
//     transactionNote: '스타벅스',
//     amount: '17,000',
//     imageUrl:
//       'https://dagh2xqzh7jgv.cloudfront.net/category/subScription_2.png',
//     financeNumber: '003-3883-8989-22',
//   },
//   {
//     transactionDay: '2',
//     transactionNote: '홈플러스',
//     amount: '12,000',
//     imageUrl:
//       'https://dagh2xqzh7jgv.cloudfront.net/category/subScription_2.png',
//     financeNumber: '003-3883-8989-22',
//   },
//   {
//     transactionDay: '3',
//     transactionNote: 'gs24',
//     amount: '33,000',
//     imageUrl:
//       'https://dagh2xqzh7jgv.cloudfront.net/category/subScription_2.png',
//     financeNumber: '003-3883-8989-22',
//   },
//   {
//     transactionDay: '3',
//     transactionNote: '위코드',
//     amount: '120,000',
//     imageUrl:
//       'https://dagh2xqzh7jgv.cloudfront.net/category/subScription_2.png',
//     financeNumber: '003-3883-8989-22',
//   },
//   {
//     transactionDay: '3',
//     transactionNote: '위워크',
//     amount: '127,000',
//     imageUrl:
//       'https://dagh2xqzh7jgv.cloudfront.net/category/subScription_2.png',
//     financeNumber: '003-3883-8989-22',
//   },
// ];

// console.log(transformData(newData));
/*여기까지*/

const baseUrl = process.env.REACT_APP_BASE_URL;
const accessToken = localStorage.getItem('accessToken');

const IncomeDetail = () => {
  const navigate = useNavigate();

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [incomes, setIncomes] = useState();

  useEffect(() => {
    fetch(`${baseUrl}/transactions/deposits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `${accessToken}`,
      },
      body: JSON.stringify({
        monthValue: currentMonth,
      }),
    })
      .then(res => res.json())
      .then(data => setIncomes(data.data));
  }, []);

  return (
    <div className="incomeDetail">
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

      <main className="detailMainContents">
        <section className="totalAmountSection">
          <p className="sectionTitle">총 수입</p>
          <h3 className="totalAmount">3,814,718 원</h3>
        </section>
        <section className="breakdownSection">
          <p className="breakdownSummary">
            총 <span className="summaryNumber">3</span> 건
          </p>
          {/* 아래 카드들은 컴포넌트로 분리 후 날짜별.map 안에 카드들.map 돌릴 수 있을 듯 */}
          <div className="cardsByDate">
            <div className="cardByDate">
              <div className="dateAndTotalAmount">
                <div className="cardDate">9일</div>
                <div className="cardTotalAmount">3,220,000원</div>
              </div>
              <div className="breakdownCards">
                <div className="breakdownCard">
                  <div className="cardLeft">
                    <img
                      className="bankImg"
                      src="https://wp-blog.toss.im/wp-content/uploads/2022/09/logo-toss-blue-1024x576.png"
                      alt="토스뱅크"
                    />
                    <div className="breakdownInfo">
                      <p className="infoTitle">이인재</p>
                      <h4 className="infoAmount">220,000원</h4>
                    </div>
                  </div>
                  <div className="cardRight">토스뱅크 계좌</div>
                </div>
                <div className="breakdownCard">
                  <div className="cardLeft">
                    <img
                      className="bankImg"
                      src="https://wp-blog.toss.im/wp-content/uploads/2022/09/logo-toss-blue-1024x576.png"
                      alt="토스뱅크"
                    />
                    <div className="breakdownInfo">
                      <p className="infoTitle">(주)그레이스풀레인</p>
                      <h4 className="infoAmount">3,000,000원</h4>
                    </div>
                  </div>
                  <div className="cardRight">토스뱅크 계좌</div>
                </div>
              </div>
            </div>

            <div className="cardByDate">
              <div className="dateAndTotalAmount">
                <div className="cardDate">1일</div>
                <div className="cardTotalAmount">814,718원</div>
              </div>
              <div className="breakdownCards">
                <div className="breakdownCard">
                  <div className="cardLeft">
                    <img
                      className="bankImg"
                      src="https://wp-blog.toss.im/wp-content/uploads/2022/09/logo-toss-blue-1024x576.png"
                      alt="토스뱅크"
                    />
                    <div className="breakdownInfo">
                      <p className="infoTitle">김만규</p>
                      <h4 className="infoAmount">314,718원</h4>
                    </div>
                  </div>
                  <div className="cardRight">토스뱅크 계좌</div>
                </div>
                <div className="breakdownCard">
                  <div className="cardLeft">
                    <img
                      className="bankImg"
                      src="https://wp-blog.toss.im/wp-content/uploads/2022/09/logo-toss-blue-1024x576.png"
                      alt="토스뱅크"
                    />
                    <div className="breakdownInfo">
                      <p className="infoTitle">김민재</p>
                      <h4 className="infoAmount">300,000원</h4>
                    </div>
                  </div>
                  <div className="cardRight">토스뱅크 계좌</div>
                </div>
                <div className="breakdownCard">
                  <div className="cardLeft">
                    <img
                      className="bankImg"
                      src="https://wp-blog.toss.im/wp-content/uploads/2022/09/logo-toss-blue-1024x576.png"
                      alt="토스뱅크"
                    />
                    <div className="breakdownInfo">
                      <p className="infoTitle">최지준</p>
                      <h4 className="infoAmount">200,000원</h4>
                    </div>
                  </div>
                  <div className="cardRight">토스뱅크 계좌</div>
                </div>
              </div>
            </div>
          </div>
          {/* 여기까지 */}
        </section>
      </main>
    </div>
  );
};

export default IncomeDetail;
