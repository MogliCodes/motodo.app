

export const fetchTodos = async () => {
    const client = useSupabaseClient()
    const { data: todos } = await useAsyncData('todos', async () => {
        const { data } = await client.from('todos').select('id, title, description, status, due_date')
        return data
    })
    return todos
}

export const createTodo =  async (todo : any) => {
    const client = useSupabaseClient()
    console.log('todo', todo)
    // @ts-ignore
    const res = await client.from('todos').insert({ id: '4', title: todo})
    console.log('res', res)
    return res
}
