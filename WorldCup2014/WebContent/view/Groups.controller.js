sap.ui.controller("sap.ui.demo.worldCup2014.view.Groups", {

	handleListItemPress : function(evt) {
		// Retrieve Custom Data:
		var itemPressed = evt.getSource();
		var groupId = itemPressed.data("groupId");

		// Pass Group description to Navigation model:
		var oNavigation = this.getView().getModel("navigation");
		oNavigation.setProperty("/group", itemPressed.getTitle());

		// Filter Team model using the Group id:
		var filtersTeam = [];
		filtersTeam.push(new sap.ui.model.Filter("group_id",
				sap.ui.model.FilterOperator.EQ, groupId));

		var filterObj = {
			id : "teams",
			binding : "items",
			filter : filtersTeam
		};

		this.nav.to("Teams", undefined, filterObj);
	},

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.Groups
	 */
	onInit : function() {
		// Load Splash XML View fragment:
		if (!this._dialog) {
			this._dialog = sap.ui.xmlfragment(
					"sap.ui.demo.worldCup2014.view.Splash", this);
			this.getView().addDependent(this._dialog);
		}

		this._dialog.open();

		jQuery.sap.delayedCall(3000, this, function() {
			this._dialog.close();
		});
	}
});