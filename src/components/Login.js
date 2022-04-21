import './Login.css';
import { Link } from 'react-router-dom';
import {url} from '../modules/url';
import axios from 'axios';

function Login() {
    const kakaoLoginEvent = async () => {

    }
    const naverLoginEvent = async () => {

    }
    return (
        <div className="wrap">
            <figure className="figure">
                <div className="image-container">
                    <div className="image-box">
                        <img src="images/family2.svg" className="family-img"/>
                    </div>
                </div>
            </figure>
            <Link to={{
            pathname: `/home`
            }}>
            <button>홈 페이지로 이동</button>
            </Link>
            <section className="login-container">
                <div className="login-box">
                    <div className="text-container">
                        <h1 className="text text-hi">반갑습니다</h1>
                    </div>
                    <div className="naver-box">
                        <div className="naver-icon-box">
                            <a href="#">
                                <img src="images/naver_login_icon.svg" className="naver-icon" onClick={naverLoginEvent}/>
                            </a>
                        </div>
                    </div>
                    <div className="kakao-box">
                        <div className="kakao-icon-box">
                            <a href={`${url}/auth/kakao`}>
                            <img src="images//kakao_login_icon.svg" className="kakao-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
