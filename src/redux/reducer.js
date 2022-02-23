import filterReducer from '../components/Filters/filterReducer'
import todolistReducer from '../components/TodoList/todolistReducer'


const rootReducer = (state = {}, action) => {
    return {
        filters: filterReducer(state.filters, action),
        todolist: todolistReducer(state.todoList, action)
    }
}

export default rootReducer