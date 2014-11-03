Template.growler.helpers({

	growls: function() {
		return Growls.find({read: false}, {sort: {created: -1}});
	}

});