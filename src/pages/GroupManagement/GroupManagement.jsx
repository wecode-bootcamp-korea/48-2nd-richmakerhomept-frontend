import React from 'react';
import { GrFormAdd } from 'react-icons/gr';
import ContainerBox from './components/ContainerBox';
import './GroupManagement.scss';

// 계좌랑 카드의 수가 2개 이상이면 더보기 버튼이 보이도록!!

const GroupManagement = () => {
  return (
    <div className="groupContainer">
      <div className="groupContentContainer">
        <div className="header">
          <img
            className="pofileImage"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7Jm92YqMxbfwC4Aez6Yc85ZODI5uaHR3KxUZnUlRtKSjBju2M"
            alt="프로필"
          />
          <GrFormAdd size={30} className="addAccount" />
        </div>
        <div className="totalPrice">
          <div className="detailBox">
            <div className="detail">
              <h1 className="title">수입</h1>
              <span className="count">2건</span>
            </div>
            <p className="price">1원</p>
          </div>
          <div className="detailBox">
            <div className="detail">
              <h1 className="title">지출</h1>
              <span className="count">2건</span>
            </div>
            <p className="price">1원</p>
          </div>
        </div>
        <ContainerBox
          title="계좌"
          count="10건"
          firstAccountImage="https://dagh2xqzh7jgv.cloudfront.net/cardbanklogo/busanBank_PNG.png"
          firstAccountName="부산은행 계좌"
          secondAccountImage="https://dagh2xqzh7jgv.cloudfront.net/cardbanklogo/citiBank_PNG.png"
          secondAccountName="씨티은행 계좌"
        />
        <ContainerBox
          title="카드"
          count="3건"
          firstAccountImage="https://dagh2xqzh7jgv.cloudfront.net/cardbanklogo/busanBank_PNG.png"
          firstAccountName="부산은행 계좌"
          secondAccountImage="https://dagh2xqzh7jgv.cloudfront.net/cardbanklogo/citiBank_PNG.png"
          secondAccountName="씨티은행 계좌"
        />
        <div className="addUserBox">
          <h1 className="title">구성원 추가하기</h1>
          <GrFormAdd size={30} className="addUserButton" />
        </div>
      </div>
    </div>
  );
};

export default GroupManagement;
