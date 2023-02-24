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

export const createTodo = async (todoTitle: string, todoDescription: string) => {

    const client = useSupabaseClient()
    const todo = {
        id: numericUUID(),
        title: todoTitle,
        description: todoDescription
    }
    // @ts-ignore
    const res = await client.from('todos').insert(todo)

    if(res.status === 201) {
        store.setShowAlert(true)
        store.setTodosAlertStatus('Todo has been saved successfully.')
        hideAlert()
    } else {
        store.setShowAlert(true)
        store.setTodosAlertStatus(`Error ${res.status.toString()}`)
        hideAlert()
    }

    return res.status
}

function numericUUID() {
    let result = '';
    for (let i = 0; i < 16; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}

function hideAlert() {
    setTimeout(() => {
        store.setShowAlert(false)
    }, 3000)
}
