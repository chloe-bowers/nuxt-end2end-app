<template>
  <AwesomeSection>
    <h2>Users List</h2>
    <input type="text" placeholder="Search..." v-model="search" />
    <ul v-for="user in filteredUsers" :key="user.id">
      <NuxtLink :to="`/user/${user.id}`" tag="li">
        <p>Name: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Username: {{ user.username }}</p>
        <hr />
      </NuxtLink>
    </ul>
  </AwesomeSection>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app';

const search = ref('');

const filteredUsers = computed(() =>
  users
    ? users.value.filter((user) =>
        user.name.toLowerCase().includes(search.value.toLowerCase())
      )
    : []
);

const { data: users } = useAsyncData(() =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
);
</script>
