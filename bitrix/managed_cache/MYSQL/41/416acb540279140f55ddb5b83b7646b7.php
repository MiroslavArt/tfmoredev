<?
if($INCLUDE_FROM_CACHE!='Y')return false;
$datecreate = '001562380007';
$dateexpire = '001562383607';
$ser_content = 'a:2:{s:7:"CONTENT";s:0:"";s:4:"VARS";a:2:{s:2:"co";a:3:{i:0;a:3:{s:9:"CONDITION";s:38:"CSite::InDir(\'/private_cloud/mobile/\')";s:8:"TEMPLATE";s:10:"mobile_app";s:7:"SITE_ID";s:2:"co";}i:1;a:3:{s:9:"CONDITION";s:110:"!$GLOBALS[\'USER\']->IsAuthorized() && (!isset($_SERVER[\'REMOTE_USER\']) || strlen($_SERVER[\'REMOTE_USER\']) <= 0)";s:8:"TEMPLATE";s:5:"login";s:7:"SITE_ID";s:2:"co";}i:2;a:3:{s:9:"CONDITION";s:0:"";s:8:"TEMPLATE";s:8:"bitrix24";s:7:"SITE_ID";s:2:"co";}}s:2:"s1";a:8:{i:0;a:3:{s:9:"CONDITION";s:29:"CSite::InDir(\'/desktop_app/\')";s:8:"TEMPLATE";s:11:"desktop_app";s:7:"SITE_ID";s:2:"s1";}i:1;a:3:{s:9:"CONDITION";s:24:"CSite::InDir(\'/mobile/\')";s:8:"TEMPLATE";s:10:"mobile_app";s:7:"SITE_ID";s:2:"s1";}i:2;a:3:{s:9:"CONDITION";s:21:"CSite::InDir(\'/pub/\')";s:8:"TEMPLATE";s:3:"pub";s:7:"SITE_ID";s:2:"s1";}i:3;a:3:{s:9:"CONDITION";s:94:"preg_match("#^/online/([\\.\\-0-9a-zA-Z]+)(/?)([^/]*)#", $GLOBALS[\'APPLICATION\']->GetCurPage(0))";s:8:"TEMPLATE";s:3:"pub";s:7:"SITE_ID";s:2:"s1";}i:4;a:3:{s:9:"CONDITION";s:41:"CSite::InDir(\'/services/learning/course\')";s:8:"TEMPLATE";s:8:"learning";s:7:"SITE_ID";s:2:"s1";}i:5;a:3:{s:9:"CONDITION";s:64:"!$GLOBALS[\'USER\']->IsAuthorized() && $_SERVER[\'REMOTE_USER\']==\'\'";s:8:"TEMPLATE";s:5:"login";s:7:"SITE_ID";s:2:"s1";}i:6;a:3:{s:9:"CONDITION";s:85:"preg_match(\'#/sites/site/[\\d]+/view/[\\d]+/#\', $GLOBALS[\'APPLICATION\']->GetCurPage(0))";s:8:"TEMPLATE";s:9:"landing24";s:7:"SITE_ID";s:2:"s1";}i:7;a:3:{s:9:"CONDITION";s:0:"";s:8:"TEMPLATE";s:8:"bitrix24";s:7:"SITE_ID";s:2:"s1";}}}}';
return true;
?>