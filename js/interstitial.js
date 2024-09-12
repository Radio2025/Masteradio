
window.onload = function(){
	
   window.onbeforeunload = function(){
	   if(window.Admob) Admob.showInterstitial();
   };
}