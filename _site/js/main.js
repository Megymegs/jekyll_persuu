$("#romance").on('click', function(){
    $('body').removeClass().addClass('default');
    $('#favicon_ico').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/favicon_1.ico');
    $('#favicon_png').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/favicon_1.png');
});
$("#companion").on('click', function(){
    $('body').removeClass().addClass('recreational');
    $('#favicon_ico').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/favicon_2.ico');
    $('#favicon_png').attr('href','https://megymegs.github.io/jekyll_persuu/assets/favicon/favicon_2.png');
});
