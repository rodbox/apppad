$(document).ready(function(){
$.apppad = function(paramSend){
	var defauts = {
		action1 : function (){
			return false;
		},
		action2 : function (){
			return false;
		},
		action3 : function (){
			return false;
		},
		action4 : function (){
			return false;
		},
		action5 : function (){
			return false;
		},
		action6 : function (){
			return false;
		},
		action7 : function (){
			return false;
		},
		action8 : function (){
			return false;
		},
		action9 : function (){
			return false;
		}
	}
	var param=$.extend(defauts, paramSend);

	$(document).on("keydown keyup" , function (e){
		var k = e.keyCode;
		var id = k-96;
		if (k >= 97 && k <=105) {
			var btAction = $("#apppad-action-"+id);
			if(e.type=="keydown"){
				param['action'+id]();
				btAction.addClass("onPadPress");
				return false;
			}
			else{
				btAction.removeClass("onPadPress");
				return false;
			}
		}
		
	return false;
        })


if($.appMobile()){
	$(document).on("tap",".apppad .bt-apppad",function (e){
		var t = $(this);
		var id = t.data("id");

				param['action'+id]();
				t.addClass("onPadPress");
				$('.apppad').addClass("onPadPress");
				setTimeout(function (){
					t.removeClass("onPadPress");
					$('.apppad').removeClass("onPadPress");
				},125)
				return false;

			
	})
}
else{
	$(document).on("mousedown mouseup mouseleave ",".apppad .bt-apppad",function (e){
		var t = $(this);
		var id = t.data("id");
		if(e.type=="mousedown"){
				param['action'+id]();
				t.addClass("onPadPress");
				$('.apppad').addClass("onPadPress");
				return false;
			}
			else{
				t.removeClass("onPadPress");
				$('.apppad').removeClass("onPadPress");
				return false;
			}
	})
}



	

}



var param = {
    action1 : function (){
        $("#result").html("J'effectue l'action 1");
    },
    action2 : function (){
        $("#result").html("mon action 2");
    },
    action3 : function (){
        $("#result").html("Voila l'action 3");
    },
    action4 : function (){
        $("#result").html("et la 4");
    },
    action5 : function (){
        $("#result").html("une cinquieme c'est bien aussi");
    },
    action6 : function (){
        $("#result").html("la 6 est comme ca !");
    },
    action7 : function (){
        $("#result").html("7 voila qui est fait");
    },
    action8 : function (){
        $("#result").html("a 8 on continue");
    },
    action9 : function (){
        $("#result").html("9 Actions c'est déja pas mal");
    }
}

$.apppad(param);
});