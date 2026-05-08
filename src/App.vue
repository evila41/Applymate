<script setup>
import { ref } from 'vue'

const applications = ref([
  {
    id: 1,
    company: 'Google',
    role: 'Frontend Developer',
    status: 'Applied',
    date: '2026-05-01',
    notes: '',
  },
  {
    id: 2,
    company: 'Blizzard',
    role: 'Game Developer',
    status: 'Rejected',
    date: '2026-05-02',
    notes: '',
  },
  {
    id: 3,
    company: 'Dell',
    role: 'Web Developer',
    status: 'Offer',
    date: '2026-05-03',
    notes: '',
  },
  {
    id: 4,
    company: 'Microsoft',
    role: 'Cloud Engineer',
    status: 'Interview',
    date: '2026-05-04',
    notes: '',
  },
])

function addApplication(newApplication) {
  applications.value.push({
    ...newApplication,
    id: Date.now(),
  })
}

function deleteApplication(id) {
  applications.value = applications.value.filter((app) => app.id !== id)
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <router-view
      :applications="applications"
      :addApplication="addApplication"
      :deleteApplication="deleteApplication"
    />
  </div>
</template>