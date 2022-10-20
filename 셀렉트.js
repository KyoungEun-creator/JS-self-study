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
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');    //form-hide 클래스 제거해주기
    } else {
        document.querySelectorAll('.form-select')[1].classList.add('form-hide');
    }
});
