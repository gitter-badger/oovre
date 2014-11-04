Router.map(function() {

	this.route('editPost', {
		path: '/:_id/edit',
		data: function() {
			return Posts.findOne(this.params._id);
		}
	});

    this.route('viewPost', {
        path: '/p/:_id',
        data: function() {
            return Posts.findOne({_id: this.params._id, status: 'published'});
        }
    });

    this.route('dashboard', {
        path: '/dashboard'
    });

    this.route('explore', {
        path: '/explore'
    });

});

Router.onBeforeAction(requireLogin, {only: ['myPosts', 'editPost']});
Router.onBeforeAction(ownsPost, {only: 'editPost'});