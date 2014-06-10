jQuery.sap.require("sap.ui.demo.worldCup2014.util.TeamFormatter");
sap.ui.controller("sap.ui.demo.worldCup2014.view.Teams", {

	handleTeamPress : function(evt) {
		// Retrieve Custom Data:
		var itemPressed = evt.getSource();
		var teamId = itemPressed.data("teamId");

		// Pass Team description to Navigation model:
		var oNavigation = this.getView().getModel("navigation");
		oNavigation.setProperty("/team", teamId);

		// Filter Matches of the team:
		var filter1 = new sap.ui.model.Filter([
				new sap.ui.model.Filter("team1_id",
						sap.ui.model.FilterOperator.EQ, teamId),
				new sap.ui.model.Filter("team2_id",
						sap.ui.model.FilterOperator.EQ, teamId) ]);

		// Only Classification matches should be considered:
		var filter2 = new sap.ui.model.Filter("stage",
				sap.ui.model.FilterOperator.EQ, "0");

		var filterMatches = [ filter1, filter2 ];

		var filterObj = {
			id : "matches",
			binding : "items",
			filter : filterMatches
		};

		this.nav.to("Matches", undefined, filterObj);
	},

	handleNavButtonPress : function(evt) {
		this.nav.back("Groups");
	}
});