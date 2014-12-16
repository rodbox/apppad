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
			if(e.type=="keydown"){
				param['action'+id]();
				$("#apppad-action-"+id).addClass("onKeyPress");
				return false;
			}
			else{
				$("#apppad-action-"+id).removeClass("onKeyPress");
				return false;
			}
		}
		
	return false;
        })

	$(document).on("mousedown mouseup mouseleave",".apppad .bt-apppad",function (e){
		var t = $(this);
		var id = t.data("id");
		if(e.type=="mousedown"){
				param['action'+id]();
				t.addClass("onKeyPress");
				return false;
			}
			else{
				t.removeClass("onKeyPress");
				return false;
			}
	})

}



var param = {
	action1 : function (){
		console.log("mon action 11111111");
	},
	action2 : function (){
		console.log("mon action 2");
	},
	action3 : function (){
		console.log("Voila l'action 3");
	}
}

$.apppad(param);
});