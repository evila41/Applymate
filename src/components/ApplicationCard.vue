<script setup>
defineProps({
  application: {
    type: Object,
    required: true,
  },
})

const statusClasses = {
  Applied: 'bg-slate-500 text-white',
  Interview: 'bg-yellow-400 text-black',
  Offer: 'bg-green-500 text-white',
  Rejected: 'bg-red-500 text-white',
}
</script>

<template>
  <div class="rounded-xl bg-slate-800 p-5 shadow-md">
    <div class="flex items-start justify-between gap-4">
      <div>
        <h2 class="text-lg font-semibold">{{ application.company }}</h2>
        <p class="text-sm text-slate-300">{{ application.role }}</p>
      </div>

      <span
        class="rounded-full px-4 py-1 text-sm font-medium"
        :class="statusClasses[application.status] || 'bg-slate-600 text-white'"
      >
        {{ application.status }}
      </span>
    </div>
  </div>
</template>