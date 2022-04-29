import React, { Component } from "react";
import '../PrivateSiteManager.css';

class Setting extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
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
                    <input type="radio" name="size" id="private"/>
                    <label for="private">
                        <div class="range_select_a">
                            <div class="big">모두에게 공개</div>
                            <div class="small">혼자만의 추억을 그리고 싶은 추모식에 추천합니다. 이 옵션을 사용하면 관리자만이 웹 사이트에 방문 할 수 있습니다.</div>
                        </div>
                    </label>
                </div>
                <div class="block_set">차단된 계정</div>
                <div class="block_select">
                </div>
                <div class="share_set">공유 링크</div>
                <div class="share_select">
                    <div class="link_rel">
                        <input id="copy_text" value="https://us04web.zoom.us" readonly/>
                    </div>
                    <button class="link_copy" onClick={() => {
                      var copyText = document.getElementById('copy_text');
                      copyText.select();
                      copyText.setSelectionRange(0, 99999);
                      document.execCommand("Copy");
                      alert('공유 링크가 성공적으로 복사되었습니다.');
                    }}>링크 복사</button>
                </div>
            </section>
        )
    }
  }
  
  
  export default Setting;