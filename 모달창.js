// navbar-toggler 누르면 모달창 열리기
document.querySelector('.navbar-toggler').addEventListener('click',function(){
    document.querySelectorAll('.list-group')[0].classList.toggle('show');
});

// 로그인 버튼 누르면 모달창 열리기
// 클릭하면 main.css에 display:block; 해놓은 show-modal 클래스를 추가한다. (클래스 탈부착)
document.querySelector('#login').addEventListener('click',function(){
  document.querySelector('.black-bg').classList.add('show-modal')
});
document.querySelector('#close').addEventListener('click',function(){
  document.querySelector('.black-bg').classList.remove('show-modal')
});

// black-bg 누르면 모달창 닫히기
document.querySelector('.black-bg').addEventListener('click',function(e){
  if (e.target == document.querySelector('.black-bg')) {
    document.querySelector('.black-bg').classList.remove('show-modal')
  }
});