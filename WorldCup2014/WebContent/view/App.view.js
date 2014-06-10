sap.ui.jsview("sap.ui.demo.worldCup2014.view.App", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf view.App
	 */
	getControllerName : function() {
		return "sap.ui.demo.worldCup2014.view.App";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf view.App
	 */
	createContent : function(oController) {
		// to avoid scroll bars on desktop the root view must be set to block
		// display
		this.setDisplayBlock(true);

		// create app
		this.app = new sap.m.SplitApp();

		// load the master page
		var groups = sap.ui.xmlview("Groups",
				"sap.ui.demo.worldCup2014.view.Groups");
		groups.getController().nav = this.getController();
		this.app.addPage(groups, true);

		// load empty detail page
		var empty = sap.ui.xmlview("Empty",
				"sap.ui.demo.worldCup2014.view.Empty");
		this.app.addPage(empty, false);

		// done
		return this.app;
	}

});