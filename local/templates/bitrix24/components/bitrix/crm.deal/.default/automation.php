<?php
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) die();
/** @global CMain $APPLICATION */
/** @var array $arParams */
/** @var array $arResult */

$cmpParams = [
	'ENTITY_TYPE_ID' => CCrmOwnerType::Deal,
	'ENTITY_CATEGORY' => isset($arResult['VARIABLES']['category_id'])
		? $arResult['VARIABLES']['category_id'] : 0,
	'SET_TITLE' => 'Y'
];

if ($_REQUEST['IFRAME'] == 'Y' && $_REQUEST['IFRAME_TYPE'] == 'SIDE_SLIDER')
{
	$APPLICATION->IncludeComponent(
		'bitrix:ui.sidepanel.wrapper',
		'',
		array(
			'POPUP_COMPONENT_NAME' => 'bitrix:crm.config.automation',
			'POPUP_COMPONENT_TEMPLATE_NAME' => '',
			'POPUP_COMPONENT_PARAMS' => $cmpParams
		)
	);
}
else
{
	$APPLICATION->IncludeComponent(
		'bitrix:crm.config.automation',
		'',
		$cmpParams
	);
}

