<?php
/**
 * Created by PhpStorm.
 * @author Alexander Danilin <danilin2010@yandex.ru>
 * Date: 14.08.2019
 * Time: 2:40
 */

define('NO_KEEP_STATISTIC', 'Y');
define('NO_AGENT_STATISTIC','Y');
define('NO_AGENT_CHECK', true);
define('DisableEventsCheck', true);
define("EXTRANET_NO_REDIRECT", true);

require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');

use Bitrix\Main\Context;
use local\Services\CrmEventDealTimfors;

$request = Context::getCurrent()->getRequest();

$name="";

if (check_bitrix_sessid() || $request->isPost()){
    $id=trim($request->getPost("id"));
    $TIMELINE=true;
    $result = strpos ($id, "ACTIVITY_");
    if ($result !== FALSE)
    {
        $TIMELINE=false;
        $id=str_replace("ACTIVITY_",'',$id);
    }
    $id=(int)$id;
    if($id>0)
    {
        $CrmEventDealTimfors=new CrmEventDealTimfors();
        $name=$CrmEventDealTimfors->getNameAsId($id,$TIMELINE);
    }
}

echo json_encode([
    "name"=>$name,
]);