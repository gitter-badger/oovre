// Setup the Mandrill API configuration.

Meteor.startup(function() {
    return Meteor.Mandrill.config({
        username: "kidd.josh.343@gmail.com",
        key: "jus93i7IVMJ65aLOs6F9eQ"
    });
});
