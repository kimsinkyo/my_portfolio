$(document).ready(function(){
  // 현재페이지의 해당하는 id를 가진 오디오 파일을 받아서 변수에 저장  
  var sfx = document.getElementById('click_sfx');
  // 사이드메뉴 HOME버튼을 눌렀을 때
  $('#home_cube').click(function(){
    // 변수에 저장된 오디오 파일을 재생한다
    sfx.play();
    // 1.2초후에 홈으로 이동
    setTimeout(function(){
      window.location.href="/"},1200);    
  });
  
  // 사이드메뉴 ANTHEM? 버튼을 눌렀을 때
  $('#anthem_cube').click(function(){
     // 변수에 저장된 오디오 파일을 재생한다
    sfx.play();
     // 1.2초후에 Anthem 공식 홈페이지로 이동  
    setTimeout(function(){
      window.open("https://www.ea.com/ko-kr/games/anthem/about", "_blink")},1200);    
  });
  
   // 사이드메뉴 FACTION 버튼을 눌렀을 때
  $('#friends_cube').click(function(){
     // 변수에 저장된 오디오 파일을 재생한다
    sfx.play();
      // 1.2초후에 팩션소개 페이지로 이동  
      setTimeout(function(){
      window.location.href="/friends_code"},1200);    
  });
  $('#javelin_cube').click(function(){
     // 변수에 저장된 오디오 파일을 재생한다
    sfx.play();
      // 1.2초후에 엑소슈트 소개 페이지로 이동  
      setTimeout(function(){
      window.location.href="/javelin"},1200);    
  });
  $('#info_cube').click(function(){
     // 변수에 저장된 오디오 파일을 재생한다
    sfx.play();
      // 1.2초후에 게임 정보 페이지로 이동  
      setTimeout(function(){
      window.location.href="/info"},1200);    
  });
  $('#trailer_cube').click(function(){
     // 변수에 저장된 오디오 파일을 재생한다
    sfx.play();
      // 1.2초후에 트레일러 소개 페이지로 이동  
      setTimeout(function(){
      window.location.href="/trailer"},1200);    
  });
});    
