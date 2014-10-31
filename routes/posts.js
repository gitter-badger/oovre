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

});

Router.route('/u/posts', {
    name: 'myPosts'
});

Router.onBeforeAction(requireLogin, {only: ['myPosts', 'editPost']});
Router.onBeforeAction(ownsPost, {only: 'editPost'});