// 버튼0을 누르면
// - 모든 버튼에 있는 orange 클래스명 제거 
// - 버튼0에 orange 클래스명 부착
// - 모든 콘텐츠에 show 클래스명 제거
// - 콘텐츠0에 show 클래스명 부착

// document.querySelectorAll('.tab-button')[0].addEventListener('click',function(){
//     document.querySelectorAll('.tab-button')[0].classList.remove('orange');
//     document.querySelectorAll('.tab-button')[1].classList.remove('orange');
//     document.querySelectorAll('.tab-button')[2].classList.remove('orange');
//     document.querySelectorAll('.tab-button')[0].classList.add('orange');

//     document.querySelectorAll('.tab-content')[0].classList.remove('show');
//     document.querySelectorAll('.tab-content')[1].classList.remove('show');
//     document.querySelectorAll('.tab-content')[2].classList.remove('show');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');
// })

// $('.tab-button').eq(1).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// })

var tabButton = document.querySelectorAll('.tab-button');
var tabContent = document.querySelectorAll('.tab-content');
for (let i=0; i<document.querySelectorAll('.tab-button').length; i++) {
    tabButton[i].addEventListener('click',function(){
        tabButton[0].classList.remove('orange');
        tabButton[1].classList.remove('orange');
        tabButton[2].classList.remove('orange');
        tabButton[i].classList.add('orange');

        tabContent[0].classList.remove('show');
        tabContent[1].classList.remove('show');
        tabContent[2].classList.remove('show');        
        tabContent[i].classList.add('show');
    })
}

