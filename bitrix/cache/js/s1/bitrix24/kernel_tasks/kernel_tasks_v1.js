; /* /bitrix/js/tasks/tasks.min.js?15622056323973*/
; /* /bitrix/js/tasks/util.min.js?15622056328555*/
; /* /bitrix/js/tasks/cjstask.js?156220563220314*/
; /* /bitrix/js/tasks/core_planner_handler.min.js?156220563212733*/
; /* /bitrix/js/tasks/task-iframe-popup.min.js?156220563117646*/

; /* Start:"a:4:{s:4:"full";s:44:"/bitrix/js/tasks/tasks.min.js?15622056323973";s:6:"source";s:25:"/bitrix/js/tasks/tasks.js";s:3:"min";s:29:"/bitrix/js/tasks/tasks.min.js";s:3:"map";s:29:"/bitrix/js/tasks/tasks.map.js";}"*/
BX.namespace("Tasks");BX.mergeEx(BX.Tasks,{alert:function(e,t){var n=new BX.Promise;if(BX.Tasks.Runtime.errorPopup==null){BX.Tasks.Runtime.errorPopup=new BX.PopupWindow("task-error-popup",null,{lightShadow:true})}var i=BX.Tasks.Runtime.errorPopup;if(i===null){i=new BX.PopupWindow("task-error-popup",null,{lightShadow:true})}i.setButtons([new BX.PopupWindowButton({text:BX.message("JS_CORE_WINDOW_CLOSE"),className:"",events:{click:function(){if(BX.type.isFunction(t)){t()}this.popupWindow.close();n.resolve()}}})]);var o="";for(var s=0;s<e.length;s++){o+=BX.util.htmlspecialchars(typeof e[s].MESSAGE!=="undefined"?e[s].MESSAGE:e[s])+"<br>"}var r=BX.message("TASKS_COMMON_ERROR_OCCURRED");if(BX.type.isPlainObject(t)&&typeof t.title!="undefined"){r=t.title}i.setTitleBar({content:BX.type.isElementNode(r)?r:BX.create("div",{html:r})});i.setContent("<div style='width: 350px;padding: 10px; font-size: 12px; color: red;'>"+o+"</div>");if(window.console&&window.console.dir){window.console.dir(e)}i.show();return n},confirm:function(e,t,n){if(!BX.type.isFunction(t)){t=BX.DoNothing}n=n||{};n.ctx=n.ctx||this;var i=new BX.Promise(null,n.ctx);if(BX.Tasks.Runtime.confirmPopup==null){BX.Tasks.Runtime.confirmPopup=new BX.PopupWindow("task-confirm-popup",null,{zIndex:22e3,overlay:{opacity:50},content:"",autoHide:false,closeByEsc:false})}var o=n.isDisposable&&n.id&&"hintManager"in BX.Tasks.Util;var s=null;var r=n.buttonSet||[{text:BX.message("JS_CORE_WINDOW_CONTINUE"),type:"green",code:"continue",default:true}];if(o){if(BX.Tasks.Util.hintManager.wasDisposed(n.id)){var p=r.filter(function(e){return e.default});p=p[0]||r[0];i.fulfill(p.code);return i}else{s=BX.create("P",{style:{margin:"10px 20px 0 0"},children:[BX.create("LABEL",{children:[BX.create("INPUT",{props:{type:"checkbox",id:"bx-tasks-disposable-"+n.id}}),BX.create("SPAN",{style:{color:"gray"},text:BX.message("TASKS_COMMON_DONT_ASK_AGAIN")})]})]})}}var l=[];BX.Tasks.each(r,function(e){(function(e,t,n,o,s){e.push(new BX.PopupWindowButton({text:t.text,className:t.type=="red"?"popup-window-button-decline":"popup-window-button-accept",events:{click:function(){s.apply(n.ctx,[true]);this.popupWindow.close();if(o&&BX("bx-tasks-disposable-"+n.id).checked){BX.Tasks.Util.hintManager.disable(n.id)}i.fulfill(t.code);delete n}}}))})(l,e,n,o,t)});l.push(new BX.PopupWindowButtonLink({text:BX.message("JS_CORE_WINDOW_CANCEL"),events:{click:function(){t.apply(n.ctx,[false]);this.popupWindow.close();i.reject();delete n}}}));BX.Tasks.Runtime.confirmPopup.setButtons(l);if(typeof n.title!="undefined"){BX.Tasks.Runtime.confirmPopup.setTitleBar(BX.type.isElementNode(n.title)?n.title:BX.create("div",{html:n.title}))}e=BX.create("div",{style:{padding:"16px 12px",maxWidth:"400px",maxHeight:"400px",overflow:"hidden"},html:BX.type.isElementNode(e)?e.outerHTML:e.toString()});if(s){BX.append(s,e)}BX.Tasks.Runtime.confirmPopup.setContent(e.outerHTML);BX.Tasks.Runtime.confirmPopup.show();return i},confirmDelete:function(e){e=(e||"").toString();e=e.substr(0,1).toLowerCase()+e.substr(1);return this.confirm(BX.message("TASKS_COMMON_CONFIRM_DELETE").replace("#ENTITY_NAME#",e))},passCtx:function(e,t){return function(){var n=Array.prototype.slice.call(arguments);n.unshift(this);return e.apply(t,n)}},each:function(e,t,n){var i;n=n||this;if(BX.type.isArray(e)||e instanceof Object&&"length"in e){for(i=0;i<e.length;i++){if(e.hasOwnProperty(i)){if(t.apply(n,[e[i],i])===false){break}}}}else if(BX.type.isPlainObject(e)){for(i in e){if(e.hasOwnProperty(i)){if(t.apply(n,[e[i],i])===false){break}}}}},deReference:function(e,t){if(!BX.type.isNotEmptyString(e)){return null}e=e.split(".");var n=e.length;var i=t;for(var o=0;o<n;o++){if(e.hasOwnProperty(o)){if(typeof i=="undefined"||i===null){return null}if(!BX.type.isNotEmptyString(e[o])){return null}i=i[e[o].trim()]}else{return null}}return i}});if(typeof BX.Tasks.Runtime=="undefined"){BX.Tasks.Runtime={errorPopup:null,confirmPopup:null}}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:43:"/bitrix/js/tasks/util.min.js?15622056328555";s:6:"source";s:24:"/bitrix/js/tasks/util.js";s:3:"min";s:28:"/bitrix/js/tasks/util.min.js";s:3:"map";s:28:"/bitrix/js/tasks/util.map.js";}"*/
BX.namespace("Tasks.Util");BX.mergeEx(BX.Tasks.Util,{formatTimeAmount:function(e,t){e=parseInt(e);if(isNaN(e)){return""}var i=e<0?"-":"";e=Math.abs(e);var n=""+Math.floor(e/3600);var s=""+Math.floor(e/60)%60;var a=""+e%60;var o=function(e){return"00".substring(0,2-e.length)+e};var u=o(n)+":"+o(s);if(!t||t=="HH:MI:SS"){u+=":"+o(a)}return i+u},delay:function(e,t,i,n){e=e||BX.DoNothing;t=t||BX.DoNothing;i=i||300;n=n||this;var s=null;var a=function(){var t=arguments;s=setTimeout(function(){e.apply(n,t)},i)};a.cancel=function(){t.apply(n,[]);clearTimeout(s)};return a},showByClass:function(e){if(BX.hasClass(e,"invisible")){BX.removeClass(e,"invisible")}},hideByClass:function(e){if(!BX.hasClass(e,"invisible")){BX.addClass(e,"invisible")}},fadeToggleByClass:function(e,t,i){return BX.Tasks.Util.animateShowHide({node:e,duration:t,toShow:{opacity:100},toHide:{opacity:0},complete:i})},fadeSlideToggleByClass:function(e,t,i){return BX.Tasks.Util.animateShowHide({node:e,duration:t,toShow:{opacity:100,height:BX.Tasks.Util.getInvisibleSize(e).height},toHide:{opacity:0,height:0},complete:i})},fadeSlideHToggleByClass:function(e,t,i){return BX.Tasks.Util.animateShowHide({node:e,duration:t,toShow:{opacity:100,width:BX.Tasks.Util.getInvisibleSize(e).width},toHide:{opacity:0,width:0},complete:i})},animateShowHide:function(e){e=e||{};var t=e.node||null;if(!BX.type.isElementNode(t)){var i=new BX.Promise;i.reject();return i}var n=BX.hasClass(t,"invisible");var s=typeof e.way=="undefined"||e.way===null?n:!!e.way;if(n!=s){var i=new BX.Promise;i.resolve();return i}var a=e.toShow||{};var o=e.toHide||{};return BX.Tasks.Util.animate({node:t,duration:e.duration,start:!s?a:o,finish:s?a:o,complete:function(){BX[!s?"addClass":"removeClass"](t,"invisible");t.style.cssText="";if(BX.type.isFunction(e.complete)){e.complete.call(this)}},step:function(e){if(typeof e.opacity!="undefined"){t.style.opacity=e.opacity/100}if(typeof e.height!="undefined"){t.style.height=e.height+"px"}if(typeof e.width!="undefined"){t.style.width=e.width+"px"}}})},animate:function(e){e=e||{};var t=e.node||null;var i=new BX.Promise;if(!BX.type.isElementNode(t)){i.reject();return i}var n=e.duration||300;var s=BX.Tasks.Runtime;if(typeof s.animations=="undefined"){s.animations=[]}var a=null;for(var o in s.animations){if(s.animations[o].node==t){a=s.animations[o];break}}if(a===null){var u=new BX.easing({duration:n,start:e.start,finish:e.finish,transition:BX.easing.transitions.linear,step:e.step,complete:function(){for(var n in s.animations){if(s.animations[n].node==t){s.animations[n].easing=null;s.animations[n].node=null;s.animations.splice(n,1);break}}t=null;a=null;e.complete.call(this);if(i){i.fulfill()}}});a={node:t,easing:u};s.animations.push(a)}else{a.easing.stop();if(i){i.reject()}}a.easing.animate();return i},getInvisibleSize:function(e){var t=BX.hasClass(e,"invisible");if(t){BX.removeClass(e,"invisible")}var i=BX.pos(e);if(t){BX.addClass(e,"invisible")}return i},isEnter:function(e){return this.getKeyFromEvent(e)==13},isEsc:function(e){return this.getKeyFromEvent(e)==27},getKeyFromEvent:function(e){e=e||window.event;return e.keyCode||e.which},filterFocusBlur:function(e,t,i,n){if(!BX.type.isElementNode(e)){return false}var s=false;t=t||BX.DoNothing;i=i||BX.DoNothing;n=n||50;var a=function(e,a){if(e){if(s!=false){clearTimeout(s);s=false}else{t.apply(this,a)}}else{s=setTimeout(function(){s=false;i.apply(this,a)},n)}};BX.bind(e,"blur",function(){a.apply(this,[false,arguments])});BX.bind(e,"focus",function(){a.apply(this,[true,arguments])});return true},bindInstantChange:function(e,t,i){if(!BX.type.isElementNode(e)){return BX.DoNothing}i=i||e;var n=e.value;var s=BX.debounce(function(s){if(e.value.toString()!=n.toString()){t.apply(i,arguments);n=e.value}},3,i);BX.bind(e,"input",s);BX.bind(e,"keyup",s);BX.bind(e,"change",s)},disable:function(e){if(BX.type.isElementNode(e)){e.setAttribute("disabled","disabled")}},enable:function(e){if(BX.type.isElementNode(e)){e.removeAttribute("disabled")}},getMessagePlural:function(e,t){var i,n;n=BX.message("LANGUAGE_ID");e=parseInt(e);if(e<0){e=-1*e}if(n){switch(n){case"de":case"en":i=e!==1?1:0;break;case"ru":case"ua":i=e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2;break;default:i=1;break}}else{i=1}if(BX.type.isArray(t)){return t[i]}return BX.message(t+"_PLURAL_"+i)},fireGlobalTaskEvent:function(e,t,i,n){if(!e){return false}e=e.toString();i=i||{};if(e!="ADD"&&e!="UPDATE"&&e!="UPDATE_STAGE"&&e!="DELETE"&&e!="NOOP"){return false}var s=[e,{task:t,taskUgly:n,options:i}];BX.onCustomEvent(window,"tasksTaskEvent",s);if(window!=window.top){window.top.BX.onCustomEvent(window.top,"tasksTaskEvent",s)}return true}});BX.Tasks.Util.hintManager={bindHelp:function(e){var t={className:"js-id-hint-help"};BX.bindDelegate(e,"mouseover",t,BX.Tasks.passCtx(this.onHelpShow,this));BX.bindDelegate(e,"mouseout",t,BX.Tasks.passCtx(this.onHelpHide,this))},showDisposable:function(e,t,i,n){if(!BX.type.isPlainObject(n)){n={}}if(!("closeLabel"in n)){n.closeLabel=BX.message("TASKS_COMMON_DONT_SHOW_AGAIN")}if(!("autoHide"in n)){n.autoHide=true}this.show(e,t,false,i,n)},show:function(e,t,i,n,s){n=n||BX.util.hashCode((Math.random()*100).toString()).toString();s=s||{};var a=BX.Tasks.Runtime;a.hintPopup=a.hintPopup||{};if(typeof a.hintPopup[n]=="undefined"){a.hintPopup[n]={popup:null,disable:false}}if(this.wasDisposed(n)){return}if(a.hintPopup[n].popup==null){var o=[];if(BX.type.isNotEmptyString(s.title)){o.push(BX.create("SPAN",{attrs:{className:"task-hint-popup-title"},text:s.title}))}if(!BX.type.isNotEmptyString(t)){t=""}t=BX.util.htmlspecialchars(t).replace(/#BR#/g,"<br />");o.push(BX.create("P",{html:t,style:{margin:"10px 20px 10px 5px"}}));if(BX.type.isNotEmptyString(s.closeLabel)){o.push(BX.create("P",{style:{margin:"10px 20px 10px 5px"},children:[BX.create("A",{props:{href:"javascript:void(0)"},text:s.closeLabel,events:{click:function(){BX.Tasks.Util.hintManager.disable(n);BX.Tasks.Util.hintManager.hide(n)}}})]}))}a.hintPopup[n].popup=BX.PopupWindowManager.create(n,e,{closeByEsc:false,closeIcon:true,angle:{},autoHide:s.autoHide===true,offsetLeft:50,offsetTop:5,events:{onPopupClose:BX.delegate(this.onViewModeHintClose,this)},content:BX.create("DIV",{attrs:{className:"task-hint-popup-contents"},children:o})})}a.hintPopup[n].popup.show()},wasDisposed:function(e){BX.Tasks.Runtime.hintPopup=BX.Tasks.Runtime.hintPopup||{};BX.Tasks.Runtime.hintPopup[e]=BX.Tasks.Runtime.hintPopup[e]||{};return BX.Tasks.Runtime.hintPopup[e].disable},hide:function(e){try{BX.Tasks.Runtime.hintPopup[e].popup.close()}catch(t){}},disable:function(e){BX.Tasks.Runtime.hintPopup=BX.Tasks.Runtime.hintPopup||{};BX.Tasks.Runtime.hintPopup[e]=BX.Tasks.Runtime.hintPopup[e]||{};BX.Tasks.Runtime.hintPopup[e].disable=true;BX.userOptions.save("tasks","task_hints",e,"N",false)},disableSeveral:function(e){if(BX.type.isPlainObject(e)){var t=BX.Tasks.Runtime;t.hintPopup=t.hintPopup||{};for(var i in e){t.hintPopup[i]=t.hintPopup[i]||{};t.hintPopup[i].disable=!e[i]}}},onHelpShow:function(e){var t=BX.data(e,"hint-enabled");if(t!==null&&typeof t!="undefined"&&t!="1"){return}var i=BX.data(e,"hint-text");if(!i){i=e.innerHTML}if(BX.type.isNotEmptyString(i)){this.onHelpHide();var n=new BX.PopupWindow("tasks-generic-help-popup",e,{lightShadow:true,autoHide:false,darkMode:true,offsetLeft:0,offsetTop:2,bindOptions:{position:"top"},zIndex:200,events:{onPopupClose:function(){this.destroy();BX.Tasks.Runtime.helpWindow=null}},content:BX.create("div",{attrs:{style:"padding-right: 5px; width: 250px;"},html:i})});n.setAngle({offset:13,position:"bottom"});n.show();BX.Tasks.Runtime.helpWindow=n}},onHelpHide:function(){if(BX.Tasks.Runtime.helpWindow){BX.Tasks.Runtime.helpWindow.close()}}};BX.Tasks.Util.MouseTracker=function(){this.coords={x:0,y:0};BX.bind(document,"mousemove",BX.delegate(function(e){this.coords={x:e.pageX?e.pageX:e.clientX?e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)-document.documentElement.clientLeft:0,y:e.pageY?e.pageY:e.clientY?e.clientY+(document.documentElement.scrollTop||document.body.scrollTop)-document.documentElement.clientTop:0}},this))};BX.Tasks.Util.MouseTracker.getCoordinates=function(){return BX.clone(BX.Tasks.Util.MouseTracker.getInstance().coords)};BX.Tasks.Util.MouseTracker.getInstance=function(){if(typeof BX.Tasks.Runtime.mouseTracker=="undefined"){BX.Tasks.Runtime.mouseTracker=new BX.Tasks.Util.MouseTracker}return BX.Tasks.Runtime.mouseTracker};if(typeof BX.Tasks.Runtime=="undefined"){BX.Tasks.Runtime={}}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:43:"/bitrix/js/tasks/cjstask.js?156220563220314";s:6:"source";s:27:"/bitrix/js/tasks/cjstask.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 *This file is a javascript helper that contains some commonly-used functions
 */

(function() {

if (BX.CJSTask)
	return;

BX.CJSTask = {
	ajaxUrl    : '/bitrix/components/bitrix/tasks.iframe.popup/ajax.php?SITE_ID=' + BX.message('SITE_ID'),
	sequenceId : 0,
	timers     : {}
};

BX.CJSTask.addTimeToDate = function(date, defaultTime, params)
{
	if(typeof date == 'undefined' || typeof defaultTime == 'undefined')
		return date;

	if(typeof params == 'undefined')
		params = {onlyIfEmpty: true};

	if(params.onlyIfEmpty && (parseInt(date.getHours()) != 0 || parseInt(date.getMinutes()) != 0))
		return date;
	
	if(typeof defaultTime.h != 'undefined')
		date.setHours(parseInt(defaultTime.h));

	if(typeof defaultTime.m != 'undefined')
		date.setMinutes(defaultTime.m);

	if(typeof defaultTime.s != 'undefined')
		date.setSeconds(defaultTime.s);

	return date;
}

// assume datetime is in FORMAT_DATETIME format
// defaultTime should be in {h: 0, m: 0, s:0} object notation
BX.CJSTask.addTimeToDateTime = function(datetime, defaultTime, params)
{
	if(typeof datetime == 'undefined' || typeof defaultTime == 'undefined')
		return datetime;

	datetime = datetime.toString();

	if(datetime.length > 0)
	{
		var date = BX.CJSTask.addTimeToDate(BX.parseDate(datetime), defaultTime, params);

		datetime = BX.date.format(BX.date.convertBitrixFormat(BX.message('FORMAT_DATETIME')), date);
	}

	return datetime;
}

BX.CJSTask.ui = {};

BX.CJSTask.ui.extractDefaultTimeFromDataAttribute = function(node)
{
	defaultTime = {
		h: 19,
		m: 0,
		s: 0
	};

	if(BX.type.isDomNode(node))
	{
		var defaultHour = BX.data(node, 'default-hour');
		var defaultMinute = BX.data(node, 'default-minute');

		if(typeof defaultHour != 'undefined' && typeof defaultMinute != 'undefined')
		{
			defaultTime.h = parseInt(defaultHour);
			defaultTime.m = parseInt(defaultMinute);
		}
	}

	return defaultTime;
}

BX.CJSTask.ui.getInputDateTimeValue = function(node)
{
	var defaultTime = BX.CJSTask.ui.extractDefaultTimeFromDataAttribute(node);
	var curDate = new Date();

	curDayEveningTime = new Date(
		curDate.getFullYear(),
		curDate.getMonth(),
		curDate.getDate(),
		defaultTime.h,
		defaultTime.m,
		defaultTime.s
	);

	if (!!node.value)
		var selectedDate = node.value;
	else
		var selectedDate = BX.date.convertToUTC(curDayEveningTime); // strip time zone

	return selectedDate;
}

BX.CJSTask.getMessagePlural = function(n, msgId)
{
	var pluralForm, langId;

	langId = BX.message('LANGUAGE_ID');
	n = parseInt(n);

	if (n < 0)
		n = (-1) * n;

	if (langId)
	{
		switch (langId)
		{
			case 'de':
			case 'en':
				pluralForm = ((n !== 1) ? 1 : 0);
			break;

			case 'ru':
			case 'ua':
				pluralForm = ( ((n%10 === 1) && (n%100 !== 11)) ? 0 : (((n%10 >= 2) && (n%10 <= 4) && ((n%100 < 10) || (n%100 >= 20))) ? 1 : 2) );
			break;

			default:
				pluralForm = 1;
			break;
		}
	}
	else
		pluralForm = 1;

	return (BX.message(msgId + '_PLURAL_' + pluralForm));
};

// a bug: when you open popup window multiple times, inside menu item callbacks the variable "window" falls to null because of iframe document replace
BX.CJSTask.fixWindow = function(fn)
{
    var winTop = window.top;
	var win = window;

    return function()
    {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(win, winTop);
        fn.apply(this, args);
    };
};

BX.CJSTask.createItem = function(newTaskData, params)
{
	var params = params || null;
	var columnsIds = null;

	if (params.columnsIds)
		columnsIds = params.columnsIds;

	var postData = {
		sessid : BX.message('bitrix_sessid'),
		batch  : [
			{
				operation : 'CTaskItem::add()',
				taskData  :  newTaskData
			},
			{
				operation : 'CTaskItem::getTaskData()',
				taskData  : {
					ID : '#RC#$arOperationsResults#-1#justCreatedTaskId'
				}
			},
			{
				operation : 'CTaskItem::getAllowedTaskActions()',
				taskData  : {
					ID : '#RC#$arOperationsResults#-1#returnValue#ID'
				}
			},
			{
				operation : 'NOOP'
			},
			{
				operation : 'CTaskItem::getAllowedTaskActionsAsStrings()',
				taskData  : {
					ID : '#RC#$arOperationsResults#-3#returnValue#ID'
				}
			},
			{
				operation : 'tasksRenderJSON() && tasksRenderListItem()',
				taskData  : {
					ID : '#RC#$arOperationsResults#-4#returnValue#ID'
				},
				columnsIds : columnsIds
			}
		]
	};

	BX.ajax({
		method      : 'POST',
		dataType    : 'json',
		url         :  BX.CJSTask.ajaxUrl,
		data        :  postData,
		processData :  true,
		onsuccess   : (function(params) {
			var callbackOnSuccess = false;
			var callbackOnFailure = false;

			if (params)
			{
				if (params.callback)
					callbackOnSuccess = params.callback;

				if (params.callbackOnFailure)
					callbackOnFailure = params.callbackOnFailure;
			}

			return function(reply) {
				if ((reply.status === 'success') && (!!callbackOnSuccess))
				{
					var precachedData = {
						taskData                    : reply['data'][1]['returnValue'],
						allowedTaskActions          : reply['data'][2]['returnValue'],
						allowedTaskActionsAsStrings : reply['data'][4]['returnValue']
					}

					var oTask = new BX.CJSTask.Item(
						reply['data'][1]['returnValue']['ID'],
						precachedData
					);

					var legacyDataFormat = BX.parseJSON(reply['data'][5]['returnValue']['tasksRenderJSON']);
					var legacyHtmlTaskItem = reply['data'][5]['returnValue']['tasksRenderListItem'];

					callbackOnSuccess(oTask, precachedData, legacyDataFormat, legacyHtmlTaskItem);
				}
				else if ((reply.status !== 'success') && (!!callbackOnFailure))
				{
					var errMessages = [];
					var errorsCount = 0;

					if (
						(reply.repliesCount > 0)
						&& reply.data[reply.repliesCount - 1].hasOwnProperty('errors')
					)
					{
						errorsCount = reply.data[reply.repliesCount - 1].errors.length;

						for (var i = 0; i < errorsCount; i++)
							errMessages.push(reply.data[reply.repliesCount - 1].errors[i]['text']);
					}

					callbackOnFailure({
						rawReply    : reply,
						status      : reply.status,
						errMessages : errMessages
					});
				}
			}
		})(params)
	});
};


BX.CJSTask.Item = function(taskId, precachedData)
{
	if ( ! taskId )
		throw ('taskId must be set');

	if ( ! (taskId >= 1) )
		throw ('taskId must be >= 1');

	this.taskId = taskId;
	this.cachedData = {
		taskData                    : false,
		allowedTaskActions          : false,
		allowedTaskActionsAsStrings : false
	};

	if (precachedData)
	{
		if (precachedData.taskData)
			this.cachedData.taskData = precachedData.taskData;

		if (precachedData.allowedTaskActions)
			this.cachedData.allowedTaskActions = precachedData.allowedTaskActions;

		if (precachedData.allowedTaskActionsAsStrings)
			this.cachedData.allowedTaskActionsAsStrings = precachedData.allowedTaskActionsAsStrings;
	}


	this.getCachedData = function()
	{
		return (this.cachedData);
	};


	this.refreshCache = function(params)
	{
		var params = params || null;

		var postData = {
			sessid : BX.message('bitrix_sessid'),
			batch  : [
				{
					operation : 'CTaskItem::getTaskData()',
					taskData  : {
						ID : this.taskId
					}
				},
				{
					operation : 'CTaskItem::getAllowedTaskActions()',
					taskData  : {
						ID : this.taskId
					}
				},
				{
					operation : 'CTaskItem::getAllowedTaskActionsAsStrings()',
					taskData  : {
						ID : this.taskId
					}
				}
			]
		};

		BX.ajax({
			method      : 'POST',
			dataType    : 'json',
			url         :  BX.CJSTask.ajaxUrl,
			data        :  postData,
			processData :  true,
			onsuccess   : (function(params, objTask) {
				var callback = false;

				if (params && params.callback)
					callback = params.callback;

				return function(reply) {
					objTask.cachedData = {
						taskData                    : reply['data'][0]['returnValue'],
						allowedTaskActions          : reply['data'][1]['returnValue'],
						allowedTaskActionsAsStrings : reply['data'][2]['returnValue']
					}

					if (!!callback)
						callback(objTask.cachedData);
				}
			})(params, this)
		});
	};


	this.complete = function(params)
	{
		var postData = {
			sessid : BX.message('bitrix_sessid'),
			batch  : [
				{
					operation : 'CTaskItem::complete()',
					taskData  : {
						ID : this.taskId
					}
				},
				{
					operation : 'CTaskItem::getTaskData()',
					taskData  : {
						ID : this.taskId
					}
				},
				{
					operation : 'CTaskItem::getAllowedTaskActions()',
					taskData  : {
						ID : '#RC#$arOperationsResults#-1#returnValue#ID'
					}
				},
				{
					operation : 'CTaskItem::getAllowedTaskActionsAsStrings()',
					taskData  : {
						ID : '#RC#$arOperationsResults#-2#returnValue#ID'
					}
				}
			]
		};

		BX.ajax({
			method      : 'POST',
			dataType    : 'json',
			url         :  BX.CJSTask.ajaxUrl,
			data        :  postData,
			processData :  true,
			onsuccess   : (function(params) {
				var callbackOnSuccess = false;
				var callbackOnFailure = false;

				if (params)
				{
					if (params.callbackOnSuccess)
						callbackOnSuccess = params.callbackOnSuccess;

					if (params.callbackOnFailure)
						callbackOnFailure = params.callbackOnFailure;
				}

				return function(reply) {
					if ((reply.status === 'success') && (!!callbackOnSuccess))
					{
						var precachedData = {
							taskData                    : reply['data'][1]['returnValue'],
							allowedTaskActions          : reply['data'][2]['returnValue'],
							allowedTaskActionsAsStrings : reply['data'][3]['returnValue']
						}

						var oTask = new BX.CJSTask.Item(
							reply['data'][1]['returnValue']['ID'],
							precachedData
						);

						callbackOnSuccess(oTask);
					}
					else if ((reply.status !== 'success') && (!!callbackOnFailure))
					{
						var errMessages = [];
						var errorsCount = 0;

						if (
							(reply.repliesCount > 0)
							&& reply.data[reply.repliesCount - 1].hasOwnProperty('errors')
						)
						{
							errorsCount = reply.data[reply.repliesCount - 1].errors.length;

							for (var i = 0; i < errorsCount; i++)
								errMessages.push(reply.data[reply.repliesCount - 1].errors[i]['text']);
						}

						callbackOnFailure({
							rawReply    : reply,
							status      : reply.status,
							errMessages : errMessages
						});
					}
				}
			})(params)
		});
	};


	this.startExecutionOrRenewAndStart = function(params)
	{
		var postData = {
			sessid : BX.message('bitrix_sessid'),
			batch  : [
				{
					operation : 'CTaskItem::startExecutionOrRenewAndStart',
					taskData  : {
						ID : this.taskId
					}
				},
				{
					operation : 'CTaskItem::getTaskData()',
					taskData  : {
						ID : this.taskId
					}
				},
				{
					operation : 'CTaskItem::getAllowedTaskActions()',
					taskData  : {
						ID : '#RC#$arOperationsResults#-1#returnValue#ID'
					}
				},
				{
					operation : 'CTaskItem::getAllowedTaskActionsAsStrings()',
					taskData  : {
						ID : '#RC#$arOperationsResults#-2#returnValue#ID'
					}
				}
			]
		};

		BX.ajax({
			method      : 'POST',
			dataType    : 'json',
			url         :  BX.CJSTask.ajaxUrl,
			data        :  postData,
			processData :  true,
			onsuccess   : (function(params) {
				var callbackOnSuccess = false;
				var callbackOnFailure = false;

				if (params)
				{
					if (params.callbackOnSuccess)
						callbackOnSuccess = params.callbackOnSuccess;

					if (params.callbackOnFailure)
						callbackOnFailure = params.callbackOnFailure;
				}

				return function(reply) {
					if ((reply.status === 'success') && (!!callbackOnSuccess))
					{
						var precachedData = {
							taskData                    : reply['data'][1]['returnValue'],
							allowedTaskActions          : reply['data'][2]['returnValue'],
							allowedTaskActionsAsStrings : reply['data'][3]['returnValue']
						}

						var oTask = new BX.CJSTask.Item(
							reply['data'][1]['returnValue']['ID'],
							precachedData
						);

						callbackOnSuccess(oTask);
					}
					else if ((reply.status !== 'success') && (!!callbackOnFailure))
					{
						var errMessages = [];
						var errorsCount = 0;

						if (
							(reply.repliesCount > 0)
							&& reply.data[reply.repliesCount - 1].hasOwnProperty('errors')
						)
						{
							errorsCount = reply.data[reply.repliesCount - 1].errors.length;

							for (var i = 0; i < errorsCount; i++)
								errMessages.push(reply.data[reply.repliesCount - 1].errors[i]['text']);
						}

						callbackOnFailure({
							rawReply    : reply,
							status      : reply.status,
							errMessages : errMessages
						});
					}
				}
			})(params)
		});
	};


	/**
	 * data is array with elements MINUTES, COMMENT_TEXT
	 */
	this.addElapsedTime = function(data, callbacks)
	{
		var elapsedTimeData = {
			TASK_ID      : this.taskId,
			MINUTES      : data.MINUTES,
			COMMENT_TEXT : data.COMMENT_TEXT
		};

		var batchId = BX.CJSTask.batchOperations(
			[
				{
					operation       : 'CTaskItem::addElapsedTime()',
					elapsedTimeData :  elapsedTimeData
				}
			],
			callbacks
		);

		return (batchId);
	};


	this.checklistAddItem = function(title, callbacks)
	{
		var arFields = {
			TITLE : title
		};

		var batchId = BX.CJSTask.batchOperations(
			[
				{
					operation     : 'CTaskCheckListItem::add()',
					checklistData :  arFields,
					taskId        :  this.taskId
				}
			],
			callbacks
		);

		return (batchId);
	};


	this.checklistRename = function(id, newTitle, callbacks)
	{
		var arFields = {
			TITLE : newTitle
		};

		var batchId = BX.CJSTask.batchOperations(
			[
				{
					operation     : 'CTaskCheckListItem::update()',
					checklistData :  arFields,
					itemId        :  id,
					taskId        :  this.taskId
				}
			],
			callbacks
		);

		return (batchId);
	};


	this.checklistComplete = function(id, callbacks)
	{
		var batchId = BX.CJSTask.batchOperations(
			[
				{
					operation : 'CTaskCheckListItem::complete()',
					itemId    :  id,
					taskId    :  this.taskId
				}
			],
			callbacks
		);

		return (batchId);
	};


	this.checklistRenew = function(id, callbacks)
	{
		var batchId = BX.CJSTask.batchOperations(
			[
				{
					operation : 'CTaskCheckListItem::renew()',
					itemId    :  id,
					taskId    :  this.taskId
				}
			],
			callbacks
		);

		return (batchId);
	};


	this.checklistDelete = function(id, callbacks)
	{
		var batchId = BX.CJSTask.batchOperations(
			[
				{
					operation : 'CTaskCheckListItem::delete()',
					itemId    :  id,
					taskId    :  this.taskId
				}
			],
			callbacks
		);

		return (batchId);
	};


	this.checklistMoveAfterItem = function(id, insertAfterItemId, callbacks)
	{
		var batchId = BX.CJSTask.batchOperations(
			[
				{
					operation         : 'CTaskCheckListItem::moveAfterItem()',
					itemId            :  id,
					taskId            :  this.taskId,
					insertAfterItemId :  insertAfterItemId
				}
			],
			callbacks
		);

		return (batchId);
	};


	this.stopWatch = function(callbacks)
	{
		var batchId = BX.CJSTask.batchOperations(
			[
				{
					operation : 'CTaskItem::stopWatch()',
					taskData  : {
						ID : this.taskId
					}
				}
			],
			callbacks
		);

		return (batchId);
	};


	this.startWatch = function(callbacks)
	{
		var batchId = BX.CJSTask.batchOperations(
			[
				{
					operation : 'CTaskItem::startWatch()',
					taskData  : {
						ID : this.taskId
					}
				}
			],
			callbacks
		);

		return (batchId);
	};
};


BX.CJSTask.TimerManager = function(taskId)
{
	if ( ! taskId )
		throw ('taskId must be set');

	if ( ! (taskId >= 1) )
		throw ('taskId must be >= 1');

	this.taskId = taskId;

	this.__private = {
		startOrStop : function(operation, taskId, callbacks)
		{
			var batchId = BX.CJSTask.batchOperations(
				[
					{
						operation : operation,
						taskData  : {
							ID : taskId
						}
					},
					{
						operation : 'CTaskItem::getTaskData()',
						taskData  : {
							ID : '#RC#$arOperationsResults#-1#requestedTaskId'
						}
					},
					{
						operation : 'CTaskTimerManager::getLastTimer()'
					}
				],
				callbacks
			);

			return (batchId);
		}
	};


	this.start = function(callbacks)
	{
		var batchId = this.__private.startOrStop('CTaskTimerManager::start()', this.taskId, callbacks);
		return (batchId);
	};


	this.stop = function(callbacks)
	{
		var batchId = this.__private.startOrStop('CTaskTimerManager::stop()', this.taskId, callbacks);
		return (batchId);
	};
};


BX.CJSTask.setTimerCallback = function(timerCodeName, callback, milliseconds)
{
	if (BX.CJSTask[timerCodeName])
	{
		window.clearInterval(BX.CJSTask[timerCodeName]);
		BX.CJSTask[timerCodeName] = null;
	}

	if (callback !== null)
		BX.CJSTask[timerCodeName] = window.setInterval(callback, milliseconds);
};


BX.CJSTask.formatUsersNames = function(arUsersIds, params)
{
	var params = params || null;

	var userId = null;
	var batch  = [];

	for (var key in arUsersIds)
	{
		userId = arUsersIds[key];

		batch.push({
			operation : 'CUser::FormatName()',
			userData  :  { ID : userId }
		});
	}

	var postData = {
		sessid : BX.message('bitrix_sessid'),
		batch  : batch
	};

	BX.ajax({
		method      : 'POST',
		dataType    : 'json',
		url         :  BX.CJSTask.ajaxUrl,
		data        :  postData,
		processData :  true,
		onsuccess   : (function(params) {
			var callback = false;

			if (params && params.callback)
				callback = params.callback;

			return function(reply) {
				if (!!callback)
				{
					var replyItem = null;
					var result = {};
					var repliesCount = reply['repliesCount'];

					for (var i = 0; i < repliesCount; i++)
					{
						replyItem = reply['data'][i];
						result['u' + replyItem['requestedUserId']] = replyItem['returnValue'];
					}

					callback(result);
				}
			}
		})(params)
	});
}


BX.CJSTask.getGroupsData = function(arGroupsIds, params)
{
	var params = params || null;

	var groupId = null;
	var batch   = [];

	for (var key in arGroupsIds)
	{
		groupId = arGroupsIds[key];

		batch.push({
			operation : 'CSocNetGroup::GetByID()',
			groupData  :  { ID : groupId }
		});
	}

	var postData = {
		sessid : BX.message('bitrix_sessid'),
		batch  : batch
	};

	BX.ajax({
		method      : 'POST',
		dataType    : 'json',
		url         :  BX.CJSTask.ajaxUrl,
		data        :  postData,
		processData :  true,
		onsuccess   : (function(params) {
			var callback = false;

			if (params && params.callback)
				callback = params.callback;

			return function(reply) {
				if (!!callback)
				{
					var replyItem = null;
					var result = {};
					var repliesCount = reply['repliesCount'];

					for (var i = 0; i < repliesCount; i++)
					{
						replyItem = reply['data'][i];
						result[replyItem['requestedGroupId']] = replyItem['returnValue'];
					}

					callback(result);
				}
			}
		})(params)
	});
}


BX.CJSTask.batchOperations = function(batch, callbacks, sync)
{
	var callbacks = callbacks || null;
	var sync = sync || false;
	var batchId   = 'batch_sequence_No_' + (++BX.CJSTask.sequenceId);

	var postData = {
		sessid  : BX.message('bitrix_sessid'),
		batch   : batch,
		batchId : batchId
	};

	BX.ajax({
		method      : 'POST',
		dataType    : 'json',
		url         :  BX.CJSTask.ajaxUrl,
		data        :  postData,
		async       :  !sync,
		processData :  true,
		onsuccess   : (function(callbacks) {
			var callbackOnSuccess = false;
			var callbackOnFailure = false;

			if (callbacks)
			{
				if (callbacks.callbackOnSuccess)
					callbackOnSuccess = callbacks.callbackOnSuccess;

				if (callbacks.callbackOnFailure)
					callbackOnFailure = callbacks.callbackOnFailure;
			}

			return function(reply) {
				if ((reply.status === 'success') && (!!callbackOnSuccess))
				{
					callbackOnSuccess({
						rawReply : reply,
						status   : reply.status
					});
				}
				else if ((reply.status !== 'success') && (!!callbackOnFailure))
				{
					var errMessages = [];
					var errorsCount = 0;

					if (
						(reply.repliesCount > 0)
						&& reply.data[reply.repliesCount - 1].hasOwnProperty('errors')
					)
					{
						errorsCount = reply.data[reply.repliesCount - 1].errors.length;

						for (var i = 0; i < errorsCount; i++)
							errMessages.push(reply.data[reply.repliesCount - 1].errors[i]['text']);
					}

					callbackOnFailure({
						rawReply    : reply,
						status      : reply.status,
						errMessages : errMessages
					});
				}
			}
		})(callbacks)
	});

	return (batchId);
}

})();

/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/bitrix/js/tasks/core_planner_handler.min.js?156220563212733";s:6:"source";s:40:"/bitrix/js/tasks/core_planner_handler.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(){if(!!window.BX.CTasksPlannerHandler)return;var t=window.BX,e={"-1":"overdue","-2":"new",1:"new",2:"accepted",3:"in-progress",4:"waiting",5:"completed",6:"delayed",7:"declined"},s=null;t.addTaskToPlanner=function(t){s.addTask({id:t})};t.CTasksPlannerHandler=function(){this.TASKS=null;this.TASKS_LIST=null;this.ADDITIONAL={};this.MANDATORY_UFS=null;this.TASK_CHANGES={add:[],remove:[]};this.TASK_CHANGES_TIMEOUT=null;this.TASKS_WND=null;this.DATA_TASKS=null;this.PLANNER=null;this.taskTimerSwitch=false;this.timerTaskId=0;this.onTimeManDataRecievedEventDetected=false;t.addCustomEvent("onPlannerDataRecieved",t.proxy(this.draw,this));t.addCustomEvent("onTaskTimerChange",t.proxy(this.onTaskTimerChange,this))};t.CTasksPlannerHandler.prototype.formatTime=function(t,e){var s="00";var a="";var i="";var r=""+t%60;var n=["","",""];if(t>=0){a+=Math.floor(t/3600);i+=Math.floor(t/60)%60;var o=[a,i,r]}else{a+=Math.ceil(t/3600);i+=Math.ceil(t/60)%60;o=[a,i,r];Object.keys(o).forEach(function(t){o[t]=o[t].replace("-","");if(o[t]!=="0"){n[t]="-"}})}var T=n[0]+s.substring(0,2-o[0].length)+o[0]+":"+n[1]+s.substring(0,2-o[1].length)+o[1];if(e){T+=":"+n[2]+s.substring(0,2-o[2].length)+o[2]}return T};t.CTasksPlannerHandler.prototype.draw=function(e,s){if(typeof s.MANDATORY_UFS!=="undefined")this.MANDATORY_UFS=s.MANDATORY_UFS;if(!s.TASKS_ENABLED)return;this.PLANNER=e;if(null==this.TASKS){this.TASKS=t.create("DIV");this.TASKS.appendChild(t.create("DIV",{props:{className:"tm-popup-section tm-popup-section-tasks"},children:[t.create("SPAN",{props:{className:"tm-popup-section-text"},text:t.message("JS_CORE_PL_TASKS")}),t.create("span",{props:{className:"tm-popup-section-right-link"},events:{click:t.proxy(this.showTasks,this)},text:t.message("JS_CORE_PL_TASKS_CHOOSE")})]}));this.TASKS.appendChild(t.create("DIV",{props:{className:"tm-popup-tasks"},children:[this.TASKS_LIST=t.create("div",{props:{className:"tm-task-list"}}),this.drawTasksForm(t.proxy(this.addTask,this))]}))}else{t.cleanNode(this.TASKS_LIST)}if(s.TASKS&&s.TASKS.length>0){var a=null;var i="";var r=[];var n=0;var o=0;var T="";var l=null;t.removeClass(this.TASKS,"tm-popup-tasks-empty");for(var d=0,S=s.TASKS.length;d<S;d++){l=s.TASKS[d].STATUS==4||s.TASKS[d].STATUS==5;if(l)i=" tm-task-item-done";else i="";r=[];r.push(t.create("input",{props:{className:"tm-task-checkbox",type:"checkbox",checked:l},events:{click:function(e){return function(){var s=new t.CJSTask.Item(e.ID);if(this.checked){s.complete({callbackOnSuccess:function(){if(t.TasksTimerManager)t.TasksTimerManager.reLoadInitTimerDataFromServer()}})}else{s.startExecutionOrRenewAndStart({callbackOnSuccess:function(){if(t.TasksTimerManager)t.TasksTimerManager.reLoadInitTimerDataFromServer()}})}}}(s.TASKS[d])}}));var p=s.TASKS[d];if(p.ALLOW_TIME_TRACKING=="Y"&&(s.TASKS[d].TIME_SPENT_IN_LOGS>0||s.TASKS[d].TIME_ESTIMATE>0)){n=parseInt(s.TASKS[d].TIME_SPENT_IN_LOGS);o=parseInt(s.TASKS[d].TIME_ESTIMATE);if(isNaN(n)){n=0}if(isNaN(o)){o=0}T=this.formatTime(n,true);if(o>0){T=T+" / "+this.formatTime(o)}}else{T=""}r.push(t.create("a",{attrs:{href:"javascript:void(0)"},props:{className:"tm-task-name"+(T===""?" tm-task-no-timer":"")},text:s.TASKS[d].TITLE,events:{click:t.proxy(this.showTask,this)}}));if(T!==""){r.push(t.create("SPAN",{props:{className:"tm-task-time",id:"tm-task-time-"+s.TASKS[d].ID},text:T}))}r.push(t.create("SPAN",{props:{className:"tm-task-item-menu"},events:{click:function(e,s,a){return function(){var i=[];var r="task-tm-item-entry-menu-"+e.ID;if(s&&s.TASK_ID==e.ID&&s.TIMER_STARTED_AT>0){i.push({text:t.message("JS_CORE_PL_TASKS_STOP_TIMER"),className:"menu-popup-item-hold",onclick:function(s){t.TasksTimerManager.stop(e.ID);this.popupWindow.close()}})}else{if(e.ALLOW_TIME_TRACKING==="Y"){i.push({text:t.message("JS_CORE_PL_TASKS_START_TIMER"),className:"menu-popup-item-begin",onclick:function(s){t.TasksTimerManager.start(e.ID);this.popupWindow.close()}})}}i.push({text:t.message("JS_CORE_PL_TASKS_MENU_REMOVE_FROM_PLAN"),className:"menu-popup-item-decline",onclick:function(t){a.removeTask(t,e.ID);this.popupWindow.close()}});var n=t.PopupMenu.getMenuById(r);if(n!==null){t.PopupMenu.destroy(r)}else{n=t.PopupMenu.show("task-tm-item-entry-menu-"+e.ID,this,i,{autoHide:true,offsetTop:4,events:{onPopupClose:function(t){}}})}}}(s.TASKS[d],s.TASKS_TIMER,this)}}));var h=this.TASKS_LIST.appendChild(t.create("div",{props:{id:"tm-task-item-"+s.TASKS[d].ID,className:"tm-task-item "+i,bx_task_id:s.TASKS[d].ID},children:r}));if(s.TASK_LAST_ID&&s.TASKS[d].ID==s.TASK_LAST_ID){a=h}}if(a){setTimeout(t.delegate(function(){if(a.offsetTop<this.TASKS_LIST.scrollTop||a.offsetTop+a.offsetHeight>this.TASKS_LIST.scrollTop+this.TASKS_LIST.offsetHeight){this.TASKS_LIST.scrollTop=a.offsetTop-parseInt(this.TASKS_LIST.offsetHeight/2)}},this),10)}}else{t.addClass(this.TASKS,"tm-popup-tasks-empty")}this.DATA_TASKS=t.clone(s.TASKS);e.addBlock(this.TASKS,200);e.addAdditional(this.drawAdditional())};t.CTasksPlannerHandler.prototype.drawAdditional=function(){if(!this.TASK_ADDITIONAL){this.ADDITIONAL.TASK_TEXT=t.create("SPAN",{props:{className:"tm-info-bar-text-inner"}});this.ADDITIONAL.TASK_TIMER=t.create("SPAN",{props:{className:"tm-info-bar-time"}});this.TASK_ADDITIONAL=t.create("DIV",{props:{className:"tm-info-bar"},children:[t.create("SPAN",{props:{title:t.message("JS_CORE_PL_TASKS_START_TIMER"),className:"tm-info-bar-btn tm-info-bar-btn-play"},events:{click:t.proxy(this.timerStart,this)}}),t.create("SPAN",{props:{title:t.message("JS_CORE_PL_TASKS_STOP_TIMER"),className:"tm-info-bar-btn tm-info-bar-btn-pause"},events:{click:t.proxy(this.timerStop,this)}}),t.create("SPAN",{props:{title:t.message("JS_CORE_PL_TASKS_FINISH"),className:"tm-info-bar-btn tm-info-bar-btn-flag"},events:{click:t.proxy(this.timerFinish,this)}}),this.ADDITIONAL.TASK_TIMER,t.create("SPAN",{props:{className:"tm-info-bar-text"},children:[this.ADDITIONAL.TASK_TEXT]})]});t.hide(this.TASK_ADDITIONAL)}return this.TASK_ADDITIONAL};t.CTasksPlannerHandler.prototype.timerStart=function(){if(this.timerTaskId>0){t.TasksTimerManager.start(this.timerTaskId)}};t.CTasksPlannerHandler.prototype.timerStop=function(){if(this.timerTaskId>0){t.TasksTimerManager.stop(this.timerTaskId)}};t.CTasksPlannerHandler.prototype.timerFinish=function(){if(this.timerTaskId>0){var e=new t.CJSTask.Item(this.timerTaskId);e.complete({callbackOnSuccess:function(){if(t.TasksTimerManager)t.TasksTimerManager.reLoadInitTimerDataFromServer()}})}};t.CTasksPlannerHandler.prototype.onTaskTimerChange=function(e){if(e.action==="refresh_daemon_event"){this.timerTaskId=e.taskId;if(this.PLANNER&&!!this.PLANNER.WND&&this.PLANNER.WND.isShown()&&e.taskId>0){var s=this.drawAdditional();if(!!this.taskTimerSwitch){s.style.display="";this.taskTimerSwitch=false}var a=parseInt(e.data.TIMER.RUN_TIME||0)+parseInt(e.data.TASK.TIME_SPENT_IN_LOGS||0),i=parseInt(e.data.TASK.TIME_ESTIMATE||0);if(i>0&&a>i){t.addClass(s,"tm-info-bar-overdue")}else{t.removeClass(s,"tm-info-bar-overdue")}var r="";r+=this.formatTime(a,true);if(i>0){r+=" / "+this.formatTime(i)}this.ADDITIONAL.TASK_TIMER.innerHTML=r;this.ADDITIONAL.TASK_TEXT.innerHTML=t.util.htmlspecialchars(e.data.TASK.TITLE);var n=t("tm-task-time-"+this.timerTaskId);if(n)n.innerHTML=r}}else if(e.action==="start_timer"){if(this.isClosed(e.taskData)){t.addClass(this.drawAdditional(),"tm-info-bar-closed")}else{t.removeClass(this.drawAdditional(),"tm-info-bar-closed")}this.timerTaskId=e.taskData.ID;this.taskTimerSwitch=true;t.addClass(this.drawAdditional(),"tm-info-bar-active");t.removeClass(this.drawAdditional(),"tm-info-bar-pause")}else if(e.action==="stop_timer"){this.timerTaskId=e.taskData.ID;if(this.isClosed(e.taskData)){t.hide(this.drawAdditional())}else{t.addClass(this.drawAdditional(),"tm-info-bar-pause");t.removeClass(this.drawAdditional(),"tm-info-bar-active")}}else if(e.action==="init_timer_data"){if(e.data.TIMER&&e.data.TASK.ID>0&&e.data.TIMER.TASK_ID==e.data.TASK.ID){this.timerTaskId=e.data.TASK.ID;if(this.isClosed(e.data.TASK)){t.addClass(this.drawAdditional(),"tm-info-bar-closed")}else{t.removeClass(this.drawAdditional(),"tm-info-bar-closed")}if(e.data.TIMER.TIMER_STARTED_AT==0){if(this.isClosed(e.data.TASK)){t.hide(this.drawAdditional())}else{this.taskTimerSwitch=true;t.addClass(this.drawAdditional(),"tm-info-bar-pause");t.removeClass(this.drawAdditional(),"tm-info-bar-active")}}else{this.taskTimerSwitch=true;t.addClass(this.drawAdditional(),"tm-info-bar-active");t.removeClass(this.drawAdditional(),"tm-info-bar-pause")}}else{t.hide(this.drawAdditional())}this.onTaskTimerChange({action:"refresh_daemon_event",taskId:+e.data.TASK.ID,data:e.data})}};t.CTasksPlannerHandler.prototype.isClosed=function(t){return t.STATUS==5||t.STATUS==4};t.CTasksPlannerHandler.prototype.addTask=function(e){if(!!this.TASKS_LIST){this.TASKS_LIST.appendChild(t.create("LI",{props:{className:"tm-popup-task"},text:e.name}));t.removeClass(this.TASKS,"tm-popup-tasks-empty")}var s={action:"add"};if(typeof e.id!="undefined")s.id=e.id;if(typeof e.name!="undefined")s.name=e.name;this.query(s)};t.CTasksPlannerHandler.prototype.removeTask=function(e,s){this.query({action:"remove",id:s});t.cleanNode(t("tm-task-item-"+s),true);if(!this.TASKS_LIST.firstChild){t.addClass(this.TASKS,"tm-popup-tasks-empty")}};t.CTasksPlannerHandler.prototype.showTasks=function(){if(!this.TASKS_WND){this.TASKS_WND=new t.CTasksPlannerSelector({node:t.proxy_context,onselect:t.proxy(this.addTask,this)})}else{this.TASKS_WND.setNode(t.proxy_context)}this.TASKS_WND.Show()};t.CTasksPlannerHandler.prototype.showTask=function(e){var s=t.proxy_context.parentNode.bx_task_id,a=this.DATA_TASKS,i=[];if(a.length>0){for(var r=0;r<a.length;r++){i.push(a[r].ID)}taskIFramePopup.tasksList=i;taskIFramePopup.view(s)}return false};t.CTasksPlannerHandler.prototype.drawTasksForm=function(e){var s=null;var a=null;var i=null;if(this.MANDATORY_UFS!=="Y"){s=t.delegate(function(s,i){a.value=t.util.trim(a.value);if(a.value&&a.value!=t.message("JS_CORE_PL_TASKS_ADD")){e({name:a.value});if(!i){t.addClass(a.parentNode,"tm-popup-task-form-disabled");a.value=t.message("JS_CORE_PL_TASKS_ADD")}else{a.value=""}}return t.PreventDefault(s)},this);var a=t.create("INPUT",{props:{type:"text",className:"tm-popup-task-form-textbox",value:t.message("JS_CORE_PL_TASKS_ADD")},events:{keypress:function(t){return t.keyCode==13?s(t,true):true},blur:function(){if(this.value==""){t.addClass(this.parentNode,"tm-popup-task-form-disabled");this.value=t.message("JS_CORE_PL_TASKS_ADD")}},focus:function(){t.removeClass(this.parentNode,"tm-popup-task-form-disabled");if(this.value==t.message("JS_CORE_PL_TASKS_ADD"))this.value=""}}});t.focusEvents(a);i=[a,t.create("SPAN",{props:{className:"tm-popup-task-form-submit"},events:{click:s}})]}else{i=[t.create("A",{text:t.message("JS_CORE_PL_TASKS_CREATE"),attrs:{href:"javascript:void(0)"},events:{click:function(){window["taskIFramePopup"].add({ADD_TO_TIMEMAN:"Y"})}}})]}return t.create("DIV",{props:{className:"tm-popup-task-form tm-popup-task-form-disabled"},children:i})};t.CTasksPlannerHandler.prototype.query=function(e,s){if(this.TASK_CHANGES_TIMEOUT){clearTimeout(this.TASK_CHANGES_TIMEOUT)}if(typeof e=="object"){if(!!e.id){this.TASK_CHANGES[e.action].push(e.id)}if(e.action=="add"){if(!e.id){this.TASK_CHANGES.name=e.name}this.query()}else{this.TASK_CHANGES_TIMEOUT=setTimeout(t.proxy(this.query,this),1e3)}}else{if(!!this.PLANNER){this.DATA_TASKS=[];this.PLANNER.query("task",this.TASK_CHANGES)}else{window.top.BX.CPlanner.query("task",this.TASK_CHANGES)}this.TASK_CHANGES={add:[],remove:[]}}};t.CTasksPlannerSelector=function(e){this.params=e;this.isReady=false;this.WND=t.PopupWindowManager.create("planner_tasks_selector_"+parseInt(Math.random()*1e4),this.params.node,{autoHide:true,closeByEsc:true,content:this.content=t.create("DIV"),buttons:[new t.PopupWindowButtonLink({text:t.message("JS_CORE_WINDOW_CLOSE"),className:"popup-window-button-link-cancel",events:{click:function(e){this.popupWindow.close();return t.PreventDefault(e)}}})]})};t.CTasksPlannerSelector.prototype.Show=function(){if(!this.isReady){var e=parseInt(Math.random()*1e4);window["PLANNER_ADD_TASK_"+e]=t.proxy(this.setValue,this);return t.ajax.get("/bitrix/tools/tasks_planner.php",{action:"list",suffix:e,sessid:t.bitrix_sessid(),site_id:t.message("SITE_ID")},t.proxy(this.Ready,this))}return this.WND.show()};t.CTasksPlannerSelector.prototype.Hide=function(){this.WND.close()};t.CTasksPlannerSelector.prototype.Ready=function(t){this.content.innerHTML=t;this.isReady=true;this.Show()};t.CTasksPlannerSelector.prototype.setValue=function(t){this.params.onselect(t);this.WND.close()};t.CTasksPlannerSelector.prototype.setNode=function(t){this.WND.setBindElement(t)};s=new t.CTasksPlannerHandler})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:57:"/bitrix/js/tasks/task-iframe-popup.min.js?156220563117646";s:6:"source";s:37:"/bitrix/js/tasks/task-iframe-popup.js";s:3:"min";s:41:"/bitrix/js/tasks/task-iframe-popup.min.js";s:3:"map";s:41:"/bitrix/js/tasks/task-iframe-popup.map.js";}"*/
(function(t){var e,i;var a=0;BX.TasksIFramePopup={create:function(e){if(!t.top.BX.TasksIFrameInst)t.top.BX.TasksIFrameInst=new s(e);if(e.events){for(var i in e.events){BX.removeCustomEvent(t.top.BX.TasksIFrameInst,i,e.events[i]);BX.addCustomEvent(t.top.BX.TasksIFrameInst,i,e.events[i])}}return t.top.BX.TasksIFrameInst}};var s=function(e){this.inited=false;this.pathToEdit="";this.pathToView="";this.iframeWidth=900;this.iframeHeight=400;this.topBottomMargin=15;this.leftRightMargin=50;this.tasksList=[];this.currentURL=t.location.href;this.currentTaskId=0;this.lastAction=null;this.loading=false;this.isEditMode=false;this.prevIframeSrc="";this.descriptionBuffered=null;if(e){if(e.pathToEdit){this.pathToEdit=e.pathToEdit+(e.pathToEdit.indexOf("?")==-1?"?":"&")+"IFRAME=Y"}if(e.pathToView){this.pathToView=e.pathToView+(e.pathToView.indexOf("?")==-1?"?":"&")+"IFRAME=Y"}if(e.tasksList){for(var i=0,a=e.tasksList.length;i<a;i++){this.tasksList[i]=parseInt(e.tasksList[i])}}}};s.prototype.init=function(){if(this.inited)return;this.inited=true;this.header=BX.create("div",{props:{className:"popup-window-titlebar"},html:'<table width="877" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td align="left">&nbsp;</td><td width="13" style="padding-top: 2px;"><div class="tasks-iframe-close-icon">&nbsp;</div></td></tr></tbody></table>',style:{background:"#e8e8e8",height:"20px",padding:"5px 0px 5px 15px",borderRadius:"4px 4px 0px 0px"}});this.title=this.header.firstChild.tBodies[0].rows[0].cells[0];this.closeIcon=this.header.firstChild.tBodies[0].rows[0].cells[1].firstChild;this.closeIcon.onclick=BX.proxy(this.close,this);this.iframe=BX.create("iframe",{props:{scrolling:"no",frameBorder:"0"},style:{width:this.iframeWidth+"px",height:this.iframeHeight+"px",overflow:"hidden",border:"1px solid #fff",borderTop:"0px",borderRadius:"4px"}});this.prevTaskLink=BX.create("a",{props:{href:"javascript: void(0)",className:"tasks-popup-prev-slide"},html:"<span></span>"});this.closeLink=BX.create("a",{props:{href:"javascript: void(0)",className:"tasks-popup-close"},html:"<span></span>"});this.nextTaskLink=BX.create("a",{props:{href:"javascript: void(0)",className:"tasks-popup-next-slide"},html:"<span></span>"});this.prevTaskLink.onclick=BX.proxy(this.previous,this);this.nextTaskLink.onclick=BX.proxy(this.next,this);this.closeLink.onclick=BX.proxy(this.close,this);this.table=BX.create("table",{props:{className:"tasks-popup-main-table"},style:{top:this.topBottomMargin+"px"},children:[BX.create("tbody",{children:[BX.create("tr",{children:[this.prevTaskArea=BX.create("td",{props:{className:"tasks-popup-prev-slide-wrap"},children:[this.prevTaskLink]}),BX.create("td",{props:{id:"tasks-crazy-heavy-cpu-usage-item",className:"tasks-popup-main-block-wrap tasks-popup-main-block-wrap-bg"},children:[BX.create("div",{props:{className:"tasks-popup-main-block-inner"},children:[this.header,this.iframe]})]}),this.nextTaskArea=BX.create("td",{props:{className:"tasks-popup-next-slide-wrap"},children:[this.closeLink,this.nextTaskLink]})]})]})]});this.overlay=document.body.appendChild(BX.create("div",{props:{className:"tasks-fixed-overlay"},children:[BX.create("div",{props:{className:"bx-task-dialog-overlay"}}),this.table]}));this.__adjustControls();BX.bind(t.top,"resize",BX.proxy(this.__onWindowResize,this))};s.prototype.view=function(t,e){this.init();if(e){this.currentList=[];for(var i=0,a=e.length;i<a;i++){this.currentList[i]=parseInt(e[i])}}else{this.currentList=null}BX.adjust(this.title,{text:BX.message("TASKS_TASK_NUM").replace("#TASK_NUM#",t)});this.currentTaskId=t;this.lastAction="view";var s=true;this.load(this.pathToView.replace("#task_id#",t),s);this.show()};s.prototype.edit=function(t){this.init();BX.adjust(this.title,{text:BX.message("TASKS_TITLE_EDIT_TASK").replace("#TASK_ID#",t)});this.currentTaskId=t;this.lastAction="edit";this.load(this.pathToEdit.replace("#task_id#",t));this.show()};s.prototype.add=function(t){this.init();BX.adjust(this.title,{text:BX.message("TASKS_TITLE_CREATE_TASK")});this.currentTaskId=0;this.lastAction="add";var e=this.pathToEdit.replace("#task_id#",0)+"&UTF8encoded=1";this.descriptionBuffered=null;for(var i in t){if(i==="DESCRIPTION"&&t[i].length>1e3)this.descriptionBuffered=t[i];else e+="&"+i+"="+encodeURIComponent(t[i])}this.load(e);this.show()};s.prototype.show=function(){BX.onCustomEvent(this,"onBeforeShow",[]);this.overlay.style.display="block";BX.addClass(document.body,"tasks-body-overlay");this.closeLink.style.display="none";this.__onWindowResize();this.closeLink.style.display="block";BX.bind(this.iframe.contentDocument?this.iframe.contentDocument:this.iframe.contentWindow.document,"keypress",BX.proxy(this.__onKeyPress,this));BX.onCustomEvent(this,"onAfterShow",[])};s.prototype.close=function(){BX.onCustomEvent(this,"onBeforeHide",[]);this.overlay.style.display="none";BX.removeClass(document.body,"tasks-body-overlay");BX.unbind(this.iframe.contentDocument?this.iframe.contentDocument:this.iframe.contentWindow.document,"keypress",BX.proxy(this.__onKeyPress,this));BX("tasks-crazy-heavy-cpu-usage-item").className="tasks-popup-main-block-wrap tasks-popup-main-block-wrap-bg";BX.onCustomEvent(this,"onAfterHide",[])};s.prototype.previous=function(){var t=this.currentList?this.currentList:this.tasksList;if(this.currentTaskId&&t.length>1){var e=this.__indexOf(this.currentTaskId,t);if(e!=-1){if(e==0){var i=t.length-1}else{var i=e-1}this.view(t[i],t)}}};s.prototype.next=function(){var t=this.currentList?this.currentList:this.tasksList;if(this.currentTaskId&&t.length>1){var e=this.__indexOf(this.currentTaskId,t);if(e!=-1){if(e==t.length-1){var i=0}else{var i=e+1}this.view(t[i],t)}}};s.prototype.load=function(t,e){this.isEditMode=true;if(e===true)this.isEditMode=false;var i=this.iframe.contentWindow?this.iframe.contentWindow.location:"";this.__onUnload();this.iframe.src=t};s.prototype.isOpened=function(){this.init();return this.overlay.style.display=="block"};s.prototype.isEmpty=function(){this.init();return this.iframe.contentWindow.location=="about:blank"};s.prototype.isLeftClick=function(t){if(!t.which&&t.button!==undefined){if(t.button&1)t.which=1;else if(t.button&4)t.which=2;else if(t.button&2)t.which=3;else t.which=0}return t.which==1||t.which==0&&BX.browser.IsIE()};s.prototype.onTaskLoaded=function(){this.__onLoad()};s.prototype.onTaskAdded=function(t,e,i,a,s){this.tasksList.push(t.id);BX.onCustomEvent(this,"onTaskAdded",[t,e,i,a,s])};s.prototype.onTaskChanged=function(t,e,i,a,s){BX.onCustomEvent(this,"onTaskChanged",[t,e,i,a,s])};s.prototype.onTaskDeleted=function(t){BX.onCustomEvent(this,"onTaskDeleted",[t])};s.prototype.__onKeyPress=function(e){if(!e)e=t.event;if(e.keyCode==27){if(this.lastAction==="view"||confirm(BX.message("TASKS_CONFIRM_CLOSE_CREATE_DIALOG"))){this.close()}}};s.prototype.__indexOf=function(t,e){for(var i=0,a=e.length;i<a;i++){if(t==e[i]){return i}}return-1};s.prototype.__onMouseMove=function(t){if(!t)t=this.iframe.contentWindow.event;var e=this.iframe.contentDocument?this.iframe.contentDocument:this.iframe.contentWindow.document;if(e&&e.body){e.body.onbeforeunload=BX.proxy(this.__onUnload,this);if(this.iframe.contentDocument)this.iframe.contentDocument.body.onbeforeunload=BX.proxy(this.__onBeforeUnload,this);e.body.onunload=BX.proxy(this.__onUnload,this);var i=t.target||t.srcElement;if(i){eTargetA=false;if(i&&i.tagName=="SPAN"){var a=BX.findParent(i);if(a!==null&&a.tagName=="A")eTargetA=a}else eTargetA=i;if(eTargetA.tagName=="A"&&eTargetA.href){if(eTargetA.href.substr(0,11)=="javascript:"){e.body.onbeforeunload=null;e.body.onunload=null}else if(eTargetA.href.indexOf("IFRAME=Y")==-1&&eTargetA.href.indexOf("/show_file.php?fid=")==-1&&eTargetA.target!=="_blank"){eTargetA.target="_top"}}}}};s.prototype.__onLoad=function(){if(!this.isEmpty()){var a=this.iframe.contentDocument?this.iframe.contentDocument:this.iframe.contentWindow.document;if(a&&a.body){if(BX("tasks-crazy-heavy-cpu-usage-item"))BX("tasks-crazy-heavy-cpu-usage-item").className="tasks-popup-main-block-wrap";this.loading=false;a.body.onmousemove=BX.proxy(this.__onMouseMove,this);if(!a.getElementById("task-reminder-link")){t.top.location=a.location.href.replace("?IFRAME=Y","").replace("&IFRAME=Y","").replace("&CALLBACK=CHANGED","").replace("&CALLBACK=ADDED","")}i=this.iframe.contentWindow.location.href;BX.bind(a,"keyup",BX.proxy(this.__onKeyPress,this));this.iframe.style.height=a.getElementById("tasks-content-outer").offsetHeight+"px";this.iframe.style.visibility="visible";this.iframe.contentWindow.focus();this.__onWindowResize()}if(e)clearInterval(e);e=setInterval(BX.proxy(this.__onContentResize,this),300)}};s.prototype.__onBeforeUnload=function(t){};s.prototype.__onUnload=function(i){if(!i)i=t.event;if(!this.loading){this.loading=true;this.iframe.style.visibility="hidden";clearInterval(e)}};s.prototype.__onContentResize=function(){if(this.isOpened()){var t=this.iframe.contentDocument?this.iframe.contentDocument:this.iframe.contentWindow.document;if(t&&t.body){var e=t.getElementById("tasks-content-outer");if(e){var i=this.__getWindowScrollHeight(t);var s=BX.GetWindowInnerSize(t);var n=0;if(i>s.innerHeight)n=i-1;else n=e.offsetHeight;var r=this.iframe.contentWindow?this.iframe.contentWindow.location:"";if(r.toString)r=r.toString();if(n!=a||this.prevIframeSrc!=r){a=n;this.prevIframeSrc=r;this.iframe.style.height=n+"px";this.__onWindowResize()}}}}};s.prototype.__getWindowScrollHeight=function(t){var e;if(!t)t=document;if(t.compatMode&&t.compatMode=="CSS1Compat"&&!BX.browser.IsSafari()){e=t.documentElement.scrollHeight}else{if(t.body.scrollHeight>t.body.offsetHeight)e=t.body.scrollHeight;else e=t.body.offsetHeight}return e};s.prototype.__onWindowResize=function(){var t=BX.GetWindowInnerSize();this.overlay.style.height=t.innerHeight+"px";this.overlay.style.width=t.innerWidth+"px";var e=BX.GetWindowScrollPos();this.overlay.style.top=e.scrollTop+"px";if(BX.browser.IsIE()&&!BX.browser.IsIE9()){this.table.style.width=t.innerWidth-20+"px"}this.overlay.firstChild.style.height=Math.max(this.iframe.offsetHeight+this.topBottomMargin*2+31,this.overlay.clientHeight)+"px";this.overlay.firstChild.style.width=Math.max(1024,this.overlay.clientWidth)+"px";this.prevTaskArea.style.width=Math.max(0,Math.max(1024,this.overlay.clientWidth)/2)+"px";this.nextTaskArea.style.width=this.prevTaskArea.style.width;this.__adjustControls()};s.prototype.__adjustControls=function(){if(this.lastAction!="view"||(!this.currentList||this.currentList.length<=1||this.__indexOf(this.currentTaskId,this.currentList)==-1)&&(this.tasksList.length<=1||this.__indexOf(this.currentTaskId,this.tasksList)==-1)){this.nextTaskLink.style.display=this.prevTaskLink.style.display="none"}else{if(!BX.browser.IsDoctype()&&BX.browser.IsIE()){this.nextTaskLink.style.height=this.prevTaskLink.style.height=document.documentElement.offsetHeight+"px";this.prevTaskLink.style.width=this.prevTaskLink.parentNode.clientWidth-1+"px";this.nextTaskLink.style.width=this.nextTaskLink.parentNode.clientWidth-1+"px"}else{this.nextTaskLink.style.height=this.prevTaskLink.style.height=document.documentElement.clientHeight+"px";this.prevTaskLink.style.width=this.prevTaskLink.parentNode.clientWidth+"px";this.nextTaskLink.style.width=this.nextTaskLink.parentNode.clientWidth+"px"}this.prevTaskLink.firstChild.style.left=this.prevTaskLink.parentNode.clientWidth*4/10+"px";this.nextTaskLink.firstChild.style.right=this.nextTaskLink.parentNode.clientWidth*4/10+"px";this.nextTaskLink.style.display=this.prevTaskLink.style.display=""}this.closeLink.style.width=this.closeLink.parentNode.clientWidth+"px"}})(window);(function(){if(BX.TasksTimerManager)return;BX.TasksTimerManager={popup:null,onTimeManDataRecievedEventDetected:false};BX.TasksTimerManager.reLoadInitTimerDataFromServer=function(){var t=true;if(window.BXTIMEMAN)window.BXTIMEMAN.Update(true);else if(window.BXPLANNER&&window.BXPLANNER.update)window.BXPLANNER.update();else t=false;if(window.top!==window){if(window.top.BXTIMEMAN)window.top.BXTIMEMAN.Update(true);else if(window.top.BXPLANNER&&window.top.BXPLANNER.update)window.top.BXPLANNER.update()}return t};BX.TasksTimerManager.start=function(t){BX.CJSTask.batchOperations([{operation:"CTaskTimerManager::getLastTimer()"}],{callbackOnSuccess:function(t){return function(e){if(e.rawReply.data[0].returnValue&&e.rawReply.data[0].returnValue.TASK_ID>0&&e.rawReply.data[0].returnValue.TIMER_STARTED_AT>0&&t!=e.rawReply.data[0].returnValue.TASK_ID){BX.CJSTask.batchOperations([{operation:"CTaskItem::getTaskData()",taskData:{ID:e.rawReply.data[0].returnValue.TASK_ID}}],{callbackOnSuccess:function(t){return function(e){if(e.rawReply.data[0].returnValue.ID&&t!=e.rawReply.data[0].returnValue.ID){BX.TasksTimerManager.__showConfirmPopup(e.rawReply.data[0].returnValue.ID,e.rawReply.data[0].returnValue.TITLE,function(t){return function(e){if(e)BX.TasksTimerManager.__doStart(t)}}(t))}}}(t),callbackOnFailure:function(t){return function(e){BX.TasksTimerManager.__doStart(t)}}(t)},true)}else BX.TasksTimerManager.__doStart(t)}}(t)},true)};BX.TasksTimerManager.stop=function(t){var e=new BX.CJSTask.TimerManager(t);e.stop({callbackOnSuccess:function(t){if(t.status==="success"){BX.onCustomEvent(window,"onTaskTimerChange",[{module:"tasks",action:"stop_timer",taskId:t.rawReply.data[0].requestedTaskId,taskData:t.rawReply.data[1].returnValue,timerData:t.rawReply.data[2].returnValue}])}}})};BX.TasksTimerManager.__doStart=function(t){var e=new BX.CJSTask.TimerManager(t);e.start({callbackOnSuccess:function(t){if(t.status==="success"){BX.onCustomEvent(window,"onTaskTimerChange",[{module:"tasks",action:"start_timer",taskId:t.rawReply.data[0].requestedTaskId,taskData:t.rawReply.data[1].returnValue,timerData:t.rawReply.data[2].returnValue}])}}})};BX.TasksTimerManager.__showConfirmPopup=function(t,e,i){if(this.popup){this.popup.close();this.popup.destroy()}var a=BX.message("TASKS_TASK_CONFIRM_START_TIMER");a=a.replace("{{TITLE}}",BX.util.htmlspecialchars(e));var s=BX.create("span",{html:BX.message("TASKS_TASK_CONFIRM_START_TIMER_TITLE")});BX.Tasks.confirm(a,BX.delegate(function(t){i(t)},this),{title:s})};BX.TasksTimerManager.refreshDaemon=new function(){this.data=null;this.onTick=function(){if(this.data!==null){var t=Math.round((new Date).getTime()/1e3);this.data.TIMER.RUN_TIME=t-this.data.TIMER.TIMER_STARTED_AT-this.data.UNIX_TIMESTAMP_DELTA;BX.onCustomEvent(window,"onTaskTimerChange",[{action:"refresh_daemon_event",taskId:this.data.TIMER.TASK_ID,data:this.data}])}};BX.ready(function(t){return function(){BX.CJSTask.setTimerCallback("tasks_timer_refresh_daemon_event",function(t){return function(){t.onTick()}}(t),1024)}}(this));this.catchTimerChange=function(t){if(t.module!=="tasks")return;if(t.action==="refresh_daemon_event"){return}else if(t.action==="stop_timer"){this.data=null;BX.TasksTimerManager.reLoadInitTimerDataFromServer()}else if(t.action==="start_timer"){if(!(t.timerData&&t.timerData.USER_ID)||t.timerData.TASK_ID!=t.taskData.ID){this.data=null;return}if(t.timerData.TIMER_STARTED_AT==0){this.data=null;return}var e=0;var i=Math.round((new Date).getTime()/1e3);var a=parseInt(t.timerData.RUN_TIME);var s=parseInt(t.taskData.TIME_SPENT_IN_LOGS);var n=parseInt(t.timerData.TIMER_STARTED_AT);if(isNaN(a))a=0;if(isNaN(s))s=0;if(n>0)e=i-n-a;this.data={TIMER:{TASK_ID:parseInt(t.timerData.TASK_ID),USER_ID:parseInt(t.timerData.USER_ID),TIMER_STARTED_AT:n,RUN_TIME:a},TASK:{ID:t.taskData.ID,TITLE:t.taskData.TITLE,TIME_SPENT_IN_LOGS:s,TIME_ESTIMATE:parseInt(t.taskData.TIME_ESTIMATE),ALLOW_TIME_TRACKING:t.taskData.ALLOW_TIME_TRACKING},UNIX_TIMESTAMP_DELTA:e};BX.TasksTimerManager.reLoadInitTimerDataFromServer()}else if(t.action==="init_timer_data"){if(!(t.data.TIMER&&t.data.TIMER.USER_ID)||t.data.TIMER.TASK_ID!=t.data.TASK.ID){this.data=null;return}if(t.data.TIMER.TIMER_STARTED_AT==0){this.data=null;return}var e=0;var i=Math.round((new Date).getTime()/1e3);var a=parseInt(t.data.TIMER.RUN_TIME);var s=parseInt(t.data.TASK.TIME_SPENT_IN_LOGS);var n=parseInt(t.data.TIMER.TIMER_STARTED_AT);if(isNaN(a))a=0;if(isNaN(s))s=0;if(n>0)e=i-n-a;this.data={TIMER:{TASK_ID:parseInt(t.data.TIMER.TASK_ID),USER_ID:parseInt(t.data.TIMER.USER_ID),TIMER_STARTED_AT:n,RUN_TIME:a},TASK:{ID:t.data.TASK.ID,TITLE:t.data.TASK.TITLE,TIME_SPENT_IN_LOGS:s,TIME_ESTIMATE:parseInt(t.data.TASK.TIME_ESTIMATE),ALLOW_TIME_TRACKING:t.data.TASK.ALLOW_TIME_TRACKING},UNIX_TIMESTAMP_DELTA:e}}};BX.addCustomEvent(window,"onTaskTimerChange",function(t){return function(e){t.catchTimerChange(e)}}(this))};BX.TasksTimerManager.onDataRecieved=function(t){var e=0;var i={TIMER:false,TASK:false};if(!t)return;if(t.TASKS_TIMER){if(parseInt(t.TASKS_TIMER.TIMER_STARTED_AT)>0)e=Math.round((new Date).getTime()/1e3)-parseInt(t.TASKS_TIMER.TIMER_STARTED_AT);if(e<0)e=0;i.TIMER={TASK_ID:t.TASKS_TIMER.TASK_ID,USER_ID:t.TASKS_TIMER.USER_ID,TIMER_STARTED_AT:t.TASKS_TIMER.TIMER_STARTED_AT,RUN_TIME:e}}if(t.TASK_ON_TIMER){i.TASK={ID:t.TASK_ON_TIMER.ID,TITLE:t.TASK_ON_TIMER.TITLE,STATUS:t.TASK_ON_TIMER.STATUS,TIME_SPENT_IN_LOGS:t.TASK_ON_TIMER.TIME_SPENT_IN_LOGS,TIME_ESTIMATE:t.TASK_ON_TIMER.TIME_ESTIMATE,ALLOW_TIME_TRACKING:t.TASK_ON_TIMER.ALLOW_TIME_TRACKING}}BX.onCustomEvent(window,"onTaskTimerChange",[{action:"init_timer_data",module:"tasks",data:i}])};BX.addCustomEvent(window,"onTimeManDataRecieved",function(t){BX.TasksTimerManager.onTimeManDataRecievedEventDetected=true;if(t.PLANNER)BX.TasksTimerManager.onDataRecieved(t.PLANNER)});BX.addCustomEvent(window,"onPlannerDataRecieved",function(t,e){if(BX.TasksTimerManager.onTimeManDataRecievedEventDetected===false)BX.TasksTimerManager.onDataRecieved(e)})})();
/* End */
;
//# sourceMappingURL=kernel_tasks.map.js