{"version":3,"sources":["logic.js"],"names":["BX","FilterEntitySelector","this","_id","_settings","_fieldId","_control","_selector","_inputKeyPressHandler","delegate","keypress","prototype","initialize","id","settings","getSetting","addCustomEvent","window","onCustomEntitySelectorOpen","onCustomEntitySelectorClose","getId","name","defaultval","hasOwnProperty","e","open","field","query","Tasks","Integration","Socialnetwork","NetworkSelector","scope","mode","useSearch","useAdd","parent","popupOffsetTop","popupOffsetLeft","bindEvent","data","setData","util","htmlspecialcharsback","nameFormatted","close","control","closeAll","k","items","create","self","namespace","Component","TasksReportEffective","extend","sys","code","methodsStatic","instance","getInstance","addInstance","obj","methods","construct","callConstruct","option","spotLightInit","efficiencyData","render","efficiency","EFFICIENCY","completed","COMPLETED","violations","VIOLATIONS","inProgress","IN_PROGRESS","graphData","GRAPH_DATA","minPeriod","GRAPH_MIN_PERIOD","bindEvents","ctx","promise","params","autoResolve","requestData","getFilterFieldsValues","userId","callRemote","then","result","getData","fulfill","SidePanel","Instance","bindAnchors","rules","condition","options","cacheable","stopParameters","graphCircleInit","innerHTML","amchartInit","console","log","alert","document","location","href","circle","Graph","Circle","show","updateCounter","messages","chart","monthNames","shortMonthNames","m","push","message","toString","AmCharts","makeChart","type","marginLeft","language","dataProvider","graphs","title","graph_title_kpi","valueField","balloonText","lineColor","bullet","bulletBorderAlpha","bulletSize","dataDateFormat","categoryField","categoryAxis","axisAlpha","axisColor","parseDates","dateFormats","period","format","color","chartCursor","enabled","oneBalloonOnly","categoryBalloonEnabled","categoryBalloonColor","categoryBalloonDateFormat","numberFormatter","decimalSeparator","thousandsSeparator","valueAxes","gridAlpha","maximum","minimum","length","addLabel","no_data_text","validateData","moreBtn","spotlight","SpotLight","targetElement","content","targetVertex","autoSave"],"mappings":"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","file":"logic.map.js"}