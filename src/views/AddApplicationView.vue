<script setup>
import { reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const props = defineProps({
  addApplication: {
    type: Function,
    required: true,
  },
})

const router = useRouter()

const form = reactive({
  company: '',
  role: '',
  date: '',
  status: '',
  notes: '',
})

function handleSubmit() {
  if (!form.company || !form.role || !form.status) {
    alert('Please fill in company, role, and status.')
    return
  }

  props.addApplication({
    company: form.company,
    role: form.role,
    date: form.date,
    status: form.status,
    notes: form.notes,
  })

  router.push('/')
}
</script>

<template>
  <main class="mx-auto max-w-3xl px-6 py-10">
    <RouterLink
      to="/"
      class="mb-8 inline-block text-sm text-slate-400 transition hover:text-white"
    >
      ← Back
    </RouterLink>

    <h1 class="mb-8 text-center text-4xl font-bold">Add New Application</h1>

    <div class="rounded-2xl bg-slate-800 p-8 shadow-lg">
      <form class="space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label class="mb-2 block text-sm font-medium">Company Name</label>
          <input
            v-model="form.company"
            type="text"
            placeholder="Enter company name"
            class="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium">Job Title</label>
          <input
            v-model="form.role"
            type="text"
            placeholder="Enter job title"
            class="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium">Application Date</label>
          <input
            v-model="form.date"
            type="date"
            class="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium">Status</label>
          <select
            v-model="form.status"
            class="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none"
          >
            <option value="">Select status</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium">Notes</label>
          <textarea
            v-model="form.notes"
            rows="4"
            placeholder="Add notes here"
            class="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full rounded-xl bg-green-500 px-5 py-3 font-medium text-white transition hover:bg-green-600"
        >
          Save Application
        </button>
      </form>
    </div>
  </main>
</template>