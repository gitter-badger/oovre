Template.home.helpers({
    posts: function() {
        return Posts.find({status: 'published'}, {sort: {created: -1}});
    }
});