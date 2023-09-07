import {
  LiaHomeSolid,
  LiaCoinsSolid,
  LiaUserFriendsSolid,
  LiaEllipsisHSolid,
} from 'react-icons/lia';

/** Email pattern for validation */
export const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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
    path: '/main',
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
