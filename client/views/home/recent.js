Template.homeRecent.helpers({
    posts: function() {
        return Posts.find({status: 'published'}, {sort: {created: -1}});
    }
});

Template.homeRecentPost.helpers({
    excerpt: function() {
        return _.escape(this.content.substring(0, 50));
    },

    author: function() {
        return Meteor.users.findOne({_id: this.userId});
    }
});