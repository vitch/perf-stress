import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PerfENV.locationType
});

Router.map(function() {
});

export default Router;