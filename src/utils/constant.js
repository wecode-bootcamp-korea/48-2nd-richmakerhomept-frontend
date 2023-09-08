import {
  LiaHomeSolid,
  LiaCoinsSolid,
  LiaUserFriendsSolid,
  LiaEllipsisHSolid,
} from 'react-icons/lia';
import { CiUser, CiLock } from 'react-icons/ci';

/** Phone number pattern for validation */
export const phoneNumberPattern = /^[0-9]{11}$/;

/** password pattern for validation */
export const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{10,}/;

/** korean pattern for validation */
export const koreanPattern = /^[가-힣]{2,}$/;

/** Input objects in "Array" for Join user info Inputs */
export const JOIN_USER_INPUTS = [
  {
    id: 'userName',
    icon: <CiUser className="inputIcon" />,
    type: 'text',
    placeholder: '이름',
  },
  {
    id: 'password',
    icon: <CiLock className="inputIcon" />,
    type: 'password',
    placeholder: '비밀번호',
  },
  {
    id: 'passwordCheck',
    icon: <CiLock className="inputIcon" />,
    type: 'password',
    placeholder: '비밀번호 확인',
  },
];

/** Buttons objects in "Array" for Navigation bar */
export const NAVIGATION_BUTTONS = [
  {
    name: '가계부',
    path: '/main',
    icon: <LiaHomeSolid className="navIcons" />,
  },
  {
    name: '자산',
    path: '/main',
    icon: <LiaCoinsSolid className="navIcons" />,
  },
  {
    name: '공동관리',
    path: '/group',
    icon: <LiaUserFriendsSolid className="navIcons" />,
  },
  {
    name: '더보기',
    path: '/main',
    icon: <LiaEllipsisHSolid className="navIcons" />,
  },
];

/** Calendar data for Calendar Modal */
export const CALENDAR_MODAL_LIST = [
  { title: '2023년 9월' },
  { title: '2023년 8월' },
  { title: '2023년 7월' },
  { title: '2023년 6월' },
  { title: '2023년 5월' },
  { title: '2023년 4월' },
  { title: '2023년 3월' },
  { title: '2023년 2월' },
  { title: '2023년 1월' },
  { title: '2022년 12월' },
  { title: '2022년 11월' },
  { title: '2022년 10월' },
  { title: '2022년 9월' },
  { title: '2022년 8월' },
  { title: '2022년 7월' },
  { title: '2022년 6월' },
  { title: '2022년 5월' },
  { title: '2022년 4월' },
  { title: '2022년 3월' },
  { title: '2022년 2월' },
  { title: '2022년 1월' },
];

/** FormData headers */
export const config = {
  headers: { 'Content-Type': 'multipart/form-data' },
};
