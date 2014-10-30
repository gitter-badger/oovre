Template.header.events({

    'click .new-post a': function(e) {

        var post = {
            title: "New Post",
            content: "Post content...",
            status: "draft"
        };

        Meteor.call('postInsert', post, function(err, result) {
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