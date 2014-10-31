Template.editPost.helpers({

    title: function() { return this.title; },
    content: function() { return this.content; },
    status: function() { return this.status; },
    image: function() { return Images.findOne(this.imageId); },
    isPublished: function() { return this.status === 'published'; }

});

Template.editPost.events({

    'submit form': function(e) {
        e.preventDefault();

        var currentPostId = this._id;

        var post = {
            title: $(e.target).find('[name=title]').val(),
            content: $(e.target).find('[name=content]').val()
        };

        Posts.update(currentPostId, {$set: post}, function(error) {
        });
    },

    'change #image': function(e) {
        var currentPostId = this._id;
        FS.Utility.eachFile(e, function(file) {
            Images.insert(file, function(err, fileObj) {
                if(err)
                    alert(err.reason);
                var post = { imageId: fileObj._id };
                console.log(fileObj);
                Posts.update(currentPostId, {$set: post}, function(error) {
                    if(error)
                        alert(error.reason);
                });
            });
        });
    },

    'click .publish': function(e) {
        e.preventDefault();

        var currentPostId = this._id;
        var post = {
            status: 'published'
        };

        Posts.update(currentPostId, {$set: post}, function(error) {
            if(error)
                alert(error.reason);
            Router.go('viewPost', {_id: currentPostId});
        });
    },

    'click .unpublish': function(e) {
        e.preventDefault();

        var currentPostId = this._id;
        var post = {status: 'draft'}

        Posts.update(currentPostId, {$set:post}, function(error) {
            if(error)
                alert(error.reason);
            Router.go('editPost', {_id: currentPostId});
        });
    },

    'click .delete': function(e) {
        e.preventDefault();
        if(confirm('Delete this post?')) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('home');
        }
    }

});