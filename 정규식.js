// 전송버튼 누르면
    // 첫번째 input에 입력한 값이 공백이면 alert창 띄워주세요
    // document.getElementById('form-control').addEventListener('click', function(){
    // $('foam').on('submit',fuction(){})
    // }
document.getElementById('send').addEventListener('submit',function(){
    if (document.getElementById("email").value==''){
    alert("아이디를 입력하세요");
    } else if (/\S+@\S+\.\S+/.test(document.getElementById("email").value==false)){
    alert('이메일형식 아님');
    }
    if (document.getElementById("email").value=='', document.getElementById("pw").value==''){
    alert("비번을 입력하세요");
    e.preventDefault();
    } else if (document.getElementById("pw").value.length < 6){
    alert("비번을 6자 이상 입력하세요");
    e.preventDefault();
    } else if (/[A-Z]/.test(document.getElementById("pw").value==false)){
    alert('영어대문자 없음');
    }
});