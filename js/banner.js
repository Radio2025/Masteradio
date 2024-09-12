function adSetter(){
      alert(navigator.userAgent); 
      var admobid = {};
               
       if( /(android)/i.test(navigator.userAgent)){
          admobid = {
              banner: 'ca-app-pub-6116874493728615/1080734764',	
              interstitial: 'ca-app-pub-6116874493728615/3577334381'
          };
       }else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)){
           admobid = {             
              banner: 'ca-app-pub-6116874493728615/1080734764',	
              interstitial: 'ca-app-pub-6116874493728615/3577334381'
          } 
       }else{
           admobid = {
             banner: 'ca-app-pub-6116874493728615/1080734764',	
             interstitial: 'ca-app-pub-6116874493728615/3577334381'
         }; 
       } 
            
      if(window.AdMob) AdMob.createBanner({
          adId:admobid.banner,
          position:AdMob.AD_POSITION.BOTTON_CENTER,
          autoShow:true} );
          
         if(window.AdMob) AdMob.prepareInterstitial({adId:admobid.interstitial, autoShow:false});
            
       }

      function onDeviceReady(){
         alert("device ready");
         adSetter();
      }       
           
    
//display the banner
function showBannerFunc(){
    window.plugins.AdMob.createBannerView();
}
//display the interstitial
function showInterstitialFunc(){
    window.plugins.AdMob.showInterstitialAd();
}

window.plugins.AdMob.destroyBannerView();