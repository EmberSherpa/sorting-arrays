import Ember from 'ember';
import range from 'lodash/utility/range';

export default Ember.Route.extend({
  queryParams: {
    order: {
      refreshModel: true
    }
  },
  model(params) {
    const items = range(1000).map(function(id){
      return Ember.Object.create({
        id,
        title: `Item ${id}`
      });
    });
    if (params.order === 'desc') {
      items.reverse();
    }
    return {
      items,
      params
    };
  }
});
