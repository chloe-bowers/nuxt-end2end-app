<template>
  <article>
    <h1>User profile</h1>
    <div v-if="user">
      <ul v-html="renderUser(user)"></ul>
    </div>
  </article>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app';
import { ref } from 'vue';
import {
  renderUser,
} from '~/utils/utils.ts';

const route = useRoute();
const userId = route.params.id; //fetch id passed from 'UserList.vue'
const user = ref(null);

useAsyncData(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  user.value = await response.json();
});
</script>

<style></style>
