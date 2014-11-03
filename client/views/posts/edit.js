Template.editPost.helpers({

    title: function() { return this.title; },
    content: function() { return this.content; },
    status: function() { return this.status; },
    image: function() { return Images.findOne(this.imageId); },
    isPublished: function() { return this.status === 'published'; }

});

Template.editPost.events({

    'blur #title': function(e) {
        var post = { title: $(e.target).val() };
        Meteor.call('savePost', post, function(error, result) {
            alert(result._id);
        });
    },

    'click .publish': function(e) {
        e.preventDefault();

        var currentPostId = this._id;
        var post = {
            status: 'published'
        };

        Posts.update(currentPostId, {$set: post}, function(error) {
            if(error)
                alert(error.reason);
            Router.go('viewPost', {_id: currentPostId});
        });
    },

    'click .unpublish': function(e) {
        e.preventDefault();

        var currentPostId = this._id;
        var post = {status: 'draft'}

        Posts.update(currentPostId, {$set:post}, function(error) {
            if(error)
                alert(error.reason);
            Router.go('editPost', {_id: currentPostId});
        });
    },

    'click .delete': function(e) {
        e.preventDefault();
        if(confirm('Delete this post?')) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('home');
        }
    }

});