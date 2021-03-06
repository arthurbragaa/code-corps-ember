import Ember from 'ember';
import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function (serialized) {
    let type = Ember.typeOf(serialized);
    return (type === "array")  ? serialized  : [];
  },

  serialize: function (deserialized) {
    let type = Ember.typeOf(deserialized);
    if (type === 'array') {
      return deserialized;
    } else if (type === 'string') {
      return deserialized.split(',').map(function (item) {
        return item.trim();
      });
    } else {
      return [];
    }
  },
});
