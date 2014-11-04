Template.homePostItem.helpers({
    image: function() { return Images.findOne(this.imageId); }
});