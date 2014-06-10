jQuery.sap.declare("sap.ui.demo.worldCup2014.util.TeamFormatter");

sap.ui.demo.worldCup2014.util.TeamFormatter = {
	teamName : function(value) {
		return sap.ui.demo.worldCup2014.util.TeamFormatter.teams.team_collection
				.filter(function(item) {
					return item.id === value;
				})[0].name;
	},

	venueName : function(value) {
		return sap.ui.demo.worldCup2014.util.TeamFormatter.venues.venue_collection
				.filter(function(item) {
					return item.id === value;
				})[0].name;
	},

	venueCity : function(value) {
		return sap.ui.demo.worldCup2014.util.TeamFormatter.venues.venue_collection
				.filter(function(item) {
					return item.id === value;
				})[0].city;
	},
};