     //다크모드,라이트모드 => badge 클릭 횟수가 홀수/짝수
     //badge 1회 클릭시 dark모드 되기
     //badge 2회 클릭시 light모드 되기
     //badge 3회 클릭시 dark모드 되기
     //badge 4회 클릭시 light모드 되기....
     
     var count = 0;
     document.querySelector('.badge').addEventListener('click',function(){
       count+=1;
       if (count%2==1) {
         document.querySelector('.badge').innerHTML('Light 🔄')
       } else {
         document.querySelector('.badge').innerHTML('Dark 🔄')
       }
     });