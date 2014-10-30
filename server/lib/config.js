Accounts.config({
    sendVerificationEmail: false
});

Accounts.onCreateUser(function(options, user) {
    Router.go('welcome');
});