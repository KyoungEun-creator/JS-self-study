// document.querySelectorAll('.form-select')[0].addEventListener('input',function(){
//     if (document.querySelectorAll('.form-select')[0].value == '셔츠') {  //$('.form-select').eq(0).val()
//         document.querySelectorAll('.form-select')[1].classList.remove('form-hide');    //form-hide 클래스 제거해주기
//     } else {
//         document.querySelectorAll('.form-select')[1].classList.add('form-hide');
//     }
// });



document.querySelectorAll('.form-select')[0].addEventListener('input',function(e){
    var select = document.querySelectorAll('.form-select')[0].value  //$('.form-select').eq(0).val() //e.currentTarget.value() //this.value
    if (select == '셔츠') {  
        var shirtSize = `<option>95</option>
        <option>100</option>`;
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');    //form-hide 클래스 제거해주기(셀렉트가 보이도록)
        document.querySelectorAll('.form-select')[1].innerHTML = shirtSize;  //$('.form-select').eq(1).html(shirtSize);
    } else if (select == '바지') {
        var pantsSize = `<option>28</option>
        <option>30</option>`;
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');    
        document.querySelectorAll('.form-select')[1].innerHTML = pantsSize;  
    } else {
        document.querySelectorAll('.form-select')[1].classList.add('form-hide');
    }
});

//내용 전체 바꾸는 것 아닌
//맨 뒤에 a 추가하기: document.querySelector('.form-select').insertAdjacentHTML('beforeend', a);
//'beforeend': 안쪽 맨 밑에 추가하라는 뜻

