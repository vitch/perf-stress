import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  qrId: DS.attr('number'),
  model: DS.attr('string'),
  year: DS.attr('string'),
  size: DS.attr('string'),
  soleLength: DS.attr('number'),
  type: Ember.computed('data', function() {
    return this.store.find('equipment_type', this.get('data.type'));
  }),
  typeId: DS.attr('number'), // Duplicate of type - used so we don't have to query a relationship when putting the items into buckets by type for a much faster startup.
  //package: DS.belongsTo('package_level'),
  package: Ember.computed('data', function() {
    return this.store.find('package-level', this.get('data.package'));
  }),
  //currentRentals: DS.hasMany('rented_item')
  currentRentals: Ember.computed('data', function() {
    var equipmentItemId = this.get('id');
    return this.store.filter('rented_item', function(rentedItem) {
      return rentedItem.get('data.equipmentItem') === equipmentItemId;
    });
  })
});
