Template.myPosts.helpers({
    posts: function() {
        return Posts.find(
            { userId: Meteor.userId() },
            { sort: { created: -1 } }
        );
    }
});