function Profile(){
  return(
    <div>
    <div class="private_site">
        <div class="title">
            <div class="logo">LOGO</div>
                <ul class="login">
                    <li><button class="log_in">로그인</button></li>
                    <li><div class="log_in_image"></div></li>
                </ul>
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
            <a href="#content_home" class="menu_home">홈</a>
            <a href="#content_timeline" class="menu_timeline">타임라인</a>
            <a href="#content_gallery" class="menu_gallery">갤러리</a>
            <a href="#content_answer" class="menu_answer">요청</a>
            <a href="#content_setting" class="menu_setting">설정</a>
        </div>
        <div class="content">
            <div id="content_home">홈 컨텐츠</div>
            <div id="content_timeline">타임라인 컨텐츠</div>
            <div id="content_gallery">갤러리</div>
            <div id="content_answer">요청</div>
            <div id="content_setting">설정</div>
        </div>
        </div>
        <div class="last">
            <div>당신의 삶을 그리다</div>
        </div>
    </div>
  )
}

export default Profile;