$(window).load(function(){
    //save the selector so you don't have to do the lookup everytime
    $dropdown = $("#contextMenu");
    $(".actionButton").click(function() {
        //get row ID
        var id = $(this).closest("tr").children().first().html();
        //move dropdown menu
        $(this).after($dropdown);
        //update links
       
        //show dropdown
       
    });
    });