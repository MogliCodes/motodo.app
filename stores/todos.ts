import {defineStore} from 'pinia'

export const useTodosStore = defineStore('todos', {
    state: () => ({
        alert: '',
    }),
    actions: {
        setTodosAlertStatus(status: string): void {
            this.alert = status
        }
    }
})
