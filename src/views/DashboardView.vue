<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ApplicationCard from '../components/ApplicationCard.vue'

const applications = ref([
  {
    id: 1,
    company: 'Google',
    role: 'Frontend Developer',
    status: 'Applied',
  },
  {
    id: 2,
    company: 'Blizzard',
    role: 'Game Developer',
    status: 'Rejected',
  },
  {
    id: 3,
    company: 'Dell',
    role: 'Web Developer',
    status: 'Offer',
  },
  {
    id: 4,
    company: 'Microsoft',
    role: 'Cloud Engineer',
    status: 'Interview',
  },
])
</script>

<template>
  <main class="mx-auto max-w-6xl px-6 py-10">
    <div class="mb-10 flex flex-col items-center gap-6">
      <h1 class="text-4xl font-bold">ApplyMate</h1>

      <RouterLink
        to="/add"
        class="rounded-xl bg-green-500 px-5 py-3 font-medium text-white transition hover:bg-green-600"
      >
        + Add Application
      </RouterLink>
    </div>

    <section class="space-y-4">
      <ApplicationCard
        v-for="application in applications"
        :key="application.id"
        :application="application"
      />
    </section>
  </main>
</template>