Template.home.helpers({
    posts: function() {
        return Posts.find({status: 'published'}, {sort: {created: -1}});
    }
});

Template.homePostItem.helpers({
    image: function() {
        return Images.findOne(this.imageId);
    }
});