import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserName, UserMail, UserPhoto } from '../../modules/recoil';
import { url } from "../../modules/url";

function Kakao() {
  let code = new URL(window.location.href).searchParams.get("code");
  let navigate = useNavigate();
  const setName = useSetRecoilState(UserName);
  const setMail = useSetRecoilState(UserMail);
  const setPhoto = useSetRecoilState(UserPhoto);

  const getKakaoToken = async () => {
    try {
      await axios.get(
        `${url}/auth/kakao/callback?code=${code}`
      ).then((res) => {
        setName(res.data.nickname)
        setMail(res.data.email)
        setPhoto(res.data.image)
      })

      navigate("/home") //로그인 성공 홈화면 진입
    } catch (err) {
      navigate("/") //로그인 실패 로그인 화면으로 돌아가기
    }
  }

  useEffect(() => {
    getKakaoToken()
  }, []);



  return (
    <div>
    </div>
  )
}
export default Kakao;
