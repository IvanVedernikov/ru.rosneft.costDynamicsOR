sap.ui.define([
		"ru/rosneft/costDynamicsOR/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("ru.rosneft.costDynamicsOR.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);