{"version":3,"sources":["script.js"],"names":["bxImBarInit","BX","isImBarTransparent","bind","window","bxImBarRedraw","addCustomEvent","BXIM","openNotify","openMessenger","e","webrtc","openKeyPad","messenger","popupPopupMenu","util","in_array","uniquePopupId","replace","close","bindDelegate","className","openPopupMenu","this","PreventDefault","getAttribute","messengerWindow","size","td","findChildrenByClassName","i","length","computedStyle","getComputedStyle","parseInt","getPropertyValue","toString","style","paddingRight","document","body","right","counter","notifyCounter","findChildByClassName","innerHTML","type","node","delegate","command","params","online","USER_ID","bxImBarRecount","USERS","options","selectedIndex","text","initObj","notify","panelButtonCall","panelButtonCallAnlgePosition","panelButtonCallAnlgeOffset","MessengerCommon","recentListRedraw","bar","dataset","lockRedraw","scrolledY","pageYOffset","documentElement","scrollTop","scrolledX","pageXOffset","scrollLeft","scrollWidth","clientWidth","barOffset","panel","offsetHeight","creatorNotify","top","addClass","removeClass","count","bxFullscreenClose","MessengerWindow","closePopup"],"mappings":"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","file":""}