import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  address: DS.attr('string'),
  photo: DS.attr('string')
});