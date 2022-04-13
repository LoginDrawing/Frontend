/* eslint-disable */
import './App.css';
import React, {useState} from 'react';
import logo from './style/image/logo.svg';
import search from './style/image/search.png';
import family from './style/image/family.svg';
import pet from './style/image/pet.svg';
import arrow from './style/image/arrow.png';

function App() {
  return (
    <div className="App">
      <div className='titlebar'>
        <div class="logo">
          <img src={logo} width='45px' height='45px'/></div>
        <div class="login">
          <button class="login2"></button></div>
      </div>
      
      <div class="one">       
            <div class="box">추모하고 싶은 사람을 찾아보세요
            </div>
            <div class="search">
                <form>
                    <span>
                      <img class="search" src={search}/>
                      <input type="search"  placeholder="고인 혹은 반려동물의 이름 혹은 공유 링크를 입력하세요 "/>
                    </span>
                </form>
            </div>    
      </div>   

      <div class="two">
            <div class="images_1">
                <div class="image_family"><img src={family} alt="가족그림" width="211px" height="314px"/></div>
                <button class="create_site_1">고인을 위한 사이트 만들러가기
                    <img src={arrow}/></button>
            </div>
            <div class="images_2">
                <div class="image_pet"><img src={pet} alt="반려동물그림" width="262px" height="239px"/></div>
                <button class="create_site_2">반려동물을 위한 사이트 만들러가기
                    <img src={arrow}/></button>
            </div>
      </div>

      <div class="three">
            <div class="image_imformation">
            </div>
            <div class="triangle_1">
                <div class="box3">
                    <div class="box3_1">타임라인</div>
                    <div class="box3_2">사랑하는 사람의 삶을<p></p> 한 눈에 그려보세요</div>
                    <div class="box3_3">그리다를 통해 사랑하는 사람을 영원히 기억하세요<p></p>
                        사랑하는 사람의 모든 순간을 확인하세요
                    </div>
                </div>
            </div>
      </div>

      <div class="four">
            <div class="box4">
                <div class="box4_1">슬픔나누기</div>
                <div class="box4_2">다른 사람들의 사이트를<p></p>방문해보세요.</div>
                <div class="box4_3">다른 사람들이 어떠한 방식으로 슬픔을<p></p>
                    이겨냈는지 확인해 보세요
                </div>
            </div>
            <div class="list4">
                <ul class="list4_1">
                    <li class="list4_2">
                        <div class="up"></div>
                        <div class="circle"></div>
                        <div class="down">
                            <div class="down_1">FOREVER MISSED</div>
                            <div class="down_2">아리</div>
                        </div>
                    </li>
                    <li class="list4_2">
                        <div class="up"></div>
                        <div class="circle"></div>
                        <div class="down">
                            <div class="down_1">FOREVER MISSED</div>
                            <div class="down_2">아리</div>                        </div>
                    </li>
                    <li class="list4_2">
                        <div class="up"></div>
                        <div class="circle"></div>
                        <div class="down">
                            <div class="down_1">FOREVER MISSED</div>
                            <div class="down_2">아리</div>                        </div>
                    </li>
                </ul>
            </div>
      </div>

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
       
      <div class="six">
            <div class="box6">
                <div class="box6_1">함께 기억해야 할 삶</div>
                <div class="box6_2">그리다의 갤러리관들을<p></p>소개합니다.</div>
            </div> 
            <div class="list6">
                <div class="list6_1">
                    <div class="box6_3">
                        <div class="image_3"></div>
                        <div class="right">
                            <div class="box6_4">코로나-19</div>
                            <div class="box6_5">세계적 질병 코로나 바이러스 감염증 19의 희생자를<p></p>
                                추모해 보세요</div>                       
                        </div>
                    </div>
                    <div class="box6_3">
                        <div class="image_4"></div>
                        <div class="right">
                            <div class="box6_4">순직</div>
                            <div class="box6_5">다른 사람의 안전을 자신보다 우선시했던 많은 용감한<p></p>
                                사람들을 깊은 존경의 마음으로 추모해 보세요</div>                       
                        </div>
                    </div>
                    <div class="box6_3">
                        <div class="image_5"></div>
                        <div class="right">
                            <div class="box6_4">위안부</div>
                            <div class="box6_5">폭력과 빈곤 등 참혹한 전쟁 피해 속에서 일본군에게<p></p>
                                성행위를 강요당한 ‘위안부' 피해 여성들을 추모해 보세요</div>                       
                        </div>
                    </div>
                    <div class="box6_3">
                        <div class="image_6"></div>
                        <div class="right">
                            <div class="box6_4">세월호</div>
                            <div class="box6_5">2014.04.16 인천에서 제주로 향하던 여객선 세월호의<p></p>
                                추모해 보세요</div>                       
                        </div>
                    </div>
                </div>  
            </div> 
      </div> 

      <div class="bottombar">
            <div>당신의 삶을 그리다</div>
        </div> 


    </div>
  );
}

export default App;
