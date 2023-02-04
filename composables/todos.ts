

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
    console.log(todo)
    // @ts-ignore
    const res = await client.from('todos').insert({ id: '3', title: 'Create todo item'})
    console.log('res', res)
    return res
}
