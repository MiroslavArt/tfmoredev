{"version":3,"sources":["script.js"],"names":["BX","BXSGM24","currentUserId","groupdId","groupType","userIsMember","userIsAutoMember","userRole","isProject","favoritesValue","canInitiate","canModify","editFeaturesAllowed","init","params","this","parseInt","groupId","isOpened","urls","f","delegate","eventData","type","isNotEmptyString","code","util","in_array","style","display","SocialnetworkUICommon","reload","sonetGroupMenu","SonetGroupMenu","getInstance","setItemTitle","addCustomEvent","event","getEventId","getData","bind","sendJoinRequest","showGroupMenuPopup","bindElement","getEventTarget","perms","canProcessRequestsIn","requestUser","message","edit","delete","features","members","requests","requestsOut","userRequestGroup","userLeaveGroup","preventDefault","data","top","location","href","groupsList","button","currentTarget","showButtonWait","ajax","url","getAttribute","method","dataType","groupID","MESSAGE","ajax_request","save","sessid","bitrix_sessid","onsuccess","responseData","hideButtonWait","URL","onCustomEvent","window","onfailure"],"mappings":"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","file":""}