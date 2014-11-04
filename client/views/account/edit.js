Template.editAccount.events({

    'click .update': function(e) {
        e.preventDefault();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.name": "Joshua Kidd"}});
    }

});