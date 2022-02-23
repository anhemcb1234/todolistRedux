export const toDoListSelctor = (state) => {
    const newState = state.todolist.filter((x) => {
        if(state.filters.status === 'All') {
            return x.name.includes(state.filters.search)
        }
        return (
            x.name.includes(state.filters.search) && (state.filters.status === 'Todo' ? !x.complated : x.completed)
        ) 
    });
    return newState
}
