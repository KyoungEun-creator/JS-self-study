//5초 후에 아래 div 박스 안 보이게 만들기 setTimeout

// setTimeout(function(){
//     document.querySelector('.alert').style.display='none'  //$('.alert').hide()
// }, 5000)


var count = 5;
var timer = setInterval(countDown, 1000)
function countDown(){
  if (document.querySelector('.min').innerHTML>0) {
    document.querySelector('.min').innerHTML-=1;
  } else {
    clearTimeout(timer);
    document.querySelector('.alert').style.display='none';
  }
}