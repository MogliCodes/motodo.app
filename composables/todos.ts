import { v4 as uuidv4 } from 'uuid';

export const fetchTodos = async () => {
    const client = useSupabaseClient()
    const { data: todos } = await useAsyncData('todos', async () => {
        const { data } = await client.from('todos').select('id, title, description, status, due_date')
        return data
    })
    return todos
}

export const createTodo =  async (todoTitle : string, todoDescription: string) => {
    const client = useSupabaseClient()
    // console.log('todo', todo)
    // @ts-ignore
    const res = await client.from('todos').insert({ id: Math.floor(100000 + Math.random() * 900000), title: todoTitle, description: todoDescription, status: 'todo' })
    console.log('res', res)
    refreshNuxtData()
    return res
}
