Posts = new Mongo.Collection('posts');

Posts.allow({
    update: function(userId, post) { return ownsDocument(userId, post); },
    remove: function(userId, post) { return ownsDocument(userId, post); }
});

Meteor.methods({

    post: function(postAttributes) {
        check(postAttributes, {
            title: String,
            content: String,
            status: String
        });

        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            created: new Date()
        });

        var postId = Posts.insert(post);
        
        return {
            _id: postId
        };
    }
    
});