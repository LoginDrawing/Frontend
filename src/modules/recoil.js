import { atom } from "recoil";


export const Kakao = atom({
  key: 'authCode',
  default: ''
});

export const UserName = atom({
  key: 'UserName',
  default: '',
});

export const UserPhoto = atom({
  key: 'UserPhoto',
  default: '',
});

export const UserMail = atom({
  key: 'UserMail',
  default: '',
});
