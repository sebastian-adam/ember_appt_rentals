import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        text: this.get('text'),
        date: new Date(Date.now()).toString()
      };
      this.sendAction('save0', params);
    }
  }
});
