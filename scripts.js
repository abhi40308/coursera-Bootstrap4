$(document).ready(function(){
            $("#reservebtn").click(function(){
                $("#reserveModal").modal('show');
            });
            $("#loginbtn").click(function(){
                $("#loginModal").modal('show');
            });       

            $("#cancel-btn-login").click(function(){
                $("#loginModal").modal("hide");
                
            });
            $("#cancel-btn-reserve").click(function(){
                $("#reserveModal").modal("hide");
                
            });

            $("#carousel-button").click(function(){
                if ($("#carousel-button").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carousel-button").children("span").removeClass('fa-pause');
                    $("#carousel-button").children("span").addClass('fa-play');
                }
                else if($("#carousel-button").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carousel-button").children("span").removeClass('fa-play');
                    $("#carousel-button").children("span").addClass('fa-pause');}
                }); 
});