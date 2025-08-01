<template>
  <li>
    <h2>{{ fullName }}</h2>
    <div>
      Areas of expertees:
      <base-badge
        v-for="area in areas"
        :key="area"
        :title="area"
        :type="area"
      ></base-badge>
    </div>
    <div>Rate: ${{ hourlyRate }}/h</div>
    <div class="actions">
      <base-button link :to="coachContactLink" mode="outline"
        >Contact</base-button
      ><base-button link :to="coachDetailLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'areas', 'description', 'hourlyRate'],
  data() {
    return {};
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachDetailLink() {
      return `${this.$route.path}/${this.id}`;
    },
    coachContactLink() {
      return this.coachDetailLink + '/contact';
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
