import {useTodosStore} from "~/stores/todos";

const store = useTodosStore()
export const fetchTodos = async () => {
    const client = useSupabaseClient()
    const {data: todos} = await useAsyncData('todos', async () => {
        const {data} = await client.from('todos').select('id, title, description, status, due_date')
        return data
    })
    return todos
}

export const createTodo = async (todo: any) => {
    store.setShowAlert(true)
    store.setTodosAlertStatus('TEST TEST TEST')
    const client = useSupabaseClient()

    // @ts-ignore
    const res = await client.from('todos').insert({id: '4', title: todo})
    return res
}
