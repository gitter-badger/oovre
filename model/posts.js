Posts = new Mongo.Collection('posts');

Meteor.methods({

    postInsert: function(postAttributes) {
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