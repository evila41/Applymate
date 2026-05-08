<script setup>
defineProps({
  application: {
    type: Object,
    required: true,
  },
  deleteApplication: {
    type: Function,
    required: true,
  },
})

function getStatusClass(status) {
  if (status === 'Applied') return 'bg-blue-600'
  if (status === 'Interview') return 'bg-yellow-500 text-black'
  if (status === 'Offer') return 'bg-green-600'
  if (status === 'Rejected') return 'bg-red-600'
  return 'bg-slate-700'
}
</script>

<template>
  <article class="rounded-2xl bg-slate-800 p-6 shadow-lg">
    <div class="flex items-start justify-between gap-4">
      <div>
        <h2 class="text-2xl font-semibold">{{ application.company }}</h2>
        <p class="mt-1 text-slate-300">{{ application.role }}</p>

        <p v-if="application.date" class="mt-2 text-sm text-slate-400">
          Applied: {{ application.date }}
        </p>

        <p v-if="application.notes" class="mt-2 text-sm text-slate-400">
          {{ application.notes }}
        </p>
      </div>

      <div class="flex flex-col items-end gap-3">
        <span
          class="rounded-full px-3 py-1 text-sm font-medium"
          :class="getStatusClass(application.status)"
        >
          {{ application.status }}
        </span>

        <button
          @click="deleteApplication(application.id)"
          class="rounded-lg bg-slate-700 px-3 py-2 text-sm hover:bg-slate-600"
        >
          Delete
        </button>
      </div>
    </div>
  </article>
</template>