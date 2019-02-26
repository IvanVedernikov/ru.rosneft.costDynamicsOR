jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"ru/rosneft/costDynamicsOR/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"ru/rosneft/costDynamicsOR/test/integration/pages/Worklist",
		"ru/rosneft/costDynamicsOR/test/integration/pages/Object",
		"ru/rosneft/costDynamicsOR/test/integration/pages/NotFound",
		"ru/rosneft/costDynamicsOR/test/integration/pages/Browser",
		"ru/rosneft/costDynamicsOR/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ru.rosneft.costDynamicsOR.view."
	});

	sap.ui.require([
		"ru/rosneft/costDynamicsOR/test/integration/WorklistJourney",
		"ru/rosneft/costDynamicsOR/test/integration/ObjectJourney",
		"ru/rosneft/costDynamicsORleExecutionleExecution/test/integration/NavigationJourney",
		"ru/rosneft/costDynamicsOR/test/integration/NotFoundJourney",
		"ru/rosneft/costDynamicsOR/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});