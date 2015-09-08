import Ember from 'ember';

export default Ember.Controller.extend({
  filter: '',
  filterText: '',

  onFilterTextChange: Ember.observer('filterText', function () {
    Ember.run.debounce(this, this.applyFilter, 1000);
  }),

  applyFilter() {
    this.set('filter', this.get('filterText'));
  },

  filteredContacts: Ember.computed('filter', function () {
    let filter = this.get('filter');
    let contacts = this.get('model');

    return contacts.filter(function (contact) {
      return contact.get('fullName').toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
  })
});
