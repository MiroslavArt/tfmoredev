<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

if (!CModule::IncludeModule('crm'))
	return;

$currentUserID = CCrmSecurityHelper::GetCurrentUserID();
$CrmPerms = CCrmPerms::GetCurrentUserPermissions();

if ($CrmPerms->HavePerm('ORDER', BX_CRM_PERM_NONE))
	return;

$arParams['PATH_TO_ORDER_PAYMENT_LIST'] = CrmCheckPath('PATH_TO_ORDER_PAYMENT_LIST', $arParams['PATH_TO_ORDER_PAYMENT_LIST'], $APPLICATION->GetCurPage());
$arParams['PATH_TO_ORDER_PAYMENT_SHOW'] = CrmCheckPath('PATH_TO_ORDER_PAYMENT_SHOW', $arParams['PATH_TO_ORDER_PAYMENT_SHOW'], $APPLICATION->GetCurPage().'?order_id=#order_id#&show');
$arParams['PATH_TO_ORDER_PAYMENT_EDIT'] = CrmCheckPath('PATH_TO_ORDER_PAYMENT_EDIT', $arParams['PATH_TO_ORDER_PAYMENT_EDIT'], $APPLICATION->GetCurPage().'?order_id=#order_id#&edit');
$arParams['PATH_TO_ORDER_PAYMENT_DETAILS'] = CrmCheckPath('PATH_TO_ORDER_PAYMENT_DETAILS', $arParams['PATH_TO_ORDER_PAYMENT_DETAILS'], $APPLICATION->GetCurPage().'?order_id=#order_id#&details');

$arParams['ELEMENT_ID'] = isset($arParams['ELEMENT_ID']) ? (int)$arParams['ELEMENT_ID'] : 0;

if (!isset($arParams['TYPE']))
	$arParams['TYPE'] = 'list';

$toolbarID = 'toolbar_order_'.$arParams['TYPE'];
if($arParams['ELEMENT_ID'] > 0)
{
	$toolbarID .= '_'.$arParams['ELEMENT_ID'];
}
$arResult['TOOLBAR_ID'] = $toolbarID;

$arResult['BUTTONS'] = array();

if ($arParams['TYPE'] == 'list')
{
	$bRead   = \Bitrix\Crm\Order\Permissions\Payment::checkReadPermission(0, $CrmPerms);
	$bAdd    = \Bitrix\Crm\Order\Permissions\Payment::checkCreatePermission($CrmPerms);
	$bWrite  = \Bitrix\Crm\Order\Permissions\Payment::checkUpdatePermission(0, $CrmPerms);
	$bDelete = false;
	$bConfig = $CrmPerms->HavePerm('CONFIG', BX_CRM_PERM_CONFIG, 'WRITE');
}
else
{
	$bRead   = \Bitrix\Crm\Order\Permissions\Payment::checkReadPermission($arParams['ELEMENT_ID'], $CrmPerms);
	$bAdd    = \Bitrix\Crm\Order\Permissions\Payment::checkCreatePermission($CrmPerms);
	$bWrite  = \Bitrix\Crm\Order\Permissions\Payment::checkUpdatePermission($arParams['ELEMENT_ID'], $CrmPerms);
	$bDelete = \Bitrix\Crm\Order\Permissions\Payment::checkDeletePermission($arParams['ELEMENT_ID'], $CrmPerms);
}

if (!$bRead && !$bAdd && !$bWrite)
	return false;

if($arParams['TYPE'] === 'details')
{
	if($arParams['ELEMENT_ID'] <= 0)
	{
		return false;
	}

	$scripts = isset($arParams['~SCRIPTS']) && is_array($arParams['~SCRIPTS']) ? $arParams['~SCRIPTS'] : array();

	//Force start new bar after first button
	$arResult['BUTTONS'][] = array('NEWBAR' => true);

	if($bDelete && isset($scripts['DELETE']))
	{
		$arResult['BUTTONS'][] = array(
			'TEXT' => GetMessage('ORDER_PAYMENT_DELETE'),
			'TITLE' => GetMessage('ORDER_PAYMENT_DELETE_TITLE'),
			'ONCLICK' => $scripts['DELETE'],
			'ICON' => 'btn-delete'
		);
	}

	$this->IncludeComponentTemplate();
	return;
}

if($arParams['TYPE'] === 'list')
{
	if ($bAdd)
	{
		$arResult['BUTTONS'][] = array(
			'TEXT' => GetMessage('ORDER_PAYMENT_ADD'),
			'TITLE' => GetMessage('ORDER_PAYMENT_ADD_TITLE'),
			'LINK' =>
				CCrmUrlUtil::AddUrlParams(
					CComponentEngine::MakePathFromTemplate(
						$arParams[\Bitrix\Crm\Settings\LayoutSettings::getCurrent()->isSliderEnabled() ? 'PATH_TO_ORDER_PAYMENT_DETAILS' : 'PATH_TO_ORDER_PAYMENT_EDIT'],
						array('payment_id' => 0)
					),
					array()
			),
			'HIGHLIGHT' => true
		);
	}

	if ($bConfig)
	{
		CCrmComponentHelper::RegisterScriptLink('/bitrix/js/crm/common.js');
		$arResult['BUTTONS'][] = array(
			'TEXT' => GetMessage('ORDER_PAYMENT_CRM_TYPE'),
			'TITLE' => GetMessage('ORDER_PAYMENT_CRM_TYPE'),
			'ONCLICK' => \Bitrix\Crm\Settings\LeadSettings::showCrmTypePopup()
		);
	}

	if(count($arResult['BUTTONS']) > 1)
	{
		//Force start new bar after first button
		array_splice($arResult['BUTTONS'], 1, 0, array(array('NEWBAR' => true)));
	}

	$this->IncludeComponentTemplate();
	return;
}

$qty = count($arResult['BUTTONS']);

if ($qty >= 3)
	$arResult['BUTTONS'][] = array('NEWBAR' => true);

if ($bAdd && $arParams['TYPE'] != 'list')
{
	$arResult['BUTTONS'][] = array(
		'TEXT' => GetMessage('ORDER_PAYMENT_ADD'),
		'TITLE' => GetMessage('ORDER_PAYMENT_ADD_TITLE'),
		'LINK' => CComponentEngine::MakePathFromTemplate(
				$arParams['PATH_TO_ORDER_PAYMENT_EDIT'],
				array('payment_id' => 0)
		),
		'TARGET' => '_blank',
		'ICON' => 'btn-new'
	);
}

$this->IncludeComponentTemplate();
?>