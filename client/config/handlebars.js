// UI Helpers for all templates
UI.registerHelper('hasAnyPosts', function() {
    return hasAnyPosts();
});

UI.registerHelper('isCurrentPost', function() {
    return (isCurrentRoute('/:_id/edit') || isCurrentRoute('/p/:_id')) ? true : false;
});

UI.registerHelper('isCurrentPostEdit', function() {
    return isCurrentRoute('/:_id/edit') ? true : false;
});

UI.registerHelper('isPublished', function() {
    console.log(this._id);
    var currentPostId = this._id;
    var currentPost = Posts.findOne(currentPostId);
    return currentPost.status === 'published';
});