jQuery("input").keyup(function(){var e=Number(jQuery("#pricepervideo").val()),r=Number(jQuery("#numberofvideo").val()),u=parseInt(100*(e*r*.75))/100*365;jQuery("#videoearning").html(u),jQuery("#videotime").html(30*r/60)});