import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        showOnMap() {
            Ember.Logger.warn('Mouseenter');
            // Somehow trigger infowindow.open() for the marker context in the map
        }
    }
});
