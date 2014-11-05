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
    return Posts.findOne(this._id).status === 'published';
});