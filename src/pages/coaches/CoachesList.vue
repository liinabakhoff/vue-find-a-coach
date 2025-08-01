<template>
  <div>
    <section><coach-filter @change-filter="setFilters"></coach-filter></section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline">Refresh</base-button>
          <base-button :link="true" to="/register"
            >Register as Coach</base-button
          >
        </div>

        <ul v-if="hasCoaches">
          <coaches-list-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :areas="coach.areas"
            :description="coach.description"
            :hourlyRate="coach.hourlyRate"
          ></coaches-list-item>
        </ul>
        <h3 v-else>No coaches found</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachesListItem from '../../components/coaches/CoachesListItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    'coaches-list-item': CoachesListItem,
    'coach-filter': CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: false,
      },
    };
  },
  computed: {
    ...mapGetters('coaches', ['coaches', 'hasCoaches']),
    filteredCoaches() {
      return this.coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
  },
  created() {
    console.log(this.$store.getters['coaches/coaches']);
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
