window.onload=function Inicio(){anclasForm();function iOSversion(){if(/iP(hone|od|ad)/.test(navigator.platform)){var v=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(v[1],10),parseInt(v[2],10),parseInt(v[3]||0,10)];}}
ver=iOSversion();if(ver[0]>=5){$("header").css({"background-attachment":"scroll"});$(".sectionForm").css({"background-attachment":"scroll"});}};function anclasForm(){$(".anclaForm").each(function(){$(this).on("click",function(){$('html, body').animate({scrollTop:$("#anclaForm").offset().top- 90},1000);})})}