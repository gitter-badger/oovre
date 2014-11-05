Template.header.helpers({
    avatar: function() {
        // for now just return gravatar image... will add uploading later.
        return Gravatar.imageUrl(Meteor.user().emails[0].address, {
            size: 45
        });
    }
});

Template.globalActions.events({

    'click .new-post': function(e) {

        var post = {
            title: "New Post",
            content: "Post content...",
            status: "draft"
        };

        Meteor.call('post', post, function(err, result) {
            if(err)
                return alert('Error: ' + error.reason);
            Router.go('editPost', {_id: result._id});
        });
    },

    'click .logout': function(e) {
        if(Meteor.user()) {
            Meteor.logout();
            Router.go('home');
        }
    }

});
