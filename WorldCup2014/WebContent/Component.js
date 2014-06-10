jQuery.sap.require("sap.ui.demo.worldCup2014.util.TeamFormatter");
jQuery.sap.declare("sap.ui.demo.worldCup2014.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.worldCup2014.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.demo.worldCup2014.view.App",
			type : "JS",
			viewData : {
				component : this
			}
		});

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});

		oView.setModel(i18nModel, "i18n");

		// Loading TeamFormatter with JSON Models:
		jQuery.ajax({
			url : "./model/team.json",
			dataType : "json"
		}).done(function(data) {
			sap.ui.demo.worldCup2014.util.TeamFormatter.teams = data;
		});	
		
		jQuery.ajax({	
			url : "./model/venue.json",
			dataType : "json"
		}).done(function(data) {
			sap.ui.demo.worldCup2014.util.TeamFormatter.venues = data;
		});				

		// Using a local model for offline development
		var oMatch = new sap.ui.model.json.JSONModel("model/match.json");
		oView.setModel(oMatch, "matches");

		var oGroup = new sap.ui.model.json.JSONModel("model/group.json");
		oView.setModel(oGroup, "groups");

		var oTeam = new sap.ui.model.json.JSONModel("model/team.json");
		oTeam.setDefaultBindingMode("OneWay");
		oView.setModel(oTeam, "teams");

		// set device model
		var deviceModel = new sap.ui.model.json.JSONModel(
				{
					isPhone : jQuery.device.is.phone,
					isNoPhone : !jQuery.device.is.phone,
					listMode : (jQuery.device.is.phone) ? "None"
							: "SingleSelectMaster",
					listItemType : (jQuery.device.is.phone) ? "Active"
							: "Inactive"
				});
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel, "device");

		// set navigation model
		var oNavigation = new sap.ui.model.json.JSONModel({
			group : "",
			team: "",
			match : false
		});
		oView.setModel(oNavigation, "navigation");

		// done
		return oView;
	}
});