!function(e){function a(n){if(r[n])return r[n].exports;var t=r[n]={exports:{},id:n,loaded:!1};return e[n].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}var r={};return a.m=e,a.c=r,a.p="",a(0)}([function(e,a,r){r(2),e.exports=r(4)},,function(e,a){var r=angular.module("myApp",[]);r.controller("table",["$scope",function(e){var a=[{firstname:"FANG",lastname:"vane",gender:"Male",salary:"12,333.5",birthday:"1343753845839"},{firstname:"SARA",lastname:"rose",gender:"Female",salary:"232,334.2",birthday:"1238477554056"},{firstname:"AAM",lastname:"hot",gender:"Male",salary:"66,880.5",birthday:"1166577542347"},{firstname:"MARK",lastname:"bear",gender:"Male",salary:"68,000.0",birthday:"1213242398899"}];e.info=a,e.value=!0,e.head=function(a){e.value?$("#firstname").hasClass("top")!=-1?($("#firstname").addClass("bottom"),$("#firstname").removeClass("top")):$("#firstname").hasClass("bottom")!=-1&&(e.value=!1):e.value=!0}}])},,function(e,a){e.exports={render:function(e){var a=document.querySelector("body");a.innerHTML=e+a.innerHTML}}}]);