import React from "react";
import { useRecoilValue } from "recoil";
import { UserName, UserMail, UserPhoto } from "../modules/recoil";

const TestPage = () => {
  const name = useRecoilValue(UserName)
  const mail = useRecoilValue(UserMail)
  const photo = useRecoilValue(UserPhoto)
  return (
    <>
      {name}
      <br />
      {mail}
      <br />
      <img src={photo} />
    </>
  )
};

export default TestPage;
