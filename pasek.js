 $(document).ready(function()
      {
      $(".option").on({
    "mouseover" : function() {
        $(this).animate({
           height:60, 
        }, 300);
    },
    "mouseout" : function() {
        $(this).animate({
            height:50
        }, 300);
    }
});

    });