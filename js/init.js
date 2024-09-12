$(document).ready(function(){
 		$('.sidenav').sidenav();
 	});

M.AutoInit();  


$('document').ready(function($){
  
  var bloque = $('.elemento'),
      enlaces = $('.teal, .sidenav').find('a');
  
    enlaces.click(function(){
    
    var hash = $(this).attr('href');
    
    bloque
      .filter(hash)
      .addClass('visible')
      .siblings()
      .removeClass('visible');
      
    enlaces
      .removeClass('activo');
    
    $(this)
      .addClass('activo'); 
  });
  
});


$(document).ready(function(){
    $("a").click(function(){
        ($('html,body').scrollTop(0));
    });
});


$(document).ready(function () {
      $('ul li').on('click', function() {
       $(".sidenav").css("display", "none");
      
      
	
       $(".sidenav-trigger").click(function () {
        $("#nav-mobile").css("display", "");
         $('.sidenav-overlay').click();
      });
    });
  });

$(document).ready(function () {
    function cerrarSidenav() {
        $(".sidenav").hide();
    }

    $('ul li').on('click', function() {
        $("#nav-mobile").show(); 
        $('.sidenav-overlay').click(); 
    });

    $(".sidenav-trigger").click(function () {
        $("#nav-mobile").show();
        $('.sidenav-overlay').click();
    });

       var initialX = null;
    $(document).on('touchstart', function(e) {
        initialX = e.touches[0].clientX;
    });

    $(document).on('touchmove', function(e) {
        if (initialX === null) {
            return;
        }

        var currentX = e.touches[0].clientX;
        var diffX = initialX - currentX;
        if (diffX > 50) { 
            $("#nav-mobile").show();
            initialX = null;
        }
    });
});

 function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
