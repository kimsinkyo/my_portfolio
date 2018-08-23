
// 버튼들의 동작에 대한 js
$(document).ready(function(){
  // 현재페이지의 해당하는 id를 가진 오디오 파일을 받아서 변수에 저장  
  var sfx1 = document.getElementById('login_sfx');
  var sfx2 = document.getElementById('click_sfx');
  // 클릭하세요! 버튼을 클릭했을 때 
  $('.enter_homepage').click(function(){
    // sfx1에 저장된 소리를 재생한다
    sfx1.play();
    // 1.5초 후에 main.html로 이동한다
    setTimeout(function(){
      window.location.href="/main"
    }, 1500);
  });
  // 인스타그램 아이콘을 클릭했을 때
  $('#instagram_icon').click(function(){
    // sfx2에 저장된 소리를 재생한다
    sfx2.play();
    // 1.2초 후에 anthem 공식 인스타그램 계정으로 이동한다
    setTimeout(function(){
      window.open("https://www.instagram.com/anthemgame/");
    }, 1200);
  });
   // 페이스북 아이콘을 클릭했을 때
  $('#facebook_icon').click(function(){
    // sfx2에 저장된 소리를 재생한다
    sfx2.play();
     // 1.2초 후에 anthem 공식 페이스북 계정으로 이동한다
    setTimeout(function(){
      window.open("https://www.facebook.com/AnthemGame/");
    }, 1200);
  });
   // 텀블러 아이콘을 클릭했을 때
  $('#tumbler_icon').click(function(){
    // sfx2에 저장된 소리를 재생한다
    sfx2.play();
    // 1.2초 후에 텀블러에서 anthem 태그로 검색한 페이지로 이동한다
    setTimeout(function(){
      window.open("https://www.tumblr.com/tagged/anthem-game");
    }, 1200);
  });
   // 트위터 아이콘을 클릭했을 때
  $('#twitter_icon').click(function(){
   // sfx2에 저장된 소리를 재생한다
    sfx2.play();
     // 1.2초 후에 anthem 공식 트위터로 이동한다
    setTimeout(function(){
      window.open("https://twitter.com/anthemgame");
    }, 1200);
  });
});    

// 커서에 따라 기울기가 움직이는 이미지
VanillaTilt.init(document.querySelector(".main-title"),{
	max: 30,
	speed: 600,
  scale: 1,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 400,
});

// 커서에 따라 기울기가 움직이는 이미지
VanillaTilt.init(document.querySelectorAll(".box"),{
	max: 30,
	speed: 600,
  scale: 1,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 600,
  glare: true
});


