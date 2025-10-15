import { defineStore } from 'pinia'

export const useStorageStore = defineStore('storage', {
  state: () => ({
    storage: {
      height: 0,
    },
  }),
  getters: {},
  actions: {},
})
