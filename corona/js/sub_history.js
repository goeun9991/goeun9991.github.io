function story(){
	var imgbox     = $('.story_imgbox'),
        menubar = $('.story_menubar'),
        menubtn = menubar.find('a');
  
    menubtn.find('li').eq(0).html("<img src='./img/history/story_menu_on_nutri.png'>").css({'width': '33%', 'height': 'auto'});

    imgbox.html("<img src='./img/history/story_img_nutri.png'>").css({'width': '80%', 'height': 'auto'});

    menubtn.on('click', function(e){
		e.preventDefault();
 
		var imgspan = imgbox,
            data_img = $(this).attr("data-img");

      
        imgbox.html('<img>');
        imgbox.find('img').attr({'src': data_img });
        imgbox.show(5000);
    });
  var menu = $('.story_menubar').find('li');
  menu.on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
  });
  

};
            
    
