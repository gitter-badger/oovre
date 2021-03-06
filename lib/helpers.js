getCurrentRoute = function() {
    var current = Router.current();
    return current.route.options.path;
}

isCurrentRoute = function(path) {
    var current = getCurrentRoute();
    return current === path || false;
}

getUserDetails = function(userId) {
    return Meteor.users.findOne({_id: userId});
}