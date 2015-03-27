betaApp.directive('over',function(){
	return {
		restrict:"EACM",
		templateUrl:'/template/over.html',
		controller:function(){

		},
		link:function($scope, elem, attrs,$rootScope){

		}
	}
});
betaApp.directive('grouplogo',function(){
	return {
		restrict:"EACM",
		controller:function($scope,$element,$attrs,$transclude){
		},
		link:function(scope, elem, attrs){
			for(var i = 19;i>=0;i--){
				var oDiv = document.createElement("div");
				oDiv.style.width="250px";
				oDiv.style.height="28px";
				oDiv.style['background-position']="0 "+"-"+i*28+"px";
				oDiv.style.top=i*28+"px";
				oDiv.style['-webkit-animation-delay']= (20-i)*50+"ms";
				elem.append(oDiv);
			}
		}
	}
});
