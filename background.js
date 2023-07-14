browser.runtime.onInstalled.addListener(function(details){
    
  if( (details.reason == "install") || (details.reason === 'update' && details.previousVersion < '4.0.0') ) {
         
    browser.storage.local.set({
        ext_on: true,
        SJR: true,
        VHB: false,
        FNEGE: false,
        CoNRS: false,
        HCERE: false,
        CORE: true,
        CCF: false,
        DAEN: false,
        AJG: false,
        ABDC: true,
        FT50: true,
        turbo: true
    });
     
    browser.runtime.openOptionsPage(); // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
   
  }
   
});
