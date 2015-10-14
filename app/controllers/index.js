import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['order'],
  order: 'asc',
  actions: {
    changeOrder() {
      const order = this.get('order');
      this.set('order', order === 'asc' ? 'desc' : 'asc');
    }
  }
});
