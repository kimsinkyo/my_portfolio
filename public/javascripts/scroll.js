// 네비게이션 바의 항목을 클릭하면 해당하는 부분으로 자동 스크롤하는 기능
jQuery(document).ready(function($) {
  $(".scroll").click(function(event){            
          event.preventDefault();
          $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
});