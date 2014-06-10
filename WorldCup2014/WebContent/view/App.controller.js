sap.ui.controller("sap.ui.demo.worldCup2014.view.App", {
	/**
	 * Navigates to another page
	 * @param {string} pageId The id of the next page
	 * @param {sap.ui.model.Context} context The data context to be applied to the next page (optional)
	 * @param {Object} Plain Javascript object containing a sap.ui.model.Filter array and the binding name to have filtering applied
	 */
	to : function (pageId, context, filters) {
		
		var app = this.getView().app;
		
		// load page on demand
		var master = ("Groups" === pageId);
		if (app.getPage(pageId, master) === null) {
			var page = sap.ui.view({
				id : pageId,
				viewName : "sap.ui.demo.worldCup2014.view." + pageId,
				type : "XML"
			});
			page.getController().nav = this;
			app.addPage(page, master);
			jQuery.sap.log.info("app controller > loaded page: " + pageId);
		}
		
		// show the page
		app.to(pageId);
		
		// set data context on the page
		if (context) {
			var page = app.getPage(pageId);
			page.setBindingContext(context);
		}
		
		// apply filters (if any):
		if(filters) {
			var page = app.getPage(pageId);
			var obj = page.byId(filters.id);
			var binding = obj.getBinding(filters.binding);
			binding.filter(filters.filter);	
		}
	},
	
	/**
	 * Navigates back to a previous page
	 * @param {string} pageId The id of the next page
	 */
	back : function (pageId) {
		this.getView().app.backToPage(pageId);
	}
});