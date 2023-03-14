import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    showAlert: false,
    alert: 'test',
  }),
  actions: {
    setShowAlert(status: boolean): void {
      this.showAlert = status
    },
    setTodosAlertStatus(status: string): void {
      this.alert = status
    },
  },
})
