Router.map(function() {

	this.route('editPost', {
		path: '/:_id/edit',
		data: function() {
            var post = Posts.findOne({_id: this.params._id, userId: Meteor.userId()});
			return post;
		}
	});

    this.route('viewPost', {
        path: '/p/:_id',
        data: function() {
            var post = Posts.findOne({_id: this.params._id, status: 'published'});
            return post;
        }
    });

    this.route('dashboard', {
        path: '/dashboard'
    });

    this.route('explore', {
        path: '/explore'
    });

});

Router.onBeforeAction(requireLogin, {only: ['dashboard', 'editPost']});
Router.onBeforeAction(ownsPost, {only: 'editPost'});