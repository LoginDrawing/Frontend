// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrap">
        <figure className="figure">
            <div className="image-container">
                 <div className="image-box">
                     <img src="images/family2.svg" className="family-img"/>
                </div>
            </div>
        </figure>
        <section className="login-container">
            <div className="login-box">
                <div className="text-container">
                    <h1 className="text text-hi">반갑습니다</h1>
                </div>
                <div className="naver-box">
                    <div className="naver-icon-box">
                        <a href="#">
                            <img src="images/naver_login_icon.svg" className="naver-icon"/>
                        </a>
                    </div>
                </div>
                <div className="kakao-box">
                    <div className="kakao-icon-box">
                        <a href="#">
                           <img src="images//kakao_login_icon.svg" className="kakao-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
