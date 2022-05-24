/* eslint-disable */
import './Homepage.css';
import React, { useState } from 'react';
import logo from './style/image/logo.svg';
import { Link } from 'react-router-dom';
import search from './style/image/search.png';
import family from './style/image/family.svg';
import pet from './style/image/pet.svg';
import arrow from './style/image/arrow.png';
import image3 from '../components/style/image/homepage_image3.png';
import image4 from '../components/style/image/homepage_image4.png';
import image5 from '../components/style/image/homepage_image5.png';
import image6 from '../components/style/image/homepage_image6.png';

function HomaPage() {
    let [number, setNumber] = useState(['0','1','2','3']);
    let [contentsiteA,setcontentsiteA] = useState(['코로나-19', '순직',
  '위안부','세월호']);  
    let [contentsiteB,setcontentsiteB] = useState([
      '세계적 질병 코로나 바이러스 감염증 19의 희생자를 추모해 보세요', 
      '다른 사람의 안전을 자신보다 우선시했던 많은 용감한 사람들을 깊은 존경의 마음으로 추모해 보세요',
      '폭력과 빈곤 등 참혹한 전쟁 피해 속에서 일본군에게 성행위를 강요당한 위안부 피해 여성들을 추모해 보세요',
      '2014.04.16 인천에서 제주로 향하던 여객선 세월호의 추모해 보세요']); 
  return (
    <div className="App">
      <div className='titlebar'>
        <div className="logo">
          <img src={logo} width='45px' height='45px'/></div>
          <Link to={{pathname: `/login`}}>        
          <div class="login">
            <button class="login2"></button></div>
            </Link>
      </div>
      <One />
      <Two />
      <Three />  
      <div className="four">
            <div className="box4">
                <div className="box4_1">슬픔나누기</div>
                <div className="box4_2">다른 사람들의 사이트를<p></p>방문해보세요.</div>
                <div className="box4_3">다른 사람들이 어떠한 방식으로 슬픔을<p></p>
                    이겨냈는지 확인해 보세요
                </div>
            </div>
            <div className="list4">
                <ul className="list4_1">
                    <PeopleSite />
                    <PeopleSite />
                    <PeopleSite />
                </ul>
            </div>
      </div>
      <Five />
      <div class="six">
            <div class="box6">
                <div class="box6_1">함께 기억해야 할 삶</div>
                <div class="box6_2">그리다의 갤러리관들을<p></p>소개합니다.</div>
            </div>
            <div class="list6">
                <div class="list6_1">
                    <ContentStie 큰제목={contentsiteA} 작은제목={contentsiteB} 숫자={number[0]} 이미지={image3}/>
                    <ContentStie 큰제목={contentsiteA} 작은제목={contentsiteB} 숫자={number[1]} 이미지={image4}/>
                    <ContentStie 큰제목={contentsiteA} 작은제목={contentsiteB} 숫자={number[2]} 이미지={image5}/>
                    <ContentStie 큰제목={contentsiteA} 작은제목={contentsiteB} 숫자={number[3]} 이미지={image6}/>
                </div>
            </div>
      </div>
      <BottomBar />
    </div>
  );
}
function One(){
    return(
        <div className="one">
            <div className="box">추모하고 싶은 사람을 찾아보세요</div>
            <div className="search"><form><span>
                <img class="search" src={search}/>
                <input type="search"  placeholder="고인 혹은 반려동물의 이름 혹은 공유 링크를 입력하세요 "/>
                </span></form>
            </div>
      </div>
    )
}
function Two(){
    return(
        <div className="two">
            <div className="images_1">
                <div className="image_family"><img src={family} alt="가족그림" width="211px" height="314px"/></div>
                <button className="create_site_1">고인을 위한 사이트 만들러가기
                    <img src={arrow}/></button>
            </div>
            <div className="images_2">
                <div className="image_pet"><img src={pet} alt="반려동물그림" width="262px" height="239px"/></div>
                <button className="create_site_2">반려동물을 위한 사이트 만들러가기
                    <img src={arrow}/></button>
            </div>
      </div>
    )
}
function Three(){
    return(
        <div className="three">
        <div className="image_imformation"></div>
        <div className="triangle_1">
            <div className="box3">
                <div className="box3_1">타임라인</div>
                <div className="box3_2">사랑하는 사람의 삶을<p></p> 한 눈에 그려보세요</div>
                <div className="box3_3">그리다를 통해 사랑하는 사람을 영원히 기억하세요<p></p>
                    사랑하는 사람의 모든 순간을 확인하세요
                </div>
            </div>
        </div>
  </div>
    )
}
function PeopleSite(){
    return(
        <li className="list4_2">
            <div className="up"></div>
            <div className="circle"></div>
            <div className="down">
                <div class="down_1">FOREVER MISSED</div>
                <div class="down_2">아리</div>
            </div>
        </li>
    )
}
function Five(){
    return(
        <div class="five">
        <div class="triangle_2">
            <div class="box5">
                <div class="box5_1">그리기</div>
                <div class="box5_2">잊지 말고<p></p>영원히 기억하세요.</div>
                <div class="box5_3">그리움을 담은 한 마디를 그려보세요<p></p>
                    추억이 담긴 기억들을 함께 공유하세요
                </div>
            </div>
        </div>
        <div class="image_imformation_2"></div>
  </div>
    )
}
function ContentStie(props){
    return(
        <div className="box6_3">
            <div className="content_image"><img src={props.이미지}/></div>
            <div className="right">
                <div className="box6_4">{props.큰제목[props.숫자]}</div>
                <div className="box6_5">{props.작은제목[props.숫자]}</div>
            </div>
        </div>
    )
}
function BottomBar(){
    return (
        <div className="bottombar">
        <div>당신의 삶을 그리다</div></div>
    )
}
export default HomaPage;
