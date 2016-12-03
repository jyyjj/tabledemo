var app=angular.module("myApp",[]);
app.controller("table",["$scope",function($scope){
	var info=[
		{
			firstname:"FANG",
			lastname:"vane",
			gender:"Male",
			salary:"12,333.5",
			birthday:"1343753845839"
		},
		{
			firstname:"SARA",
			lastname:"rose",
			gender:"Female",
			salary:"232,334.2",
			birthday:"1238477554056"
		},
		{
			firstname:"AAM",
			lastname:"hot",
			gender:"Male",
			salary:"66,880.5",
			birthday:"1166577542347"
		},
		{
			firstname:"MARK",
			lastname:"bear",
			gender:"Male",
			salary:"68,000.0",
			birthday:"1213242398899"
		}
	]
	$scope.info = info;
	$scope.value=true;
	$scope.name="";
	$scope.head=function(name,event){
		alert(3)
		/*var thisevent=event.target;
			if($(thisevent).hasClass("top")!=-1){
				$(thisevent).addClass("bottom");
				$(thisevent).removeClass("top");
				$scope.name=event.name;
			}else{
				$(thisevent).addClass("top");
			}
			if($(thisevent).hasClass("bottom")!=-1){
				this.removeClass("bottom");
			}*/
	}
	
	
}])