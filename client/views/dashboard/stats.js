Template.simpleStats.helpers({

    postCount: function() {
        return Posts.find({userId: Meteor.userId()}).count();
    },

    publishedPostCount: function() {
        return Posts.find({userId: Meteor.userId(), status: 'published'}).count();
    },

    draftPostCount: function() {
        return Posts.find({userId: Meteor.userId(), status: 'draft'}).count();
    }

});