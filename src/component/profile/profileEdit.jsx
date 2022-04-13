function ProfileEdit(){
  return(
    <div>
    <div class="private_site">
        <div class="title">
                <div class="login">
                    <button class="log_in">K</button>
                </div>
        </div>
        <div class="picture">

        </div>
        <div class="imformation">
            <div class="people_image"></div>
            <div class="people_etc">
                <div class="people_name">아리</div>
                <div class="people_etcs">
                    <i class="fa-solid fa-mars"></i>
                    <div>성별</div>
                    <i class="fa-solid fa-location-dot"></i>
                    <div>대한민국 서울특별시</div>
                    <i class="fa-regular fa-heart"></i>
                    <div>2005-2019</div>
                </div>
            </div>
            <div class="people_re">
                <i class="fa-regular fa-pen-to-square"></i>
                <div>수정하기</div></div>
        </div>
        <div class="menu">
            <ul class="tab_menu">
                <li class="menu_home">홈</li>
                <li>타임라인</li>
                <li>갤러리</li>
                <li>요청</li>
                <li>설정</li>
            </ul>
        </div>
        <div class="content">
            <section id="content_home">
                <div class="content_home_title">"FOREVER MISSED"</div>
                <div class="content_home_content">
                    Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet prompta reformidans.
                </div>
            </section>
            <section id="content_timeline">타임라인</section>
            <section id="content_gallery">갤러리</section>
            <section id="content_answer">요청</section>
            <section id="content_setting">
                <div class="range_set">공개범위 설정</div>
                <div class="range_select">
                    <input type="radio" name="size" id="all" checked="checked"/>
                    <label for="all">
                        <div class="range_select_a">
                            <div class="big">모두에게 공개</div>
                            <div class="small">대부분의 추모식에 추천합니다. 이 옵션을 사용하면 그리다를 이용하는 사용자 모두가 웹 사이트에 쉽게 방문 할 수 있습니다.</div>    
                        </div>
                    </label>
                    <input type="radio" name="size" id="some"/>
                    <label for="some">
                        <div class="range_select_a">
                            <div class="big">일부에게만 공개</div>
                            <div class="small">조용한 추모식에 추천합니다. 이 옵션을 사용하면 사이트의 링크를 가진 사용자만이 웹 사이트에 방문 할 수 있습니다.</div>
                        </div>
                    </label>
                    <input type="radio" name="size" id="private">
                    <label for="private">
                        <div class="range_select_a">
                            <div class="big">모두에게 공개</div>
                            <div class="small">혼자만의 추억을 그리고 싶은 추모식에 추천합니다. 이 옵션을 사용하면 관리자만이 웹 사이트에 방문 할 수 있습니다.</div>
                        </div>
                    </label>
                    </input>
                </div>
                <div class="block_set">차단된 계정</div>
                <div class="block_select">

                </div>
                <div class="share_set">공유 링크</div>
                <div class="share_select">
                    <div class="link_rel">
                        <input id="copy_text" value="https://us04web.zoom.us" readonly/>
                    </div>
                    <button class="link_copy" onclick="linkCopy()">링크복사</button>
                </div>
            </section>
        </div>
        </div>
        <div class="last">
            <div>당신의 삶을 그리다</div>
        </div>
    </div>
  )   
}

export default ProfileEdit