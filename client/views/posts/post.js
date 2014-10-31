Template.viewPost.helpers({
    image: function() { return Images.findOne(this.imageId); }
});