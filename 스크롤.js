//페이지 스크롤바 100 이상 내리면 로고 폰트 사이즈 줄이기
window.addEventListener('scroll',function(){
  if (window.scrollY >= 100) {
  document.querySelector('.navbar-brand').style.fontSize = '20px';
} else {
  document.querySelector('.navbar-brand').style.fontSize = '30px';
}
})


//div 박스 스크롤 이벤트
//div의 스크롤바 내린 양 + 눈에 보이는 div박스의 높이(100px) == div 실제높이일 때(즉, 끝까지 내렸을 때) alert 창 띄우기

document.querySelector('.lorem').addEventListener('scroll',function(){
    var 스크롤양 = document.querySelector('.lorem').scrollTop;  //404
    var 실제높이 = document.querySelector('.lorem').scrollHeight;
    var 높이 = document.querySelector('.lorem').clientHeight;
    if (스크롤양 + 높이 >= 실제높이-10) {
      alert('회원약관 전체 스크롤 완료');
    }
});