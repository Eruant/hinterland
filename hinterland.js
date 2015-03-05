var Rooms = new Mongo.Collection('rooms');

if (Meteor.isClient) {

    Template.body.helpers({
        rooms: function () {
            return Rooms.find({});
        }
    });
}
