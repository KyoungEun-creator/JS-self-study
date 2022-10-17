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

//  <jQuery>
// for (let i=0; i < $('.tab-button').length; i++) {
//     $('.tab-button').on('click',function(){
//         $('.tab-button').remove('orange')
//         $('.tab-button').eq(i).add('show')
//         $('.tab-content').remove('orange')
//         $('.tab-content').eq(i).add('show')
//     })
// }
// 변수 생성, for문, 함수 생성
// var tabButton = document.querySelectorAll('.tab-button');
// var tabContent = document.querySelectorAll('.tab-content');

// for (let i=0; i<document.querySelectorAll('.tab-button').length; i++) {
//     tabButton[i].addEventListener('click',function(){
//         openTab(i) // 아래에 함수로 뺌
//     })
// }

// 램용양을 차지하는 이벤트리스너를 최소한으로 쓰기 위해서(성능적 이점 위해) for문을 쓰고싶지 않다면
// 탭 하나만 직접 눌러도 이벤트 버블링에 의해 list 클래스는 항상 눌렸음
document.querySelector('.list').addEventListener('click', function(e){
    openTab(e.target.dataset.id)
});

function openTab(pick){
    document.querySelectorAll('.tab-button')[0].classList.remove('orange');
    document.querySelectorAll('.tab-button')[1].classList.remove('orange');
    document.querySelectorAll('.tab-button')[2].classList.remove('orange');
    document.querySelectorAll('.tab-button')[pick].classList.add('orange');

    document.querySelectorAll('.tab-content')[0].classList.remove('show');
    document.querySelectorAll('.tab-content')[1].classList.remove('show');
    document.querySelectorAll('.tab-content')[2].classList.remove('show');        
    document.querySelectorAll('.tab-content')[pick].classList.add('show');
}
    
    // 지금 누른 게 버튼0 이면
    // 탭버튼0에 orange클래스를 추가
    // 탭콘텐츠0에 show를 추가

    // if (e.target == tabButton[0]) {    //tabButton[0] == document.querySelectorAll('.tab-button')[0]
    //     openTab(0)
    // } else if (e.target == tabButton[1]) {
    //     openTab(1)
    // } else {
    //     openTab(2)
    // }
