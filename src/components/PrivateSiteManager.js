import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
import './PrivateSiteManager.css';
import Home from './tabmenu/Home/Home';
import Timeline from './tabmenu/Timeline/Timeline';
import Gallery from './tabmenu/Gallery/Gallery';
import Setting from './tabmenu/Setting';
import Quest from './tabmenu/Quest';
import logo from './style/image/logo.svg';

const menuList = {
  0 : <Home />,
  1 : <Timeline />,
  2 : <Gallery />,
  3 : <Quest />,
  4 : <Setting />
};

class PrivateSiteManager extends React.Component{
  constructor(props) {
    super();

    this.state = {
      menu: 0
    };
  }

  changeMenu = (menuIndex) =>{
    this.setState({menu : menuIndex});
  }

  render(){

    return(
        
      <div className="wrap">
          <div className="title">
            <div className="logo">
            <Link to={{pathname: `/home`}}>
                <img src={logo} width='45px' height='45px'/></Link>
                </div>
                <div className="login">
                    <button className="login2"></button>
                </div>
        </div>
        <div class="picture">  
        </div>
        <div class="imformation">
            <div class="people_image"></div>
            <div class="people_etc">
                <div class="people_name">아리</div>
                <div class="people_etcs">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0002 4.78802V1H12.2122" stroke="#868686" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.72576 14.4484C5.02677 16.7494 8.75797 16.7494 11.059 14.4484C11.607 13.9018 12.0415 13.2523 12.3376 12.5372C12.6338 11.8221 12.7857 11.0555 12.7846 10.2816C12.7846 8.77393 12.2097 7.26588 11.059 6.11516C8.75797 3.81415 5.02677 3.81415 2.72576 6.11516C0.424747 8.41617 0.424747 12.1474 2.72576 14.4484V14.4484Z" stroke="#868686" stroke-linejoin="round"/>
                        <path d="M10.9702 6.03008L15.1589 1.8418" stroke="#868686" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <div>성별</div>
                    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0006 7.50031C14.0006 12.1434 7.50031 16.4769 7.50031 16.4769C7.50031 16.4769 1 12.1434 1 7.50031C1 5.77632 1.68485 4.12294 2.9039 2.9039C4.12294 1.68485 5.77632 1 7.50031 1C9.2243 1 10.8777 1.68485 12.0967 2.9039C13.3158 4.12294 14.0006 5.77632 14.0006 7.50031V7.50031Z" stroke="#868686" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.49954 9.04802C8.3543 9.04802 9.04723 8.3551 9.04723 7.50033C9.04723 6.64556 8.3543 5.95264 7.49954 5.95264C6.64477 5.95264 5.95184 6.64556 5.95184 7.50033C5.95184 8.3551 6.64477 9.04802 7.49954 9.04802Z" fill="#868686" stroke="#868686" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <div>대한민국 서울특별시</div>
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.10087 1.53757L6.4672 1.19726L6.10205 1.53883L6.632 2.10537L6.99796 2.49659L7.36305 2.10456L7.88371 1.54547C7.8839 1.54527 7.88408 1.54508 7.88427 1.54488C8.19276 1.21595 8.55682 0.957318 8.95468 0.781945C9.35267 0.606514 9.7777 0.51736 10.2058 0.518557C10.6339 0.519753 11.0585 0.611281 11.4557 0.788958C11.853 0.966682 12.2161 1.22759 12.5231 1.55858L12.5249 1.56047C13.1476 2.22484 13.5042 3.13386 13.5065 4.08934C13.5089 5.04449 13.157 5.9553 12.5378 6.6232C12.5375 6.62343 12.5373 6.62367 12.5371 6.6239L7.07181 12.4756L7.07175 12.4757C7.05298 12.4958 7.0352 12.5 7.02458 12.5C7.01396 12.5 6.99618 12.4958 6.97741 12.4757L1.48304 6.5878L1.4822 6.5869C0.859131 5.92249 0.502341 5.01323 0.500011 4.05748C0.497683 3.10222 0.849673 2.19133 1.469 1.52342C2.09117 0.861186 2.9256 0.497602 3.78684 0.500012C4.64854 0.502423 5.48172 0.871074 6.10087 1.53757Z" stroke="#868686"/>
                        </svg>                        
                    <div>2005-2019</div>
                </div>
            </div>
            {
              this.state.menu===0
              ?<Peoplere></Peoplere>
              :null}
        </div>
        <div className="menu">
          <ul className="tabMenu">
            <li className={`${this.state.menu === 0? 'active': ''}`} onClick={() => {this.changeMenu(0)}}>홈</li>
            <li className={`${this.state.menu === 1? 'active': ''}`} onClick={() => {this.changeMenu(1)}}>타임라인</li>
            <li className={`${this.state.menu === 2? 'active': ''}`} onClick={() => {this.changeMenu(2)}}>갤러리</li>
            <li className={`${this.state.menu === 3? 'active': ''}`} onClick={() => {this.changeMenu(3)}}>요청</li>
            <li className={`${this.state.menu === 4? 'active': ''}`} onClick={() => {this.changeMenu(4)}}>설정</li>
          </ul>
        </div>
        <div className="content">
          {menuList[this.state.menu]}
        </div>
        <div class="last">
            <div>당신의 삶을 그리다</div>
        </div>
      </div>
    )
  }
}
function Peoplere(){
    return(
      <div class="people_re">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 14.25L8.04808 14.2353L17.4293 4.88227C17.7974 4.51168 18 4.01952 18 3.49599C18 2.97245 17.7974 2.48029 17.4293 2.1097L15.8846 0.554784C15.1482 -0.186399 13.8636 -0.182477 13.1331 0.551843L3.75 9.90683V14.25ZM14.5074 1.94107L16.055 3.49304L14.4996 5.04404L12.9549 3.4901L14.5074 1.94107ZM5.69792 10.7245L11.5709 4.86855L13.1156 6.42346L7.24359 12.2774L5.69792 12.2823V10.7245Z" fill="#3778B3"/>
                    <path d="M1.91667 18H15.3333C16.3904 18 17.25 17.1404 17.25 16.0833V7.7765L15.3333 9.69317V16.0833H4.94308C4.91817 16.0833 4.89229 16.0929 4.86738 16.0929C4.83575 16.0929 4.80412 16.0843 4.77154 16.0833H1.91667V2.66667H8.47837L10.395 0.75H1.91667C0.859625 0.75 0 1.60962 0 2.66667V16.0833C0 17.1404 0.859625 18 1.91667 18Z" fill="#3778B3"/>
                    </svg>
                <div>수정하기</div></div>
    )
}

export default PrivateSiteManager;