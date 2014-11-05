Template.homeRecent.helpers({
    posts: function() {
        return Posts.find({status: 'published'}, {sort: {created: -1}});
    }
});

Template.homeRecentPost.helpers({
    excerpt: function() {
        var content = _.escape(this.content.substring(0, 50));
        return content;
    },

    author: function() {
        return getUserDetails(this.userId).profile.name;
    }
});