import Ember from 'ember';

export default Ember.Route.extend({
  deactivate() {
    this.modelFor('contacts/edit').rollbackAttributes();
  },
  actions: {
    save() {
      let self = this;
      let model = this.modelFor('contacts/edit');

      model.save().then(function () {
        self.transitionTo('contacts.show', model);
      });
    },
    cancel() {
      let model = this.modelFor('contacts/edit');
      this.transitionTo('contacts.show', model);
    }
  }
});
