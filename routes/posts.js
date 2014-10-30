Router.route('/:_id/edit', { 
    name: 'editPost',
    data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/u/posts', {
    name: 'myPosts'
});