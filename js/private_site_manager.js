const tabMenus = document.querySelectorAll('.tab_menu li');
const tabContents = document.querySelectorAll('.content section');

// 탭메뉴
const activeSection = (e) => {
    e.stopPropagation();

    let menuIndex = [...tabMenus].indexOf(e.target);

    tabMenus.forEach(menu => {
        [...tabMenus].indexOf(menu) === menuIndex
            ? menu.classList.add('active')
            : menu.classList.remove('active')
    });

    tabContents.forEach(content => {
        [...tabContents].indexOf(content) === menuIndex
            ? content.classList.add('active')
            : content.classList.remove('active')
    });
}

[...tabMenus][0].classList.add('active');
[...tabContents][0].classList.add('active');

tabMenus.forEach(menu => {
    menu.addEventListener('click', activeSection)
})

// 설정 > 공유링크 > 링크복사
function linkCopy(){
    var copyText = document.getElementById('copy_text');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
    alert('공유 링크가 성공적으로 복사되었습니다.');
  
}