{"version":3,"sources":["registry.bundle.js"],"names":["this","BX","Messenger","Provider","exports","pull_client","ui_vue_vuex","ImPullCommandHandler","babelHelpers","createClass","key","value","create","params","arguments","length","undefined","classCallCheck","typeof","controller","store","getModuleId","getSubscriptionType","PullClient","SubscriptionType","Server","handleMessageChat","_this","chat","chatId","dispatch","dialogId","fields","users","VuexBuilderModel","convertToArray","files","prepareFilesBeforeSave","collection","state","messages","update","message","tempId","index","id","isUnreadMessagesLoaded","unreadCountInCollection","forEach","element","unread","commit","dialog","messageLimit","getRequestMessageLimit","getMessageLimit","objectSpread","stopOpponentWriting","userId","senderId","getUserId","then","result","counter","count","handleMessageUpdate","extra","command","execMessageUpdateOrDelete","handleMessageDelete","handleMessageDeleteComplete","action","handleMessageParamsUpdate","handleStartWriting","startOpponentWriting","handleReadMessageChat","_this2","readId","lastId","text","textOriginal","blink","Pull"],"mappings":"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","file":"registry.bundle.map.js"}