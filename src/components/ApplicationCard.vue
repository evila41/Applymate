<script setup>
defineProps({
  application: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="rounded-2xl bg-slate-800 p-6 shadow-lg">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-semibold">{{ application.company }}</h2>
        <p class="mt-1 text-slate-300">{{ application.role }}</p>
      </div>

      <span class="rounded-full bg-slate-700 px-3 py-1 text-sm">
        {{ application.status }}
      </span>
    </div>
  </article>
</template>