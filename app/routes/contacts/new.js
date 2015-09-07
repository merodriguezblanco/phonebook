import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact');
  },
  deactivate() {
    let model = this.modelFor('contacts/new');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },
  actions: {
    save() {
      let self = this;
      let model = this.modelFor('contacts/new');

      model.save().then(function () {
        self.transitionTo('contacts.show', model);
      });
    },
    cancel() {
      this.transitionTo('contacts');
    }
  }
});
