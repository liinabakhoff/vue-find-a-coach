import { createStore } from 'vuex';
import coachesModule from './modules/coachesModule.js';
import requestsModule from './modules/requestsModule.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
});

export default store;
