<?
$arUrlRewrite = array(
	array(
		"CONDITION" => "#^/pub/site/#",
		"ID" => "bitrix:landing.pub",
		"PATH" => "/pub/site/index.php",
	),
	array(
		"CONDITION" => "#^/docs/pub/(?<hash>[0-9a-f]{32})/(?<action>[0-9a-zA-Z]+)/\\?#",
		"RULE" => "hash=\$1&action=\$2&",
		"ID" => "bitrix:disk.external.link",
		"PATH" => "/docs/pub/index.php",
	),
	array(
		"CONDITION" => "#^/disk/(?<action>[0-9a-zA-Z]+)/(?<fileId>[0-9]+)/\\?#",
		"RULE" => "action=\$1&fileId=\$2&",
		"ID" => "bitrix:disk.services",
		"PATH" => "/bitrix/services/disk/index.php",
	),
	array(
		"CONDITION" => "#^/pub/pay/([0-9a-zA-Z_-]+)/([0-9a-zA-Z]+)/([^/]*)#",
		"RULE" => "account_number=\$1&hash=\$2",
		"ID" => "bitrix:crm.invoice.payment.client",
		"PATH" => "/pub/payment.php",
	),
	array(
		"CONDITION" => "#^/pub/document/([0-9a-zA-Z_-]+)/([0-9a-zA-Z]+)/([^/]*)#",
		"RULE" => "id=\$1&hash=\$2",
		"ID" => "bitrix:documentgenerator.view",
		"PATH" => "/pub/document.php",
	),
	array(
		"CONDITION" => "#^/docs/pub/(?<hash>[0-9a-f]{32})/(?<action>.*)\$#",
		"RULE" => "hash=\$1&action=\$2",
		"ID" => "bitrix:disk.external.link",
		"PATH" => "/docs/pub/index.php",
	),
	array(
		"CONDITION" => "#^/pub/(?<hash>[0-9a-f]{32})/(?<action>.*)\$#",
		"RULE" => "hash=\$1&action=\$2",
		"ID" => "bitrix:disk.external.link",
		"PATH" => "/pub/index.php",
	),
	array(
		"CONDITION" => "#^/pub/pay/([\\w\\W]+)/([0-9a-zA-Z]+)/([^/]*)#",
		"RULE" => "account_number=\$1&hash=\$2",
		"ID" => "bitrix:crm.invoice.payment.client",
		"PATH" => "/pub/payment.php",
	),
	array(
		"CONDITION" => "#^/pub/pay/([0-9]+)/([0-9a-zA-Z]+)/([^/]*)#",
		"RULE" => "account_number=\$1&hash=\$2",
		"ID" => "bitrix:crm.invoice.payment.client",
		"PATH" => "/pub/payment.php",
	),
	array(
		"CONDITION" => "#^/pub/pay/([0-9]+)/([0-9a-zA-Z]+)/([^/]+)#",
		"RULE" => "account_number=\$1&hash=\$2",
		"ID" => "bitrix:crm.invoice.payment.client",
		"PATH" => "/pub/payment.php",
	),
	array(
		"CONDITION" => "#^/pub/form/([0-9a-z_]+?)/([0-9a-z]+?)/.*#",
		"RULE" => "form_code=\$1&sec=\$2",
		"ID" => "bitrix:crm.webform.fill",
		"PATH" => "/pub/form.php",
	),
	array(
		"CONDITION" => "#^/pub/conference/([0-9a-zA-Z_]+?)/?\$#",
		"RULE" => "publicId=\$1",
		"ID" => "bitrix:im.conference",
		"PATH" => "/pub/conference.php",
	),
	array(
		"CONDITION" => "#^/mobile/disk/(?<hash>[0-9]+)/download#",
		"RULE" => "download=1&objectId=\$1",
		"ID" => "bitrix:mobile.disk.file.detail",
		"PATH" => "/mobile/disk/index.php",
	),
	array(
		"CONDITION" => "#^/online/([\\.\\-0-9a-zA-Z]+)(/?)([^/]*)#",
		"RULE" => "alias=\$1",
		"PATH" => "/desktop_app/router.php",
	),
	array(
		"CONDITION" => "#^/tasks/getfile/(\\d+)/(\\d+)/([^/]+)#",
		"RULE" => "taskid=\$1&fileid=\$2&filename=\$3",
		"ID" => "bitrix:tasks_tools_getfile",
		"PATH" => "/tasks/getfile.php",
	),
	array(
		"CONDITION" => "#^/pub/pay/([0-9]+)/([0-9a-zA-Z]+)/#",
		"RULE" => "account_number=\$1&hash=\$2",
		"ID" => "bitrix:crm.invoice.payment.client",
		"PATH" => "/pub/payment.php",
	),
	array(
		"CONDITION" => "#^/extranet/contacts/personal/#",
		"RULE" => "",
		"ID" => "bitrix:socialnetwork_user",
		"PATH" => "/extranet/contacts/personal.php",
	),
	array(
		"CONDITION" => "#^/extranet/workgroups/create/#",
		"RULE" => "",
		"ID" => "bitrix:extranet.group_create",
		"PATH" => "/extranet/workgroups/create/index.php",
	),
	array(
		"CONDITION" => "#^/extranet/crm/configs/perms/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.perms",
		"PATH" => "/extranet/crm/configs/perms/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/deal_category/#",
		"RULE" => "",
		"ID" => "bitrix:crm.deal_category",
		"PATH" => "/crm/configs/deal_category/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/productprops/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.productprops",
		"PATH" => "/crm/configs/productprops/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/mailtemplate/#",
		"RULE" => "",
		"ID" => "bitrix:crm.mail_template",
		"PATH" => "/crm/configs/mailtemplate/index.php",
	),
	array(
		"CONDITION" => "#^/bitrix/services/ymarket/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/bitrix/services/ymarket/index.php",
	),
	array(
		"CONDITION" => "#^/extranet/crm/configs/bp/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.bp",
		"PATH" => "/extranet/crm/configs/bp/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/locations/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.locations",
		"PATH" => "/crm/configs/locations/index.php",
	),
	array(
		"CONDITION" => "#^/extranet/mobile/webdav#",
		"RULE" => "",
		"ID" => "bitrix:mobile.webdav.file.list",
		"PATH" => "/extranet/mobile/webdav/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/mycompany/#",
		"RULE" => "",
		"ID" => "bitrix:crm.company",
		"PATH" => "/crm/configs/mycompany/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/currency/#",
		"RULE" => "",
		"ID" => "bitrix:crm.currency",
		"PATH" => "/crm/configs/currency/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/measure/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.measure",
		"PATH" => "/crm/configs/measure/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/volume/#",
		"RULE" => "",
		"ID" => "bitrix:crm.volume",
		"PATH" => "/crm/configs/volume/index.php",
	),
	array(
		"CONDITION" => "#^/extranet/docs/shared#",
		"RULE" => "",
		"ID" => "bitrix:webdav",
		"PATH" => "/extranet/docs/index.php",
	),
	array(
		"CONDITION" => "#^/extranet/workgroups/#",
		"RULE" => "",
		"ID" => "bitrix:socialnetwork_group",
		"PATH" => "/extranet/workgroups/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/exch1c/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.exch1c",
		"PATH" => "/crm/configs/exch1c/index.php",
	),
	array(
		"CONDITION" => "#^/crm/reports/report/#",
		"RULE" => "",
		"ID" => "bitrix:crm.report",
		"PATH" => "/crm/reports/report/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/fields/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.fields",
		"PATH" => "/crm/configs/fields/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/preset/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.preset",
		"PATH" => "/crm/configs/preset/index.php",
	),
	array(
		"CONDITION" => "#^/marketplace/local/#",
		"RULE" => "",
		"ID" => "bitrix:rest.marketplace.localapp",
		"PATH" => "/marketplace/local/index.php",
	),
	array(
		"CONDITION" => "#^/marketplace/hook/#",
		"RULE" => "",
		"ID" => "bitrix:rest.hook",
		"PATH" => "/marketplace/hook/index.php",
	),
	array(
		"CONDITION" => "#^/online/(/?)([^/]*)#",
		"RULE" => "",
		"PATH" => "/desktop_app/router.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/perms/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.perms",
		"PATH" => "/crm/configs/perms/index.php",
	),
	array(
		"CONDITION" => "#^/bizproc/processes/#",
		"RULE" => "",
		"ID" => "bitrix:lists",
		"PATH" => "/bizproc/processes/index.php",
	),
	array(
		"CONDITION" => "#^/company/personal/mail/#",
		"RULE" => "",
		"ID" => "bitrix:intranet.mail.config",
		"PATH" => "/mail/index.php",
	),
	array(
		"CONDITION" => "#^/company/personal/#",
		"RULE" => "",
		"ID" => "bitrix:socialnetwork_user",
		"PATH" => "/company/personal.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/tax/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.tax",
		"PATH" => "/crm/configs/tax/index.php",
	),
	array(
		"CONDITION" => "#^/marketplace/app/#",
		"RULE" => "",
		"ID" => "bitrix:app.layout",
		"PATH" => "/marketplace/app/index.php",
	),
	array(
		"CONDITION" => "#^/timeman/meeting/#",
		"RULE" => "",
		"ID" => "bitrix:meetings",
		"PATH" => "/timeman/meeting/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/ps/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.ps",
		"PATH" => "/crm/configs/ps/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/automation/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.automation",
		"PATH" => "/crm/configs/automation/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/bp/#",
		"RULE" => "",
		"ID" => "bitrix:crm.config.bp",
		"PATH" => "/crm/configs/bp/index.php",
	),
	array(
		"CONDITION" => "#^/company/lists/#",
		"RULE" => "",
		"ID" => "bitrix:lists",
		"PATH" => "/company/lists/index.php",
	),
	array(
		"CONDITION" => "#^/crm/activity/#",
		"RULE" => "",
		"ID" => "bitrix:crm.activity",
		"PATH" => "/crm/activity/index.php",
	),
	array(
		"CONDITION" => "#^/mobile/webdav#",
		"RULE" => "",
		"ID" => "bitrix:mobile.webdav.file.list",
		"PATH" => "/mobile/webdav/index.php",
	),
	array(
		"CONDITION" => "#^/crm/company/#",
		"RULE" => "",
		"ID" => "bitrix:crm.company",
		"PATH" => "/crm/company/index.php",
	),
	array(
		"CONDITION" => "#^/crm/webform/#",
		"RULE" => "",
		"ID" => "bitrix:crm.webform",
		"PATH" => "/crm/webform/index.php",
	),
	array(
		"CONDITION" => "#^/\\.well-known#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/bitrix/groupdav.php",
	),
	array(
		"CONDITION" => "#^/marketplace/#",
		"RULE" => "",
		"ID" => "bitrix:rest.marketplace",
		"PATH" => "/marketplace/index.php",
	),
	array(
		"CONDITION" => "#^/crm/invoice/#",
		"RULE" => "",
		"ID" => "bitrix:crm.invoice",
		"PATH" => "/crm/invoice/index.php",
	),
	array(
		"CONDITION" => "#^/crm/product/#",
		"RULE" => "",
		"ID" => "bitrix:crm.product",
		"PATH" => "/crm/product/index.php",
	),
	array(
		"CONDITION" => "#^/crm/contact/#",
		"RULE" => "",
		"ID" => "bitrix:crm.contact",
		"PATH" => "/crm/contact/index.php",
	),
	array(
		"CONDITION" => "#^/workgroups/#",
		"RULE" => "",
		"ID" => "bitrix:socialnetwork_group",
		"PATH" => "/workgroups/index.php",
	),
	array(
		"CONDITION" => "#^/crm/button/#",
		"RULE" => "",
		"ID" => "bitrix:crm.button",
		"PATH" => "/crm/button/index.php",
	),
	array(
		"CONDITION" => "#^/crm/quote/#",
		"RULE" => "",
		"ID" => "bitrix:crm.quote",
		"PATH" => "/crm/quote/index.php",
	),
	array(
		"CONDITION" => "#^/crm/lead/#",
		"RULE" => "",
		"ID" => "bitrix:crm.lead",
		"PATH" => "/crm/lead/index.php",
	),
	array(
		"CONDITION" => "#^/crm/deal/#",
		"RULE" => "",
		"ID" => "bitrix:crm.deal",
		"PATH" => "/crm/deal/index.php",
	),
	array(
		"CONDITION" => "#^/crm/configs/exclusion/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/crm/configs/exclusion/index.php",
	),
	array(
		'CONDITION' => '#^/shop/orderform/#',
		'RULE' => '',
		'ID' => 'bitrix:crm.order.matcher',
		'PATH' => '/shop/orderform/index.php'
	),
	array(
		'CONDITION' => '#^/shop/buyer_group/#',
		'RULE' => '',
		'ID' => 'bitrix:crm.order.buyer_group',
		'PATH' => '/shop/buyer_group/index.php'
	),
	array(
		'CONDITION' => '#^/shop/buyer/#',
		'RULE' => '',
		'ID' => 'bitrix:crm.order.buyer',
		'PATH' => '/shop/buyer/index.php'
	),
	array(
		'CONDITION' => '#^/shop/import/instagram/#',
		'RULE' => '',
		'ID' => 'bitrix:crm.order.import.instagram',
		'PATH' => '/shop/import/instagram/index.php'
	),
	array(
		"CONDITION" => "#^/docs/pub/#",
		"RULE" => "",
		"ID" => "bitrix:webdav.extlinks",
		"PATH" => "/docs/pub/extlinks.php",
	),
	array(
		"CONDITION" => "#^/m/docs/#",
		"RULE" => "",
		"ID" => "bitrix:mobile.webdav.aggregator",
		"PATH" => "/m/docs/index.php",
	),
	array(
		"CONDITION" => "#^/rest/#",
		"RULE" => "",
		"PATH" => "/bitrix/services/rest/index.php",
	),
	array(
		"CONDITION" => "#^/docs/#",
		"RULE" => "",
		"ID" => "bitrix:webdav",
		"PATH" => "/docs/index.php",
	),
	array(
		"CONDITION" => "#^/pub/#",
		"RULE" => "",
		"ID" => "bitrix:crm.invoice.payment.client",
		"PATH" => "/pub/payment.php",
	),
	array(
		"CONDITION" => "#^/stssync/contacts/#",
		"RULE" => "",
		"ID" => "bitrix:stssync.server",
		"PATH" => "/bitrix/services/stssync/contacts/index.php",
	),
	array(
		"CONDITION" => "#^/stssync/calendar/#",
		"RULE" => "",
		"ID" => "bitrix:stssync.server",
		"PATH" => "/bitrix/services/stssync/calendar/index.php",
	),
	array(
		"CONDITION" => "#^/stssync/tasks/#",
		"RULE" => "",
		"ID" => "bitrix:stssync.server",
		"PATH" => "/bitrix/services/stssync/tasks/index.php",
	),
	array(
		"CONDITION" => "#^/stssync/contacts_crm/#",
		"RULE" => "",
		"ID" => "bitrix:stssync.server",
		"PATH" => "/bitrix/services/stssync/contacts_crm/index.php",
	),
	array(
		"CONDITION" => "#^/stssync/contacts_extranet/#",
		"RULE" => "",
		"ID" => "bitrix:stssync.server",
		"PATH" => "/bitrix/services/stssync/contacts_extranet/index.php",
	),
	array(
		"CONDITION" => "#^/stssync/contacts_extranet_emp/#",
		"RULE" => "",
		"ID" => "bitrix:stssync.server",
		"PATH" => "/bitrix/services/stssync/contacts_extranet_emp/index.php",
	),
	array(
		"CONDITION" => "#^/stssync/tasks_extranet/#",
		"RULE" => "",
		"ID" => "bitrix:stssync.server",
		"PATH" => "/bitrix/services/stssync/tasks_extranet/index.php",
	),
	array(
		"CONDITION" => "#^/stssync/calendar_extranet/#",
		"RULE" => "",
		"ID" => "bitrix:stssync.server",
		"PATH" => "/bitrix/services/stssync/calendar_extranet/index.php",
	),
	array(
		"CONDITION" => "#^/onec/#",
		"RULE" => "",
		"ID" => "bitrix:crm.1c.start",
		"PATH" => "/onec/index.php",
	),
	array(
		"CONDITION" => "#^/settings/configs/userconsent/#",
		"RULE" => "",
		"ID" => "bitrix:intranet.userconsent",
		"PATH" => "/settings/configs/userconsent.php",
	),
	array(
		"CONDITION" => "#^/sites/#",
		"RULE" => "",
		"ID" => "bitrix:landing.start",
		"PATH" => "/sites/index.php",
	),
	array(
		"CONDITION" => "#^/stores/#",
		"RULE" => "",
		"ID" => "bitrix:landing.start",
		"PATH" => "/stores/index.php",
	),
	array(
		"CONDITION" => "#^\\/?\\/mobile/mobile_component\\/(.*)\\/.*#",
		"RULE" => "componentName=\$1",
		"ID" => "",
		"PATH" => "/bitrix/services/mobile/jscomponent.php",
	),
	array(
		"CONDITION" => "#^\/?\/mobile/web_mobile_component\/(.*)\/.*#",
		"RULE" => "componentName=$1",
		"ID" => "",
		"PATH" => "/bitrix/services/mobile/webcomponent.php",
	),
	array(
		"CONDITION" => "#^\\/?\\/mobile/jn\\/(.*)\\/.*#",
		"RULE" => "componentName=$1",
		"ID" => "",
		"PATH" => "/bitrix/services/mobile/jscomponent.php",
	),
	array(
		"CONDITION" => "#^\\/?\\/mobile/jn\\/(.*)\\/.*#",
		"RULE" => "componentName=$1",
		"ID" => "",
		"PATH" => "/bitrix/services/mobile/jscomponent.php",
	),
	array(
		"CONDITION" => "#^\/?\/mobileapp/jn\/(.*)\/.*#",
		"RULE" => "componentName=$1",
		"ID" => "",
		"PATH" => "/bitrix/services/mobileapp/jn.php",
	),
	array(
		"CONDITION" => "#^/marketing/letter/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/marketing/letter.php",
	),
	array(
		"CONDITION" => "#^/marketing/ads/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/marketing/ads.php",
	),
	array(
		"CONDITION" => "#^/marketing/segment/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/marketing/segment.php",
	),
	array(
		"CONDITION" => "#^/marketing/template/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/marketing/template.php",
	),
	array(
		"CONDITION" => "#^/marketing/blacklist/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/marketing/blacklist.php",
	),
	array(
		"CONDITION" => "#^/marketing/contact/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/marketing/contact.php",
	),
	array(
		"CONDITION" => "#^/shop/settings/#",
		"RULE" => "",
		"ID" => "bitrix:crm.admin.page.controller",
		"PATH" => "/shop/settings/index.php",
	),
	array(
		"CONDITION" => "#^/shop/stores/#",
		"RULE" => "",
		"ID" => "bitrix:landing.start",
		"PATH" => "/shop/stores/index.php",
	),
	array(
		"CONDITION" => "#^/shop/orders/#",
		"RULE" => "",
		"ID" => "bitrix:crm.order",
		"PATH" => "/shop/orders/index.php",
	),
	array(
		"CONDITION" => "#^/marketing/rc/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/marketing/rc.php",
	),
	array(
		"CONDITION" => "#^/marketing/config/role/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/marketing/config/role.php",
	),
	array(
		'CONDITION' => '#^/crm/configs/document_numerators/#',
		'RULE' => '',
		'ID' => 'bitrix:crm.document_numerators.list',
		'PATH' => '/crm/configs/document_numerators/index.php',
	),
	array(
		'CONDITION' => '#^/mail/#',
		'RULE' => '',
		'ID' => 'bitrix:mail.client',
		'PATH' => '/mail/index.php',
	),
	array(
		"CONDITION" => "#^/crm/tracking/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/crm/tracking/index.php",
	),
);

?>