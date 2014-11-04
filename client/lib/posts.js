hasAnyPosts = function() {
    if(!Meteor.user())
        return false;

    if(Posts.findOne({userId: Meteor.userId()}))
        return true;

    return false;
}