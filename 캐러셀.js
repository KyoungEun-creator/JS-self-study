document.querySelector('.slide-1').addEventListener('click',function(){
    document.querySelector('.slide-container').style.transform='translateX(0)'
});
document.querySelector('.slide-2').addEventListener('click',function(){
    document.querySelector('.slide-container').style.transform='translateX(-100vw)'
});
document.querySelector('.slide-3').addEventListener('click',function(){
    document.querySelector('.slide-container').style.transform='translateX(-200vw)'
});

  //jQuery사용: document.querySelector('.slide-container').css('transform','translateX(-100vw)')
  
  // 지금 보이는 사진이 1이면 2번 사진 보여주세요~
  // 지금 보이는 사진이 2이면 3번 사진 보여주세요~
  // var 지금사진 = 1;
  // document.querySelector('.next').addEventListener('click',function(){
  //   if (지금사진 == 1) {
  //     document.querySelector('.slide-container').style.transform='translateX(-100vw)'
  //     지금사진+=1;
  //   } else if (지금사진 == 2) {
  //     document.querySelector('.slide-container').style.transform='translateX(-200vw)'
  //     지금사진+=1;
  //   }
  // });
  // 지금 보이는 사진이 3이면 2번 사진 보여주세요~
  // 지금 보이는 사진이 2이면 1번 사진 보여주세요~
  // document.querySelector('.before').addEventListener('click',function(){
  //   if (지금사진==3){
  //     document.querySelector('.slide-container').style.transform='translateX(-100vw)'
  //     지금사진-=1;
  //   } else if (지금사진==2) {
  //     document.querySelector('.slide-container').style.transform='translateX(0vw)'
  //     지금사진-=1;
  //   }
  // });

var 지금사진 = 1;
document.querySelector('.next').addEventListener('click',function(){
    document.querySelector('.slide-container').style.transform='translateX(-'+지금사진+'00vw)';
    지금사진+=1;
});
  document.querySelector('.before').addEventListener('click',function(){
    document.querySelector('.slide-container').style.transform='translateX(-'+지금사진+'00vw)';
    지금사진-=1;
});
