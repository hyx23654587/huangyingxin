"use strict";$(function(){var e=$("#leftBtn"),s=$("#rightBtn"),t=$("#cirs li"),i=$("#carousel"),c=i.children("li"),l=0;function a(){t.each(function(e,s){e===l?$(s).addClass("active"):$(s).removeClass("active")})}s.click(function(){c.removeClass("imgActive"),c.eq(l).addClass("imgActive").css("left",0),i.css("left",0),6<=++l&&(l=0),c.eq(l).addClass("imgActive").css("left",770),i.animate({left:-770},1e3),a()}),e.click(function(){c.removeClass("imgActive"),c.eq(l).addClass("imgActive").css("left",770),--l<0&&(l=5),c.eq(l).addClass("imgActive").css("left",0),i.css("left",-770),i.animate({left:0},1e3),a()}),t.each(function(e,s){$(s).click(function(){e!==l&&(l<e?(c.removeClass("imgActive"),c.eq(l).addClass("imgActive").css("left",0),i.css("left",0),l=e,c.eq(l).addClass("imgActive").css("left",770),i.animate({left:-770},1e3)):(c.removeClass("imgActive"),c.eq(l).addClass("imgActive").css("left",770),l=e,c.eq(l).addClass("imgActive").css("left",0),i.css("left",-770).animate({left:0},1e3)),a())})})});