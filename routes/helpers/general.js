requireLogin = function() {
    if(!Meteor.user()) {
        if(Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        }else{
            Router.go('home');
        }
    }else{
        this.next();
    }
}

ownsPost = function() {
    var post = Posts.findOne({_id: this.params._id});
    if(post) {
        if(Meteor.userId() !== post.userId) {
            this.render(this.notFoundTemplate);
        }else{ 
            this.next();
        }
    }else{
        this.render(this.notFoundTemplate);
    }
}