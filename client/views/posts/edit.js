Template.editPost.helpers({

    title: function() { return this.title; },
    content: function() { return this.content; },
    status: function() { return this.status; },
    image: function() { return Images.findOne(this.imageId); }

});

Template.editPost.events({

    'submit #editPostForm': function(e) {
        e.preventDefault();

        var image;
        var currentPostId = this._id;
        var file = $(e.target).find('[name=files]').files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            image = Images.insert({src: e.target.result});
        };
        reader.readAsDataURL(file);

        var post = {
            title: $(e.target).find('[name=title]'),
            content: $(e.target).find('[name=content]'),
            imageId: image._id
        };

        Posts.update(currentPostId, {$set: post}, function(error) {
            // Finish updating or show errors
        });
    },

    'click #publishPost': function(e) {
        e.preventDefault();

        var post = {
            status: 'published'
        }

        Posts.update(this._id, {$set: post}, function(error) {

        });
    },

    'click #deletePost': function(e) {
        e.preventDefault();
        if(confirm('Delete this post?')) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('home');
        }
    }

});