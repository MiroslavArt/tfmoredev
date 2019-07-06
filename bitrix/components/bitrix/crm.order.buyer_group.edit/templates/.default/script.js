(function() {
	'use strict';

	/**
	 * @namespace BX.Crm.BuyerGroup.Edit
	 */
	BX.namespace('BX.Crm.BuyerGroup.Edit');

	BX.Crm.BuyerGroup.Edit = function(options)
	{
		this.params = options.params || {};
		this.signedParameters = options.signedParameters;
		this.componentName = options.componentName;

		this.bindEvents();
	};

	BX.Crm.BuyerGroup.Edit.prototype =
		{
			processSuccess: function(data)
			{
				if (this.params.IFRAME)
				{
					window.top.BX.SidePanel.Instance.postMessage(window, 'OrderBuyerGroupEdit::onSave', {});
					window.top.BX.SidePanel.Instance.close();
				}
				else if (BX.type.isNotEmptyString(data.redirectUrl))
				{
					document.location.href = data.redirectUrl;
				}
			},

			clearErrors: function()
			{
				BX.cleanNode(BX('bx-crm-error'));
			},

			fillErrors: function(errors)
			{
				var errorNode = BX('bx-crm-error');
				var html = '';

				errors.forEach(function(error){
					html += '<div class="crm-entity-widget-content-error-text">' + error.message + '</div>';
				});

				errorNode.innerHTML = html;
				BX.scrollToNode(errorNode);
			},

			saveAction: function(event)
			{
				var form = BX('crm-order-buyer-group-edit-wrapper');
				var button = BX.getEventTarget(event);

				BX.addClass(button, 'ui-btn-clock');

				BX.ajax.runComponentAction(
					this.componentName,
					'saveFormAjax',
					{
						mode: 'class',
						signedParameters: this.signedParameters,
						data: BX.ajax.prepareForm(form)
					}
				)
					.then(function (response) {
						BX.removeClass(button, 'ui-btn-clock');
						this.clearErrors();
						this.processSuccess(response.data);
					}.bind(this))
					.catch(function (response) {
						BX.removeClass(button, 'ui-btn-clock');
						this.fillErrors(response.errors);
					}.bind(this));
			},

			closeSlider: function()
			{
				window.top.BX.SidePanel.Instance.close();
			},

			saveClickHandler: function(event)
			{
				this.saveAction(event);
			},

			bindEvents: function()
			{
				BX.bind(BX('CRM_ORDER_BUYER_GROUP_EDIT_APPLY_BUTTON'), 'click', BX.proxy(this.saveClickHandler, this));
				BX.bind(BX('CRM_ORDER_BUYER_GROUP_EDIT_CANCEL'), 'click', BX.proxy(this.closeSlider, this));
				BX.bind(BX('CRM_ORDER_BUYER_GROUP_EDIT_BACK'), 'click', BX.proxy(this.closeSlider, this));
			}
		};
})();
