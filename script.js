$(document).ready(function(){
    var search = {};
    function request(){
            $.ajax( {
                url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&origin=*&search="+ encodeURIComponent(search.name) ,
                // crossDomain: true,
                dataType: 'jsonp',
                type: 'GET',
                // headers: { 'Access-Control-Allow-Origin': '*' },
                success: function(data) {
                   // do something with data
                   console.log(data);
                   //$("p").text(decodeURIComponent(data.query.pages[0].revisions[0].content));
                    for (let i = 0; i < data[1].length; i++){
                        
                        var int = "<div class = 'row'>"
                        var a = "<a id = 'link' " + "target = '_blank' href = '" + data[3][i] + "'>"
                        var title = "<div class = 'title'>" + data[1][i] + ":" + "</div>";
                        var enda = "</a>" 
                        var cont = "<div class = 'content'>" + data[2][i] + "</div>";
                        var fin = "</div><br>"  
                        
                        $(".main").append( int + a + title + enda + cont + fin );
                        
                   }
                }
            });
            }
    $("button").on("click", function(){
        $(".main").html("");
        if ($(window).width() <= 768){
            $("#search").css({"position" : "relative", "top" : "0px", "width": "100%"});
            $("button").css({"position" : "relative", "top" : "0px"});
            $("#rand").css({"position" : "relative", "top" : "0px"});

        } else {
        $("#search").css({"position" : "relative", "top" : "-100px", "width": "200px"});
        $("button").css({"position" : "relative", "top" : "-100px"});
        $("#rand").css({"position" : "relative", "top" : "-100px"});
        $("#wiki").removeClass("text-center");
        $("h1").css({"position" : "relative", "bottom" : "100px"});
        }
        
        console.log($(window).width());
        search.name = $("#search").val();
        console.log(search.name);
        request(); 
    });
    $("#rand").hover(
        function(){
            console.log("in");
            $(".fa-random").addClass("fa-spin");
        },
        function(){
            console.log("out");
            $(".fa-random").removeClass("fa-spin");
        }
    );
    
    
    $(window).resize(function() {
        if ($(window).width() <= 768){
            $("#wiki").addClass("text-center");
            $("h1").css({"position" : "relative", "bottom" : "0"});
            $("#search").css({"position" : "relative", "top" : "0px", "width": "100%"});
            $("button").css({"position" : "relative", "top" : "0px"});
            $("#rand").css({"position" : "relative", "top" : "0px"});
        }
        else {
            $("#search").css({"position" : "relative", "top" : "50px", "width": "auto"});
            $("button").css({"position" : "relative", "top" : "50px"});
            $("#rand").css({"position" : "relative", "top" : "50px"});
        }
      });
      

    
    
    
});