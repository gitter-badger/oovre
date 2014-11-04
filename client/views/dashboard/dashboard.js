Template.dashboard.helpers({
    posts: function() {
        return Posts.find(
            { userId: Meteor.userId() },
            { sort: { created: -1 } }
        );
    }
});

Template.dashboard.events({

    'click .delete': function(e) {
        e.preventDefault();
        if(confirm('Delete this post?')) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
        }
    }

});