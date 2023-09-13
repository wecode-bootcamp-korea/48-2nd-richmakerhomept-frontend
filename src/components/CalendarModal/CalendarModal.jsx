import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CALENDAR_MODAL_LIST } from '../../utils/constant';
import './CalendarModal.scss';

const CalendarModal = () => {
  return (
    <div className="calendarModalBackGround">
      <button className="xButton">
        <AiOutlineClose />
      </button>
      <ul className="calendarModal">
        {CALENDAR_MODAL_LIST.map((date, i) => (
          <li className="calendarModalItem" key={i}>
            {date.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarModal;
